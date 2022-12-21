const Usuario=require("../models/Usuarios");
const bcryptjs = require("bcryptjs");


exports.crearUsuario=async(req, res)=>{
   // console.log(req.body);
const {password, email}= req.body;
   try{

      //validar usuario registrado no este duplicado (unico email)
      let usuario = await Usuario.findOne({email});
      if (usuario){
         return res.status(404).json({mensaje:"usuario ya existe"});
      }


    //crear el nuevo usuario
usuario=new Usuario(req.body);
    //hash del la contraseña
usuario.password=await bcryptjs.hash(password,10);

//Guardar en la base de datos
const usuarioAlmacenado=await usuario.save();


res.json(usuarioAlmacenado);

   }catch(error){
    console.log(error)
   }
    
};

