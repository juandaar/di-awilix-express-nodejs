// imports
const express = require('express');
const http = require('http');
//require('./data/database');

class Server {
  constructor({serverConfig,app}) {
    this.app = app;
    this.config=serverConfig;
    this.setup();
  }

  
  setup() {
    this.server = http.createServer(this.app.getApp());
  }

  run() {
    this.server.listen(this.config.port, () => {
      console.log(`Server running on port ${this.config.port}`);
    });
  }

  stop(done) {
    this.server.close(done);
  }
}

module.exports = Server;
