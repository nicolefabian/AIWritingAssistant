const express = require('express');
const spellRouter = express.Router();

spellRouter.post('/', async (req, res) => {
    res.json({
        message: 'Spell Route',
     });
});

//export
module.exports = spellRouter
