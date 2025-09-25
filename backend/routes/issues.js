const express = require('express');
const router = express.Router();
const Issue = require('../models/Issue');

// GET /issues - Supports search, filters, sorting, and pagination
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      pageSize = 10,
      search = '',
      status = '',
      priority = '',
      assignee = '',
      sortBy = 'updatedAt',
      sortOrder = 'desc'
    } = req.query;

    // Build filter object
    let filter = {};
    
    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }
    
    if (status) {
      filter.status = status;
    }
    
    if (priority) {
      filter.priority = priority;
    }
    
    if (assignee) {
      filter.assignee = assignee;
    }

    // Build sort object
    let sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Calculate skip for pagination
    const skip = (page - 1) * pageSize;

    // Fetch issues
    const issues = await Issue.find(filter)
      .sort(sort)
      .skip(skip)
      .limit(parseInt(pageSize));

    // Get total count for pagination
    const total = await Issue.countDocuments(filter);

    res.json({
      issues,
      pagination: {
        page: parseInt(page),
        pageSize: parseInt(pageSize),
        total,
        totalPages: Math.ceil(total / pageSize)
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /issues/:id - Return single issue
router.get('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    res.json(issue);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /issues - Create new issue
router.post('/', async (req, res) => {
  try {
    const issue = new Issue({
      title: req.body.title,
      description: req.body.description,
      status: req.body.status,
      priority: req.body.priority,
      assignee: req.body.assignee
    });

    const newIssue = await issue.save();
    res.status(201).json(newIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT /issues/:id - Update issue
router.put('/:id', async (req, res) => {
  try {
    const issue = await Issue.findById(req.params.id);
    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    // Update fields if provided
    if (req.body.title != null) {
      issue.title = req.body.title;
    }
    if (req.body.description != null) {
      issue.description = req.body.description;
    }
    if (req.body.status != null) {
      issue.status = req.body.status;
    }
    if (req.body.priority != null) {
      issue.priority = req.body.priority;
    }
    if (req.body.assignee != null) {
      issue.assignee = req.body.assignee;
    }

    const updatedIssue = await issue.save();
    res.json(updatedIssue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;