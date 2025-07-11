// Importa supertest, que permite hacer peticiones HTTP simuladas para testear la API
const request = require('supertest');

// Importa express (aunque no se usa directamente aquí)
const express = require('express');

// Importa la app desde index.js, que debe exportar la instancia de Express
const app = require('./index'); // Asegúrate que index.js exporta la app

// Describe un grupo de pruebas para la ruta GET /health
describe('GET /health', () => {

  // Caso de prueba individual: espera una respuesta 200 y un body específico
  it('debe responder con 200 OK y mensaje de estado', async () => {
    // Realiza una petición GET a /health usando la app
    const response = await request(app).get('/health');

    // Verifica que el código de respuesta sea 200
    expect(response.statusCode).toBe(200);

    // Verifica que el cuerpo de la respuesta sea exactamente { status: 'ok' }
    expect(response.body).toEqual({ status: 'ok' });
  });

});
