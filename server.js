const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); // Asegúrate de que la ruta sea correcta
const app = express();
const port = 3012;

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/task_db', {
 
});

// Middleware para JSON
app.use(express.json());

// Rutas
app.use('/api', taskRoutes); // Asegúrate de que la ruta sea correcta

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
