const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.getById(req.params.id);

  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const user = await usersService.createUser(req.body);

  res.status(201).send(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.updateUser(req.params.id, req.body);

  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const user = await usersService.getById(req.params.id);

  if (user) {
    await usersService.deleteUser(req.params.id);
    res.sendStatus(204);
  }
  res.sendStatus(404);
});

module.exports = router;
