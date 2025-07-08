const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  const mensaje = `
    ¡Hola desde Node.js!<br><br>
    <strong>Integrantes del grupo:</strong><br>
    - Daniela Suarez<br>
    - Jose Balcazar<br>
    - Maricielo Aquijes
  `;
  res.send(mensaje);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
