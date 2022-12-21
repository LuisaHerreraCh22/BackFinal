const mongoose = require ("mongoose");
const UsuariosSchema=mongoose.Schema({

    nombre:{type: String, required: true, trin: true},
    email:{type:String, required: true, trin: true, unique: true},
    password:{type:String, required: true, trin: true},
    registro:{type:Date, default:Date.now()}
});
//definir el modelo
module.exports=mongoose.model("Usuarios",UsuariosSchema);
