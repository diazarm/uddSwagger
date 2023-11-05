const express = require('express');

const PORT = 3001;

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({msg : "Estas en la Home"})
} )

app.get("/mensaje", (req, res)=>{
    const {name, surname} = req.query;
    res.json({msg: `saludos a ${name} ${surname}`})
})

//ttp://localhost:3001/mensaje/?name=Victor&surname=Perez

app.listen(PORT, ()=>{
    console.log(`Server active on port ${PORT}`);
})

module.exports = app;

