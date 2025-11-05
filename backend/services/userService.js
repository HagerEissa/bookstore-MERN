// const usersRepo = require('../repository/usersRepo')
const usersRepo = require('../repository/mongoUsersRepo')

const getAllUsers=async()=>{
    return await usersRepo.getAll()
}

const addUser=async(newUser)=>{
    return await usersRepo.createUser(newUser)
}

const updateUser=async(id,update)=>{
    const existingUser = usersRepo.getById(id);
    if (!existingUser) 
    {
        throw Error("User not found!");
    }

    return await usersRepo.updateUser(id,update)
}

const getUserById=async(id)=>{
    const existingUser = usersRepo.getById(id);
    if (!existingUser) 
    {
        throw Error("User not found!");
    }

    return await usersRepo.getById(id)
}

const getByEmail=async(email)=>{
    const existingUser = usersRepo.getByEmail(email);
    if (!existingUser) 
    {
        throw Error("User not found!");
    }

    return existingUser
}

const deleteUserById =async(id)=>{
    const existingUser = usersRepo.getById(id);
    if (!existingUser) 
    {
        throw Error("User not found!");
    }

    return await usersRepo.deleteUser(id)
}

module.exports = {
    getAllUsers,
    addUser,
    updateUser,
    getUserById,
    deleteUserById ,
    getByEmail
}