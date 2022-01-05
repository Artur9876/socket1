//import { MoveBall } from './funkcje.js';
// ITP Networked Media, Fall 2014
// https://github.com/shiffman/itp-networked-media
// Daniel Shiffman

// Keep track of our socket connection
var socket;

var right = false;
var left = true;
var up = false;
var down = false;

const ball = new Ball();
const player1 = new Player();


function setup() {
  createCanvas(800, 600);
  
  // Start a socket connection to the server
  // Some day we would run this server somewhere else
  socket = io.connect('http://localhost:3000');
  // We make a named event called 'mouse' and write an
  // anonymous callback function
  socket.on('mouse',
    // When we receive data
    function(data) {
      //console.log("Got: " + data.x + " " + data.y);
      // Draw a blue circle
      //fill(0,0,255);
      noStroke();
      //rect(0, data.y, 20, 60);
    }
  );
}

function draw() {
  player1.y = mouseY;
  background(0); 
  MoveBall(ball, player1);
  ellipse(ball.x, ball.y, ball.r * 2);
  rect(0, player1.y, 20, 60);
  fill(255);
  
  
  
 
 }

function mouseMoved() {
  // Draw some white circles
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY);
}
function mousePressed() {
  
    
    console.log("pressed");
  
}


// Function for sending to the socket
function sendmouse(xpos, ypos) {
  // We are sending!
  //console.log("sendmouse: " + xpos + " " + ypos);

  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos
  };

  // Send that object to the socket
  socket.emit('mouse',data);
  
}
