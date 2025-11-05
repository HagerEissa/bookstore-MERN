const fileUtils = require("../utils/jsonFileUtils");
const USERS_FILE_PATH = './data/users.json';

const getAll = () => {
  const allUsers = fileUtils.readJson(USERS_FILE_PATH);
  return allUsers;
}

const getById = (userId) => {
  const allUsers = getAll();
  const targetUsers = allUsers.filter(({ id }) => userId === id);
  return targetUsers[0];
}

const getByEmail = (userEmail) => {
  const allUsers = getAll();
  const targetUsers = allUsers.filter(({ email }) => userEmail === email);
  return targetUsers[0];
}

const createUser = (newUser) => {
  const allUsers = getAll();
  const newId = allUsers.length ===0 ? 1 : allUsers[allUsers.length - 1].id + 1;

  const createdUser = { ...newUser, id: newId };
  allUsers.push(createdUser);
  fileUtils.writeJson(USERS_FILE_PATH, allUsers);
  return createdUser;
};

const updateUser = (id, updatedUser) => {
  const allUsers = getAll();
  const updatedUsers = allUsers.map((user) => user.id === id ? {
    ...updatedUser, id: user.id
  } : user);
  fileUtils.writeJson(USERS_FILE_PATH, updatedUsers);

  return {...updatedUser, id};
}

const deleteUser = (id, updatedUser) => {
  const allUsers = getAll();
  const deletedUsers = allUsers.filter(user => user.id !== id);

  if (deletedUsers.length === allUsers.length) {
    return null;
  }

  fileUtils.writeJson(USERS_FILE_PATH, deletedUsers);
return { message: `User with id ${id} deleted successfully` };


}


module.exports = {
  getAll,
  getById,
  getByEmail,
  createUser,
  updateUser,
  deleteUser
}