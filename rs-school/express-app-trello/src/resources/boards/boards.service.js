const repo = require('./boards.memory.repository');
const taskService = {};

const getAll = () => repo.getAll();
const getById = (id) => repo.getById(id);
const create = (data) => repo.create(data);
const update = (data) => repo.update(data);
const del = (id) => repo.delete(id);

module.exports = { getAll, getById, create, update, del };
