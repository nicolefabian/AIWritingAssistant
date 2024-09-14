
const express = require('express');
const cors = require('cors');
require("dotenv").config();
const analyzeRouter = require("./route/analyzechecker");
const grammarRouter = require("./route/grammarchecker");
const spellRouter = require("./route/spellchecker");

const app = express();
const PORT = process.env.PORT || 8000;

//https://api.openai.com/v1/chat/completions
//Middlewares
app.use(cors()); //prevent cors errors
app.use(express.json()); //for parsing application/json
//app.use(express.urlencoded({ extended: true }));

//Router
app.use("/api/analyze", analyzeRouter);
app.use("/api/grammar", grammarRouter);
app.use("/api/spell", spellRouter);

//Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});