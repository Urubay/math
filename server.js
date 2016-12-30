// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/math.html');
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

  
app.get("/solve", function (request, response) {
 // response.send("hallo maksym");
  //response.send("a = " + request.query.a + ", b = " + request.query.b + ", c = " + request.query.c);
  
  var s = solveEquation(request.query.a, request.query.b, request.query.c); 
  
  response.send(s.info + "; D = "   +     s.D +     ", x1 &#8776 "     + s.x1 +     ", x2 &#8776 "     + s.x2);
  
  //response.sendFile(__dirname + "/public/breed.html");
  
});

  
  
function solveEquation(a, b, c) { 
  
  var solution = {};
  
  solution.D = b*b-4*a*c;
  
  if (solution.D >= 0)  {
    
    solution.x1 = Math.round(  (((-b) - Math.sqrt(solution.D))/(2*a)) *100  )/100;
    solution.x2 = Math.round(  (((-b) + Math.sqrt(solution.D))/(2*a)) *100  )/100;
    solution.info = ("succesfully solved");
    
  
  } else {
    
    solution.x1 = "Does not exist";
    solution.x2 = "Does not exist";
    solution.info = ("D < 0, --> cannot be solved");
    
    
  }
  
  return solution;
}  

// var s = solveEquation(1, 4, 4);  

//var sc = {m1:3, m2:"hallo", m3: function() {return "foo!"}};
//console.log(sc.m3());

// console.log(s.info + "; D = "   +     s.D +     ", x1 = "     + s.x1 +     ", x2 = "     + s.x2);

/*
var x=0;
x = x + 5;
x *= 15;
x += x+1;

if (x<0) { } else { }  

console.log(x==0); */