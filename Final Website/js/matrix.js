var c = document.getElementById('c');      //gets the element in the HTML
var cxt = c.getContext("2d");              

c.width = window.innerWidth;  //finds the width and height of the window
c.height = window.innerHeight;



var chinese = "田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑";   //letters to go across screen
chinese = chinese.split("");

var font_size =13;                //shows what the size of each symbol will be      
var columns = c.width/font_size; 

var drops = [];          //Array
var x = 0;
while (x<columns) {
  drops[x]=1;
  x++;                      //while Loop
}

function draw(){
  cxt.fillStyle="rgba(0,0,0,0.05)";
  cxt.fillRect(0,0,c.width,c.height);                          //Draws the matrix board
  
  cxt.fillStyle = "#FF00FF";
  cxt.font = font_size+'px arial';
  
  
  for (var i=0;i<drops.length;i++) {          //For loop
    var text = chinese[Math.floor(Math.random()*chinese.length)];      //makes the chinese drop in random order
    cxt.fillText(text,i*font_size,drops[i]*font_size);
    
    if (drops[i]*font_size>c.height && Math.random() >0.975) //If Then
      drops[i]=0;
    
    //increment y coordinate
    drops[i]++;
}
  
}
setInterval(draw,33); //Draws that many lines of the matrix