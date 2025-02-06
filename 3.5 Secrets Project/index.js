//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port,() => {
  console.log(`The server is running on port ${port} `);
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
let userpassword;
function Userpassword(req, res, next) {
  console.log(req.body);
  userpassword = req.body["password"];
  next();
}

app.use(Userpassword);


// if (userpassword === "ILoveProgramming"){

//   app.post("/check",(req,res)=>{
//     res.sendFile(__dirname+"/public/secret.html");
//   })
// }else{console.log("Hello World!");
//  app.post("/check",(req,res)=>{
//    res.send("hello there");
//   })
// }

app.post("/check",(req,res)=>{
  if(userpassword == "ILoveProgramming"){
    res.sendFile(__dirname+"/public/secret.html");
  }else{
    res.redirect("/");
  }
})



// let password == "ILoveProgramming";


// app.post("/submit",(req,res) =>{
//     res.sendFile(__dirname + "/public/secret.html")
    
// })
