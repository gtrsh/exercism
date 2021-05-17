const router = require('express').Router();
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
    const boards = await boardsService.getAll();

    res.json(boards);
})

