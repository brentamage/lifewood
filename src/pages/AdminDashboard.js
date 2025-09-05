import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [actionError, setActionError] = useState(''); // For action errors

  useEffect(() => {
    const fetchApplications = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('http://localhost:5000/api/applications');
        if (!res.ok) throw new Error('Failed to fetch applications');
        const data = await res.json();
        setApplications(data);
      } catch (err) {
        console.error(err);
        setError('Error loading applications');
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Remove application locally after action
  const removeApplicationFromState = (id) => {
    setApplications((prev) => prev.filter((app) => app._id !== id));
  };

  // Accept action handler
  // Accept action handler
const handleAccept = async (id) => {
  setActionError('');
  try {
    const res = await fetch(`http://localhost:5000/api/applications/${id}/accept`, {
      method: 'PUT',
    });
    if (!res.ok) throw new Error('Failed to accept application');

    // Update status to 'ACCEPTED' in local state instead of removing it
    setApplications((prev) =>
      prev.map((app) =>
        app._id === id ? { ...app, status: 'ACCEPTED' } : app
      )
    );
  } catch (err) {
    console.error(err);
    setActionError('Error accepting application');
  }
};


  // Delete action handler
  const handleDelete = async (id) => {
    setActionError('');
    try {
      const res = await fetch(`http://localhost:5000/api/applications/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete application');

      // Remove from UI after deleting
      removeApplicationFromState(id);
    } catch (err) {
      console.error(err);
      setActionError('Error deleting application');
    }
  };

  if (loading) return <div className="p-6 text-center">Loading applications...</div>;
  if (error) return <div className="p-6 text-center text-red-600">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Applications</h1>

      {actionError && (
        <div className="mb-4 text-red-600 font-semibold">{actionError}</div>
      )}

      {applications.length === 0 ? (
        <div>No applications found.</div>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">Full Name</th>
              <th className="border border-gray-300 p-2 text-left">Age</th>
              <th className="border border-gray-300 p-2 text-left">Degree</th>
              <th className="border border-gray-300 p-2 text-left">Experience</th>
              <th className="border border-gray-300 p-2 text-left">Email</th>
              <th className="border border-gray-300 p-2 text-left">Project Name</th>
              <th className="border border-gray-300 p-2 text-left">Status</th>
              <th className="border border-gray-300 p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app._id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2">{app.fullName}</td>
                <td className="border border-gray-300 p-2">{app.age}</td>
                <td className="border border-gray-300 p-2">{app.degree}</td>
                <td className="border border-gray-300 p-2">{app.experience}</td>
                <td className="border border-gray-300 p-2">{app.email}</td>
                <td className="border border-gray-300 p-2">{app.projectName}</td>
                <td className="border border-gray-300 p-2 text-yellow-700 font-semibold">
                  {app.status || 'PENDING'}
                </td>
                <td className="border border-gray-300 p-2 space-x-2">
                  <button
                    onClick={() => handleAccept(app._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => handleDelete(app._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminDashboard;
