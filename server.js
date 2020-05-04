const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const projectsRouter = require('./routers/projects/projectsRouter')


//import Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());

//import routes
server.use('/projects', projectsRouter);


//error Middlware
server.use((err, req, res, next) => {
  console.log(err)  
  res.status(500).json({
      message: 'Unable to complete the requested operation'
  })
})

module.exports = server;