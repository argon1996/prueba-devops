const request = require('supertest');
const express = require('express');
const app = require('./index'); // Asegúrate que index.js exporta la app

describe('GET /health', () => {
  it('debe responder con 200 OK y mensaje de estado', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
