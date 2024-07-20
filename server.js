const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes'); 
const app = express();
const port = 3011;


mongoose.connect('mongodb://localhost:27017/task_db', {
 
});


app.use(express.json());


app.use('/api', taskRoutes); 


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
