const express = require('express');
const cors = require ('cors');
const clientRoute = require('./src/routes/clientRoute');

const PORT = 3001;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", clientRoute);

app.listen(PORT, ()=>{
    console.log(`Server active on port ${PORT}`);
})

module.exports = app;

