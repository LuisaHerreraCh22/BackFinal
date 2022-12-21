const Usuario=require("../models/Usuarios");
const bcryptjs = require("bcryptjs");
const jwt =require("jsonwebtoken");
require("dotenv").config({path:"variables.env"});

exports.autenticarUsuario = async(req, res)=>{
    const {password , email}=req.body;
    try{
        //validacion usuario registrado
        let usuario=await Usuario.findOne({email});
        if(!usuario){
            return res.status(404).json({mensaje:"el usuario no existe"});
        }
        //validacion password
        const passwordCorrecto = await bcryptjs.compare(password, usuario.password);
        if (!passwordCorrecto){
            return res.status(400).json({mensaje:"password incorrecto"});
        }
        //console.log ("usuario ingreso");

        // si todo es correcto: crear y firmar un token de ingreso
        const payload= {
            usuario:{id:usuario.id},

        };
        //res.log(payload);
    jwt.sign(
        payload,
        process.env.SECRETA,
        {
            expiresIn: '30d',// 30 dias

        },
        (error, token)=>{
            if (error) throw error;
            //mensaje de confirmacion
            res.json({token});
        }


    ); 




    }catch(error){
        console.log(error);
    }
}

exports.usuarioAutenticado= async(req, res)=>{
    try{
        const usuario = await Usuario.findById(req.usuario.id);
        res.json({usuario});

    }catch(error){
        res.status(500).json({mensaje: "hubo un error"});

    }
}