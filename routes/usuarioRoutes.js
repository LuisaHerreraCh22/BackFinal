const express=require("express");
const router =express.Router();
/*
router.get("/",(req, res)=>{
    res.json({msg:"desde router"});
});

router.post("/",(req, res)=>{
    res.json({msg:"desde router post hacia postman"});
});

router.put("/",(req, res)=>{
    res.json({msg:"desde router put es para actualizar"});
});

router.delete("/",(req, res)=>{
    res.json({msg:"desde router delete es para borrar"});
});
*/

const usuarioController=require("../controllers/usuariosController")
router.post(
    "/",
    usuarioController.crearUsuario
);

//definir rutas
module.exports=router;