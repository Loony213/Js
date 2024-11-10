const express = require('express');
const app = express();
const port = 3000;

// Ruta para la raíz que responde con '¡Hola, Mundo!'
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo! en Railway con Javascript');
});

// Escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
