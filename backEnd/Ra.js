const express  = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const cors = require("cors") ;

const formularioBD = express();

formularioBD.use(bodyParser.json());


const directorioPermitido ="http://localhost:3000";
formularioBD.use(cors({origin:directorioPermitido }));

//MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'centaurus',
    database: 'formulario de registro'
});


//ruta
formularioBD.get('/', (req, res) => {
    res.send('hola q hace??');
});






//all users
formularioBD.get('/user' ,(req,res) =>{ 
  const sql= 'SELECT * FROM registroDeNuevoUsuario' ;
  connection.query(sql,(error,resultado) =>{
      if (error)
      throw error;
      if(resultado.length >0){
          res.json(resultado);
      }else{
          res.send('no se encontro el resultado esperado');
      }
  });
});



formularioBD.get('/user/:id',(req,res) =>{ 
    const {id}=req.params
    const sql= `SELECT * FROM registroDeNuevoUsuario WHERE id=${id}` ;
    connection.query(sql,(error,resultado)=>{
        if (error)
        throw error;
        if(resultado.length >0){
            res.json(resultado);
        }else{
            res.send('no se encontro el resultado esperado');
        }
    });

});




formularioBD.post('/add' , (req,res) => {
    const sql='INSERT INTO registroDeNuevoUsuario SET ? ';
    const registroObjet ={
        nombreUsuario: req.body.nombreUsuario,
        apellidoUsuario : req.body.apellidoUsuario,
        fechaDeNacimiento: req.body.fechaDeNacimiento,
        direccion:req.body.direccion,
        telefono: req.body.telefono,
        tipo: req.body.tipo,
        email:  req.body.email,
        contraseña: req.body.contraseña
        
        
    }
    connection.query(sql,registroObjet,error =>{ 
        if(error)throw error ;
       res.send ('el usuario se ha añadido con exito'); 
    });
});


formularioBD.put('/update/:id' , (req,res) => {
    const {id}=req.params;
    const{
        nombreUsuario,
        apellidoUsuario ,
        fechaDeNacimiento,
        direccion,
        telefono,
        tipo,
        email,
        contraseña
       
    }=req.body;
    const sql =`   UPDATE registroDeNuevoUsuario SET 
    nombreUsuario='${nombreUsuario}',
    apellidoUsuario = '${apellidoUsuario}',
    fechaDeNacimiento='${fechaDeNacimiento}',
    direccion='${direccion}',
    telefono= '${telefono}',
    tipo='${tipo}',
    email='${email}',
    contraseña='${contraseña}'
    
     WHERE id=${id} `;
    connection.query(sql,error =>{ 
        if(error)throw error ;
       res.send ('se ha actualizado los datos del usuario con exito'); 
    });


});



formularioBD.delete('/delete/:id' , (req,res) => {
    const{id} =req.params;
    const sql =`DELETE FROM registroDeNuevoUsuario WHERE id=${id} `;
    connection.query(sql,error =>{ 
        if(error)throw error ;
       res.send ('se ha eliminado el usuario con exito'); 
    });
});








//verificar coneccion
connection.connect(error => {
    if(error) throw error;
    console.log('base de datos corriendo!');
});

formularioBD.listen(PORT, () => console.log(`servidor corriendo en el puertoo ${PORT}`));