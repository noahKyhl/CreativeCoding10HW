function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(200, 300, 300);
    
    
    circle(200, 100, 100); //head
    
    triangle(150, 150, 200, 250, 250, 150); //body
    
    line(150, 150, 100, 250); //L arm
    line(250, 150, 300, 250); //R arm
    line(200, 250, 175, 350); //L leg
    line(200, 250, 225, 350); //R leg
    
    circle(180, 90, 20); //L eye
    circle(220, 90, 20); //R eye
    point(175, 90); //L eye
    point(225, 90); //R eye
    
    ellipse(200, 120, 50, 20); //mouth
    
    rect(195, 100, 10, 20); //nose
    
    textSize(20);
    text('Self Portrait', 150, 30);
    text('"Hello there...friend!" Signed, Noah Kyhl', 10, 375);
  }