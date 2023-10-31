const express = require('express');
const cors = require ('cors');
const mainRouter = require('./src/routes/mainRouter');

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());
app.use(mainRouter);

app.listen(PORT, ()=>{
    console.log(`Server active on port ${PORT}`);
})

module.exports = app;

