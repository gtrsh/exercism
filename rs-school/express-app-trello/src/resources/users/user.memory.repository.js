const User = require('./user.model');
const { first } = require('../../utils');

const DB = [new User(), new User(), new User(), new User(), new User()];
const DBI = DB.map(u => u.id);

const getAll = async () => DB;
const getById = async (userId) => first(DB.filter(user => user.id === userId));
const createUser = async (userData) => {
    const newUser = new User(userData);

    DB.push(newUser);
    return newUser;
};

const deleteUser = async (userId) => DB.splice(DBI.indexOf(userId), 1);
const updateUser = async (userId, data) => {
    const dbId = DB.map(u => u.id).indexOf(userId);
    const currentUserData = DB[dbId];
    DB[dbId] = {...currentUserData, ...data};

    return DB[dbId];
};

module.exports = { getAll, getById, createUser, deleteUser, updateUser, DB };
