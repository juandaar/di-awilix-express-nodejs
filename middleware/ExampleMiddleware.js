class ExampleMiddleware
{
    constructor()
    {
        
    }
    async get(req,res,next)
    {
        console.log("Example Get Middleware");
        next();
    }
}


module.exports= ExampleMiddleware;