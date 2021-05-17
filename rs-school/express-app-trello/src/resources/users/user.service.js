const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const getById = (id) => usersRepo.getById(id);
const createUser = (userData) => usersRepo.createUser(userData);
const deleteUser = (id) => usersRepo.deleteUser(id);
const updateUser = (id, userData) => usersRepo.updateUser(id, userData);

module.exports = { getAll, getById, createUser, deleteUser, updateUser };
