class ExampleController
{
constructor()
{
    console.log("Building Controller Example");
}

async get(req,res)
{
    console.log("Example get Controller");
   return res.status(200).json({success:true,message:"hello world again"}); 
}
}

module.exports=ExampleController