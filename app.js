var express=require('express');
var app=express();
var path=require('path');
//declear middleware so no permission is required to access public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
  res.status(200);
  // if (url=="/"){
  //   res.sendFile(path.join(__dirname, "public", "index.html"));
  // }
  res.sendFile(path.join(__dirname, "public", "index.html")); 
});

app.listen(3000, function(){
  console.log("Server Listening at Port 3000");
});


