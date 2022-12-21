const { Router } = require("express");
const express = require("express");
const conectarDB = require("./config/db");
const usuarioRoutes=require("./routes/usuarioRoutes");
const categoriasRoutes=require("./routes/categoriasRoutes");
const productosRoutes=require("./routes/productosRoutes");
const auth=require("./routes/auth");
const cors =require("cors");


const app = express();
app.use(express.json({extended:true}));

conectarDB();
//habilitar cors
app.use(cors());

//rutas
app.use("/api/usuarios",usuarioRoutes);
app.use("/api/auth",auth);
app.use("/api/categorias",categoriasRoutes);
app.use("/api/productos",productosRoutes);
//app.use("/api/productos/actualizar",productosRoutes);



app.listen(4000, ()=>{
    console.log("este servidor corriendo en el puerto 4000 ");
});
