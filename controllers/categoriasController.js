const Categorias=require("../models/Categorias");

exports.obtenerCategoriaHome=async(req, res)=>{
  try{
    const categoria = await Categorias.find();
    res.json({categoria});
  
   }catch(error){
    console.log(error);

   };

  
};


exports.obtenerCategoria=async(req, res)=>{
   // res.status(404).json({mensaje:"obtener categoria"});
   try{
    const categoria = await Categorias.find({creador:req.usuario.id});
    res.json({categoria});
  

   }catch(error){
    console.log(error);

   };

};

exports.obtenerCategoriaId=async(req, res)=>{
  const{id}=req.params
  try{
    const categoria =await Categorias.findById(id);
    res.json({categoria});

  }catch(error){
    console.log(error);

  }



}

exports.crearCategoria=async(req, res)=>{
   // res.status(404).json({mensaje:"crear categoria"});
   
   // req: leemos lo que viene de postman 
   // res: escribimos a postman
   try{
    const categoria = new Categorias(req.body);
    categoria.creador = req.usuario.id;
    categoria.save();
    res.json (categoria);

   }catch(error){
    console.log(error);
   };

};



exports.actualizarCategoria=async(req, res)=>{

  try{
//  res.status(404).json({mensaje:"actualizar categoria"});
const {id}= req.params;
const categoria = await Categorias.findById(id);

if (!categoria){
  return res.status(400).json({mensaje:"categoria no encontradada"});
}

if(categoria.creador.toString()!== req.usuario.id.toString()){
return res.status(400).json({mensaje:"accion no valida para este usuario"});
}

categoria.nombre = req.body.nombre || categoria.nombre;
categoria.imagen = req.body.imagen || categoria.imagen;
categoria.save();
res.json({categoria});


  }catch(error){
    console.log(error);

  }
  
};

exports.borrarCategoria=async(req, res)=>{
  //  res.status(404).json({mensaje:"borrar categoria"});
try{
  const {id}= req.params;//agregado
  const categoria = await Categorias.findById(id);//agregado
    await Categorias.deleteOne({_id:req.params.id});
   
    if (!categoria){//agregado
      return res.status(400).json({mensaje:"categoria no encontradada"});//agregado
    }
    res.json({mensaje:"categoria eliminada"});

}catch(error){
    console.log(error); 
};

};