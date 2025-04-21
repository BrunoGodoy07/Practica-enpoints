import express from "express";

const app = express();
const port = 3000;
const personas = [
    { "nombre": "Juan",
      "edad": 25,
      "ciudad": "Buenos Aires" },
    { "nombre": "Pedro",
      "edad": 30,
      "ciudad": "Córdoba" },
    { "nombre": "María",
      "edad": 28,
      "ciudad": "Rosario" },
    { "nombre": "Ana",
      "edad": 22,
      "ciudad": "Mendoza" }
  ];
  app.use(express.json());

app.get('/', (req,res) =>{
    res.send("Bienvenido a mi servidor");
})
//http://localhost:3000

app.get('/saludo', (req,res) =>{
    res.send("¡Hola mundo!");
})
//http://localhost:3000/saludo


app.get('/numero', (req,res) =>{
    res.send("42");
})
//http://localhost:3000/numero


app.get('/usuario', (req,res) =>{
    let obj = {
            nombre: "Ana",
            edad: 25
    }

    res.send(obj);
})
//http://localhost:3000/usuario


app.get('/productos', (req,res) =>{
    let product = ["teclado", "mouse", "monitor"]

    res.send(product);
})
//http://localhost:3000/productos

app.get('/materias', (req,res) =>{

    let arrayMateria = [ {"Nombre": "Matemática"}, {"Nombre": "Lengua"}]
    res.send(arrayMateria);
})
//http://localhost:3000/materias


app.post('/agregarPersona', (req, res) => {
    const persona = req.body;
    if (!persona) return res.status(400).json({ error: 'Faltan datos de la persona' });
  
    personas.push(persona);
    res.status(201).json({ mensaje: 'Persona agregada', personas });
  });
//http://localhost:3000/agregarPersona


app.put('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
    const datos = req.body;
  
    // La idea de este PUT es que en body se aclare el dato a modificar y el nuevo valor
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }
  
    // Modificar los datos en el índice especificado
    for (const key in datos) {
      if (personas[indice].hasOwnProperty(key)) {
        personas[indice][key] = datos[key];
      }
    }
  
    res.json({ mensaje: `Persona modificada`, personas });
  });
//http://localhost:3000/personas/:indice

app.delete('/personas/:indice', (req, res) => {
    const indice = parseInt(req.params.indice);
  
    if (isNaN(indice) || !personas[indice]) {
      return res.status(404).json({ error: 'Índice no válido' });
    }
  
    const eliminado = personas.splice(indice, 1);
    res.json({ mensaje: `Persona eliminada: ${eliminado[0].nombre}`, personas });
  });
  //http://localhost:3000/personas/:indice

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

