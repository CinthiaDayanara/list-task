const express = require('express');
const router = express.Router();
const Task = require('../models/task'); // Asegúrate de que la ruta al modelo sea correcta

// Listar todas las tareas
router.get('/tasks', async (req, res) => {
  try {
    // Buscar todas las tareas en la base de datos
    const tasks = await Task.find();

    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas', details: error.message });
  }
});

module.exports = router;
