const express = require('express');
const router = express.Router();
const categoryService = require('../services/categoryService');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/authrtizationMiddelware');

// Get all categories
router.get('/', async (req, res) => {
  const categories = await categoryService.getAllCategories();
  res.json(categories);
});

// Get category by id
router.get('/:id', async (req, res) => {
  const category = await categoryService.getCategoryById(req.params.id);
  if (!category) return res.status(404).json({ error: 'Category not found' });
  res.json(category);
});

// Add new category (Admin only)
router.post('/', authMiddleware, isAdmin, async (req, res) => {
  try {
    console.log('BODY:', req.body);
    const created = await categoryService.addCategory(req.body);
    res.status(201).json(created);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update category (Admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const updated = await categoryService.updateCategory(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete category (Admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const deleted = await categoryService.deleteCategory(req.params.id);
    res.json(deleted);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
