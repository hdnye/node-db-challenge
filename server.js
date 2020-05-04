const express = require('express');
const router = express.Router()
const cors = require('cors');
const helmet = require('helmet');
const projectsRouter = require('./routers/projects/projectsRouter')
const tasksRouter = require('./routers/tasks/tasksRouter')
const resourcesRouter = require('./routers/resources/resourcesRouter')
const server = express();

//import Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//import routes
server.use('/projects', projectsRouter);
server.use('/tasks', tasksRouter);
server.use('/resources', resourcesRouter);

//error Middlware
server.use((err, req, res, next) => {
  console.log(err)  
  res.status(500).json({
      message: 'Unable to complete the requested operation'
  })
})

module.exports = server;