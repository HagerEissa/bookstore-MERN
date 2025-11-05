const categoryModel = require('../models/category.model');


const findCategories = (filter) => {
  return categoryModel.find(filter);
};

const countCategories = async (filter) => {
  return await categoryModel.countDocuments(filter);
};


const getAll = async() => {
  return await categoryModel.find();
}


const getById = async(categoryId) => {
  return await categoryModel.findById(categoryId);
}

const createCategory = async(newCategory) => {
  return await categoryModel.create(newCategory)
};

const updateCategory = async(id, updatedCategory) => {
    const category = await categoryModel.findByIdAndUpdate(id,updatedCategory,{ new: true })
    if (!category) {
        throw new Error('category not found')
    }   
  
    return category;
}

const deleteCategory = async(id) => {
    const category = await categoryModel.findByIdAndDelete(id)
    if (!category) {
        throw new Error('category not found')
    }   
  
    return category;

}


module.exports = {
  findCategories,
  countCategories,
  getAll,
  getById,
  createCategory,
  updateCategory,
  deleteCategory
}