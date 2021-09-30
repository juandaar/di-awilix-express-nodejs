const awilix = require('awilix');

const {serverConfig,DBConfig} = require('./conf');
const Server = require('./server');
const express = require("express");
const app= require('./app');
const Routes=require('./routes');

//Example
const ExampleRoute=require('./routes/ExampleRoute');
const ExampleMiddleware=require('./middleware/ExampleMiddleware');
const ExampleController=require('./controller/ExampleController');

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY,
});

function setup() {
  //configurations
  container.register({
      serverConfig: awilix.asValue(serverConfig),
      DBConfig:awilix.asValue(DBConfig),
  });

  //server and routes
  container.register(
      {
        server:awilix.asClass(Server),
        framework: awilix.asValue(express),
        app:awilix.asClass(app),
        routes:awilix.asClass(Routes)
      }
   )

    //example
    container.register(
        {
            exampleRoutes:awilix.asClass(ExampleRoute),
            exampleMiddleware:awilix.asClass(ExampleMiddleware),
            exampleController:awilix.asClass(ExampleController)
        }
    )
  
}

module.exports = {
  container,
  setup,
};
