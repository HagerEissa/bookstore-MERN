const userModel = require('../models/user.model');

const getAll = async() => {
  return await userModel.find();
}

const getById = async(userId) => {
  return await userModel.findById(userId)
}

const getByEmail = async(userEmail) => {
  return await userModel.findOne({email:userEmail})
}

const createUser = async(newUser) => {
  const user = await userModel.create(newUser)
  return user
  
};

const updateUser = async(id, updatedUser) => {
  const user = await userModel.findByIdAndUpdate(id,updatedUser,{ new: true })
  if (!user) {
      // throw Error({ message: 'user not found' })
      throw new Error('user not found')
  }   

  return user;

}

const deleteUser = async(id) => {
  const user = await userModel.findByIdAndDelete(id)
  if (!user) {
      // throw Error({ message: 'user not found' })
      throw new Error('user not found')
  }
  return user

}


module.exports = {
  getAll,
  getById,
  getByEmail,
  createUser,
  updateUser,
  deleteUser
}