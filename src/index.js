const express =require('express');
const mongoose=require("mongoose");
require ("dotenv").config();
const trabajoRoutes = require("./routes/trabajo");

const app=express();
const port=process.env.PORT || 9000 ;

//middleware
app.use(express.json());
app.use('/api', trabajoRoutes);



//rutas
app.get('/', (req,res)=>{
    res.send("bienvenido a mi api");
});

//mongodb conexion
mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("conexion exitosa"))
    .catch ((error)=>console.error(error));

app.listen(port, ()=>console.log('server escuchando puerto', port));