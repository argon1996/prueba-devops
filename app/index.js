// Importa el módulo express, que sirve para crear un servidor web
const express = require('express');

// Importa morgan, un middleware que permite registrar las peticiones HTTP (logs)
const morgan = require('morgan');

// Crea una instancia de la aplicación Express
const app = express();

// Usa morgan con el formato 'combined' para registrar detalles de cada request
app.use(morgan('combined'));

// Define una ruta GET en '/health' que responde con un JSON de estado OK
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Si este archivo es el principal que se está ejecutando, inicia el servidor
if (require.main === module) {
  const PORT = process.env.PORT || 3000; // Usa el puerto definido en env o 3000 por defecto
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}

// Exporta la app para poder usarla en los tests (por ejemplo con Jest o Supertest)
module.exports = app; // 👈 necesario para los tests
