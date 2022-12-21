const mongoose = require ("mongoose");
const ProductosSchema=mongoose.Schema({

    nombre:{type: String, required: true, trin: true},
    descripcion:{type:String, required: true, trin: true},
    stock:{type:Number, required: true, trin: true},
    precio:{type:Number, required: true, trin: true},
    imagen :{type: String, required: true, trin: true},
    creado:{type:Date, default:Date.now()},
    categoriaId: {type:mongoose.Schema.Types.ObjectId, ref:"Categorias"}
});
//definir el modelo
module.exports=mongoose.model("Productos",ProductosSchema);