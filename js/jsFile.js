var snake; //the snake object
var scl = 20;
var food;

function setup() {   //setup and draw are p5.js functions
	createCanvas(600,600); //makes a canvas, 600px x 600px pixels
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
	if (keyCode === UP_ARROW) {
		snake.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		snake.dir(0, 1);
	} else if (keyCode	=== LEFT_ARROW) {
		snake.dir(-1, 0);
	} else if (keyCode === RIGHT_ARROW) {
		snake.dir(1, 0);
	}
}