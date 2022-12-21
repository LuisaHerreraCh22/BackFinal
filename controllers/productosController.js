const Productos=require("../models/Productos");
const Categorias = require("../models/Categorias");

exports.obtenerProductosHome=async(req, res)=>{
  // res.status(404).json({mensaje:"obtener producto"});
  
  try{
    const productos = await Productos.find();
    res.json({productos});
  
   }catch(error){
    console.log(error);

   };

  
};


exports.obtenerProducto=async(req, res)=>{
   // res.status(404).json({mensaje:"obtener producto"});
   
   try{
   const{id}=req.params
   const producto= await Productos.find().where("categoriaId").equals(id);
   res.json(producto);

   }catch(error){
    console.log(error);

   };
   
};

exports.obtenerProductoActualizar=async(req, res)=>{
  // res.status(404).json({mensaje:"obtener producto"});
  const{id}=req.params
  try{
    
    const producto= await Productos.findById(id);
    res.json({producto});

  

  }catch(error){
   console.log(error);

  };
  
};

exports.crearProducto=async(req, res)=>{
    //res.status(404).json({mensaje:"crear producto"});
    //const {categoriaId} = req.body;
    //console.log(req); // para ver elbody completo
    try{

     // const categoriaEncontrada= await Categorias.findById(categoriaId);
      //console.log(categoriaEncontrada);
        const producto = new Productos(req.body);
        producto.save();
        res.json (producto);
    
       }catch(error){
        console.log(error);
       };
};


exports.actualizarProducto=async(req, res)=>{
  //  res.status(404).json({mensaje:"actualizar producto"}); 
  try{
    
    const {id}= req.params;
    const producto = await Productos.findById(id);
    
    if (!producto){
      return res.status(400).json({mensaje:"producto no encontradado"});
    }
    
    /*if(producto.categoriaId.toString()!== req.categoria.id.toString()){
    return res.status(400).json({mensaje:"categoria no existe"});
    }
    */
    
    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.stock = req.body.stock || producto.stock;
    producto.precio = req.body.precio || producto.precio;
    producto.imagen = req.body.imagen || producto.imagen;
    producto.categoriaId = req.body.categoriaId || producto.categoriaId;
    producto.save();
    res.json({producto});
    
    
      }catch(error){
        console.log(error);
    
      }

};

exports.borrarProducto=async(req, res)=>{
 //   res.status(404).json({mensaje:"borrar producto"});
 try{

    const {id}= req.params;
    const producto = await Productos.findById(id)
    await Productos.deleteOne({_id:req.params.id});

    if (!producto){
        return res.status(400).json({mensaje:"producto no encontradado"});
      }
    res.json({mensaje:"Producto eliminado"});

}catch(error){
    console.log(error); 
};


};