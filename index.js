const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.json({
        "name" : "Haider"
    })
});
app.listen(3000,() =>{
    console.log("server is listining on 3000")
})