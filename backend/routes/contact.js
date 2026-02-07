import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST: Submit contact form
router.post('/submit', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields'
      });
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for contacting! I will get back to you soon.',
      data: {
        id: contact._id,
        name: contact.name,
        email: contact.email
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// GET: Retrieve all contacts (for admin)
router.get('/all', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100);

    res.json({
      success: true,
      data: contacts,
      total: contacts.length
    });

  } catch (error) {
    console.error('Fetch contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch contacts'
    });
  }
});

export default router;