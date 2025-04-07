var leftEyeX = 175;
var leftEyeY = 90;
var rightEyeX = 225;
var rightEyeY = 90;

var leftEyeCirX = 180;
var leftEyeCirY = 90;
var leftEyeCirDiameter = 20;
var rightEyeCirX = 220;
var rightEyeCirY = 90;
var rightEyeCirDiameter = 20;

var eyeResetThreshold = 10; //distance outside the head before resetting

var headSize = 100;
var headGrowth = 1;
var nameSize = 25;
var nameX = 10;
var nameY = 30;
var xSpeed = 2;
var ySpeed = 2;

var currentColor; //global color

//title sq. pattern:
var direction = 0; // 0 = right, 1 = down, 2 = left, 3 = up
var stepSize = 2;

//title size growth:
var isShrinking = true; 

//circle variables to accomplish assignment goals://////////////////////////////////////
var circle1X = 1; 
var circle1Y = 150;
var sq1X = 1
var sq1Y = 150
var circle2X = 300; 
var circle2Y = 1;
var sq2X = 300
var sq2Y = 1
var circle3X = 1; //circle 3 moving diagonally
var circle3Y = 1;
circle1Speed = 1
circle2Speed = 1
circle3Speed = 1


function setup() {
    createCanvas(400, 400);
    changeColor(); // Initialize with a random color
    //speed is randomized for moving objects
    circle1Speed = random(1,3)
    circle2Speed = random(1,3)
    circle3Speed = random(1,3)
}

function draw() {
    background(200, 300, 300);
    
    //head
    fill(currentColor); // Use the current color for the head
    circle(200, 100, headSize);
    
    //body
    fill(currentColor); // Use the current color for the body
    triangle(150, 150, 200, 250, 250, 150);
    
    //arms
    line(150, 150, 100, 250);
    line(250, 150, 300, 250);
    
    //legs
    line(200, 250, 175, 350);
    line(200, 250, 225, 350);

    //mouth and nose
    ellipse(200, 120, 50, 20);
    rect(195, 100, 10, 20);
    
    //eyes
    fill(255); //white for the eyes
    circle(leftEyeCirX, leftEyeCirY, leftEyeCirDiameter);
    circle(rightEyeCirX, rightEyeCirY, rightEyeCirDiameter);
    fill(currentColor); //current color for the pupils
    point(leftEyeX, leftEyeY);
    point(rightEyeX, rightEyeY);

    //moving objects
    fill(currentColor);
    circle(circle1X, circle1Y, 80);
    circle(circle2X, circle2Y, 50);
    circle(circle3X, circle3Y, 60);
    square(sq1X, sq1Y, 10)
    square(sq2X, sq2Y, 10)
    fill(currentColor); 
    
    //title
    textSize(nameSize);
    fill(currentColor); //current color for text
    text('Trippy Portrait', nameX, nameY);
    text('"wooooooaaaah! My eyes!!! I can see all."', 10, 375);

    //animation
    animateEyes();
    animateHead();
    animateName();
    titleSize();
    animateCircles();

    /*animateColors();*/
}

//moves the eyes and keeps pupils within the eye
function animateEyes() {
    var ranA = random(-2, 2);
    var ranC = random(-2, 2);
    leftEyeCirX += ranA;
    leftEyeCirY += ranC;
    leftEyeX += ranA;
    leftEyeY += ranC;
    
    var ranB = random(-2, 2);
    var ranD = random(-2, 2);
    rightEyeCirX += ranB;
    rightEyeCirY += ranD;
    rightEyeX += ranB;
    rightEyeY += ranD;

    //my procedure for keeping the eyes within a certain range
    if (abs(leftEyeX - 200) > headSize / 2 + eyeResetThreshold || 
        abs(leftEyeY - 100) > headSize / 2 + eyeResetThreshold) {
        resetLeftEye();
    }
    if (abs(rightEyeX - 200) > headSize / 2 + eyeResetThreshold || 
        abs(rightEyeY - 100) > headSize / 2 + eyeResetThreshold) {
        resetRightEye();
    }
}

//eyes reset
function resetLeftEye() {
    leftEyeX = 175; 
    leftEyeY = 90;
    leftEyeCirX = 180; 
    leftEyeCirY = 90;
}
function resetRightEye() {
    rightEyeX = 225; 
    rightEyeY = 90;
    rightEyeCirX = 220; 
    rightEyeCirY = 90;
}

//animate circles////////////////////////////////////////////////////////////
function animateCircles() {
  //circle1 back and forth along the x-axis
  circle1X += circle1Speed;
  if (circle1X >= 400 || circle1X <= 0) {
      circle1Speed *= -1; //eeverse direction
  }
  sq1X += circle1Speed;


  //circle2 back and forth along the x-axis
  circle2Y += circle2Speed;
  if (circle2Y >= 400 || circle2Y <= 0) {
      circle2Speed *= -1; //reverse direction
  }
  sq2Y += circle2Speed;

  //circle3 diagonally 
  circle3X += circle3Speed;
  if (circle3X >= 400 || circle3X <= 10) {
      circle3Speed *= -1; //reverse x direction
  }
  circle3Y += circle3Speed;
  if (circle3Y >= 400 || circle3Y <= 10) {
      circle3Speed *= -1; //reverse y direction
  }
}

//head growth
function animateHead() {
    headSize += headGrowth;
    if (headSize > 120 || headSize < 80) {
        headGrowth *= -1; //reverse growth
    }
}

//for title movement in sq. pattern
function animateName() {
  if (direction === 0) { 
    nameX += stepSize;
    if (nameX >= 400 - 150) {
        direction = 1; 
        changeColor();
    }
  } else if (direction === 1) { 
    nameY += stepSize;
    if (nameY >= 400 - 10) { 
        direction = 2; 
        changeColor();
    }
  } else if (direction === 2) { 
    nameX -= stepSize;
    if (nameX <= 10) {
        direction = 3; 
        changeColor();
    }
  } else if (direction === 3) { 
    nameY -= stepSize;
    if (nameY <= 30) { 
        direction = 0; 
        changeColor(); 
    }
    }
}

function titleSize() {
    if (isShrinking) {
        nameSize -= 0.1; //decrease size
        if (nameSize <= 5) {
            isShrinking = false; //dtart growing back
        }
    } else {
        nameSize += 0.1; //increase size
        if (nameSize >= 25) {
            isShrinking = true; //start shrinking again
        }
    }
}

//creates new color 
function changeColor() {
  currentColor = color(random(255), random(255), random(255));
}