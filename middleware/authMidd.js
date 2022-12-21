//capa de seguridad

//verificar el token
const jwt = require("jsonwebtoken");

module.exports= function(req, res, next){
    //leer eltoken desde los headers o desde postman
    const token= req.header("x-auth-token");
   // console.log(token);
    
    // revisar si no hay un token 
    if (!token){
        return res.status(400).json({mensaje:"no hay token"});
    }
    // validacion del token 

    try{
        const cifrado =jwt.verify(token, process.env.SECRETA)
        req.usuario =cifrado.usuario;
     //   console.log(cifrado.usuario);

        next();

    }catch(error){
        res.status(400).json({mensaje:"token no valido"});
    }

}