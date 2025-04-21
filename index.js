import express from "express";

const app = express();
const port = 3000;

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


app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

