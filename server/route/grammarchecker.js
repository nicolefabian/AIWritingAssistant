const express = require('express');
const grammarRouter = express.Router();

grammarRouter.post('/', async (req, res) => {
    res.json({
        message: 'Grammar Route',
     });
});

//export
module.exports = grammarRouter
