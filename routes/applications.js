const express = require('express');
const router = express.Router();

const Application = require('../models/applications');
const { sendEmail } = require('../utils/mailer');

// GET all applications
router.get('/', async (req, res) => {
  try {
    const applications = await Application.find();
    res.json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err.message);
    res.status(500).json({ error: 'Failed to fetch applications' });
  }
});

// POST new application
router.post('/', async (req, res) => {
  try {
    const {
      fullName,
      age,
      degree,
      experience,
      email,
      project,
      projectName,
    } = req.body;

    const application = new Application({
      fullName,
      age,
      degree,
      experience,
      email,
      project,
      projectName,
      status: 'PENDING',
    });

    await application.save();

    // Send confirmation email
    const subject = 'Application Received';
    const message = `Hi ${fullName},\n\nThank you for applying to the project "${projectName}". We have received your application and will get back to you soon.\n\nBest regards,\nYour Team`;

    await sendEmail(email, subject, message);

    res.status(201).json(application);
  } catch (err) {
    console.error('❌ Error creating application:', err.message);
    res.status(500).json({ error: 'Failed to create application' });
  }
});

// PUT /api/applications/:id/accept - Accept an application
router.put('/:id/accept', async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    application.status = 'ACCEPTED';
    await application.save();

    // Send acceptance email
    const subject = '🎉 Application Accepted';
    const message = `Hi ${application.fullName},\n\nGreat news! Your application for "${application.projectName}" has been accepted.\n\nWelcome aboard!\n\nBest regards,\nYour Team`;

    await sendEmail(application.email, subject, message);

    res.json(application);
  } catch (error) {
    console.error('❌ Error accepting application:', error.message);
    res.status(500).json({ error: 'Failed to accept application' });
  }
});

// DELETE /api/applications/:id - Delete an application
router.delete('/:id', async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).json({ error: 'Application not found' });
    }

    res.json({ message: 'Application deleted successfully' });
  } catch (error) {
    console.error('❌ Error deleting application:', error.message);
    res.status(500).json({ error: 'Failed to delete application' });
  }
});

module.exports = router;
