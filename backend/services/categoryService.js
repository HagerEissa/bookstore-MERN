const categoryRepo = require('../repository/mongoCategoryRepo');

const getAllCategories = async () => {
  return await categoryRepo.getAll();
};

const getCategoryById = async (id) => {
  return await categoryRepo.getById(id);
};

const addCategory = async (newCategory) => {
  if (!newCategory.name) {
    throw new Error('Category name is required');
  }
  return await categoryRepo.createCategory(newCategory);
};

const updateCategory = async (id, data) => {
  return await categoryRepo.updateCategory(id, data);
};

const deleteCategory = async (id) => {
  return await categoryRepo.deleteCategory(id);
};

module.exports = {
  getAllCategories,
  getCategoryById,
  addCategory,
  updateCategory,
  deleteCategory
};
