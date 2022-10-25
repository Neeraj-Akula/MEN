const express=require("express");
const mongoose=require("mongoose");
const phones=require("./model")
const app=express();


app.use(express.json())
mongoose.connect("mongodb+srv://luci:lucianazogbi@cluster0.mvvbtzw.mongodb.net/brandName",
{useUnifiedTopology: true,
useNewUrlParser: true
}).then(()=>{
    console.log("suceesssss")}).catch(()=>{
        console.log("error occuresd");
    })



app.get('/',(req,res)=>{
    res.send("<h1>i am luci</h1>")
})

app.post('/addbrands',async(req,res)=>{
        const {brandnames}=req.body;
        try{
            const newData=new phones({brandnames});
            await newData.save();
            return res.json(await phones.find())
        }
        catch(err){
            console.log("error occuerhbujyhvubd");

        }
})    


app.listen(3000,()=>{
    console.log("server started");
})
   
