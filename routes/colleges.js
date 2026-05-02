const express  = require('express');
const router   = express.Router();
const College  = require('../models/College');

// GET all colleges
router.get('/', async (req, res) => {
  try {
    const { state, type, exam, fees } = req.query;
    let filter = {};

    if (state) filter.state = state;
    if (type)  filter.type  = type;
    if (exam)  filter.exam  = exam;
    if (fees === 'low')  filter.fees = { $lt: 100000 };
    if (fees === 'mid')  filter.fees = { $gte: 100000, $lte: 500000 };
    if (fees === 'high') filter.fees = { $gt: 500000 };

    const colleges = await College.find(filter).sort({ id: 1 });
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single college by id
router.get('/:id', async (req, res) => {
  try {
    const college = await College.findOne({ id: parseInt(req.params.id) });
    if (!college) return res.status(404).json({ message: 'College not found' });
    res.json(college);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET search colleges
router.get('/search/:query', async (req, res) => {
  try {
    const q = req.params.query;
    const colleges = await College.find({
      $or: [
        { name:     { $regex: q, $options: 'i' } },
        { location: { $regex: q, $options: 'i' } },
        { type:     { $regex: q, $options: 'i' } },
        { courses:  { $regex: q, $options: 'i' } }
      ]
    });
    res.json(colleges);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;