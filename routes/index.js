
class Routes{
    constructor({framework,exampleRoutes})
    {
        this.router=framework.Router();
        this.exampleRoutes=exampleRoutes;
    }

    getRoutes() {
    
        this.router.get('/',(req,res)=>{res.send("hello world")});
        this.router.use(this.exampleRoutes.route,this.exampleRoutes.getRoutes());
        return this.router;
    }
}

module.exports=Routes