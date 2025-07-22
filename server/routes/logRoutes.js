const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

router.post('/', async (req, res) => {
  const newLog = new Log(req.body);
  const saved = await newLog.save();
  res.json(saved);
});

router.get('/:userId', async (req, res) => {
  const logs = await Log.find({ userId: req.params.userId });
  res.json(logs);
});

module.exports = router;
