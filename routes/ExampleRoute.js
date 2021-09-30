class ExampleRoute{
    constructor({framework,exampleMiddleware,exampleController}){
        this.route="/example";
        this.router=framework.Router();
        this.middleware=exampleMiddleware;
        this.controller=exampleController;
    }
    getRoutes()
    {
        this.router.get('/',this.middleware.get,this.controller.get);
        return this.router;
    }
}

module.exports=ExampleRoute