
const {serverConfig} = require('./conf');

const cors = require("cors");
const bodyParser = require("body-parser");
class App {

    constructor({serverConfig,framework,routes}){
        this.framework=framework();
        this.serverConfig=serverConfig;
        this.routes=routes;
        this.setup();
    }
    getApp()
    {
        return this.framework;
    }
    setup()
    {
        this.middleware();
        console.log(`host: ${serverConfig.host}:${serverConfig.port}${serverConfig.endpoint}`);
        this.framework.use(serverConfig.endpoint,this.routes.getRoutes());
    }


    
    middleware(){
        this.framework.use(cors());
        this.framework.use(bodyParser.json());
        this.framework.use(bodyParser.urlencoded({ extended: false }));
    }

}


module.exports = App;
