var snake; //the snake object
var scl = 20;
var food;
var up;
var down;
var left;
var right;

function preload() {
		createCanvas(600,600); //makes a canvas, 600px x 600px pixels
		
		//make directions
		createP("<div id='top'><button id='up'>UP</button></div>");
		createP("<div id='mid'><button id='left'>LEFT</button>");
		createP("<button id='right'>RIGHT</button></div>");
		createP("<div id='bot'><button id='down'>DOWN</button></div>");
}

function setup() {   //setup and draw are p5.js functions
	up = select("#up");
	down = select("#down");
	left = select("#left");
	right = select("#right");

	snake = new Snake();
	frameRate(20); //p5.js function that sets the framerate of the canvas.
	pickLocation();
}

function pickLocation() { //chooses a location on the grid so that the snake and the food line up. 
	var cols = floor(width/scl); //cols is equal to how many times scale can fit into the width 600/20
	var rows = floor(height/scl); //rows is equal to how many times scale can fit into the height 600/20

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl); //after choosing the location of the food, you need to make the food 20x20 pixels	

}



function draw() {
	background(50); //the bkg color of the canvas

	up.mousePressed(function(){
		snake.dir(0, -1);
	});

	down.mousePressed(function(){
		snake.dir(0, 1);
	});

	left.mousePressed(function(){
		snake.dir(-1, 0);
	});

	right.mousePressed(function(){
		snake.dir(1, 0);
	});


	if(snake.eat(food)) {
		pickLocation();
	};

	snake.death();
	snake.update();
	snake.show();

	//draw the food:
	fill(255); //foods color
	rect(food.x, food.y, scl, scl); //foods random x, random y and scale for its x and y  
}



function keyPressed() { //p5,js function to pick up on key presses
	if (keyCode === UP_ARROW || keyCode === 87) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW || keyCode ===83) {
		snake.dir(0, 1);
	} else if (keyCode	=== LEFT_ARROW || keyCode === 65) {
		snake.dir(-1, 0);
	} else if (keyCode === RIGHT_ARROW || keyCode === 68) {
		snake.dir(1, 0);
	}
}