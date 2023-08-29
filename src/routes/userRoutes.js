const router = require('express').Router();
const userModel = require('../models/userModel');

router.get('/', (req, res) => {
    res.json(userModel.getUsers());
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (!id) {
        res.status(404).json({
            message: `User not found`,
            error: true
        })
    }

    res.status(200).json(user);
})

module.exports = router;