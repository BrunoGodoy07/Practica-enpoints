# Práctica: Probando Endpoints con Express y Postman

Crear un pequeño servidor con Node.js y Express que responda diferentes tipos de datos hardcodeados. Usaremos Postman para probar las rutas.

Esta práctica les permitirá:

- Aprender a definir rutas (GET) con Express.
- Devolver texto plano, JSON, números y arreglos.
- Probar endpoints con Postman o el navegador.

---

## Endpoints requeridos

| Método | Ruta       | Respuesta esperada                                  | Tipo       |
|--------|------------|------------------------------------------------------|------------|
| GET    | `/`        | Bienvenido a mi servidor                             | Texto plano|
| GET    | `/saludo`  | ¡Hola, mundo!                                        | Texto plano|
| GET    | `/numero`  | 42                                                   | Número como texto |
| GET    | `/usuario` | `{ "nombre": "Ana", "edad": 25 }`                   | JSON       |
| GET    | `/productos` | `[ "Mouse", "Teclado", "Monitor" ]`               | JSON       |
| GET    | `/materias` | `[ { "nombre": "Matemática" }, { "nombre": "Lengua" } ]` | JSON |

##Extras

- Incorporar un arrary de objetos "Personas" vacio.
  - Armar un endpoint que agregue una nueva persona
  - Armas un endpoint que muestre los datos del array personas

- En base al mismo array
  - Armar un endpoint para borrar a una persona en particular
  - Checkear que la persona a borrar exista, sino mostrar un mensaje de 'Persona no encontrada'
