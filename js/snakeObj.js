function Snake() { //snake constructor to create the snake in the game
	this.x = 0;
	this.y = 0;
	this.xspeed = 1; //set to one so that the snake moves as the game starts
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.dir = function (x, y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = function (pos) {
		var distance = dist(this.x, this.y, pos.x, pos.y); //finds the distance between two vectors
		if (distance < 1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}

	this.death = function () {
		for(var l = 0; l < this.tail.length; l++) {
			var pos = this.tail[l];
			var distance = dist(this.x, this.y, pos.x, pos.y);
			if (distance < 1) {
				this.total = 0;
				this.tail = [];
			}
		}
	}

	this.update = function () { //this function is as the snake moves it tracks things like total and the snakes location
		if (this.total === this.tail.length){
		for (var i = 0; i < this.tail.length - 1; i++) { //the array of tail vectors always shifts one down
			this.tail[i] = this.tail[i + 1];
			}
		}
		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		//use the p5.js function constrain to keep the snake object on the canvas
		this.x = constrain(this.x, 0, width-scl); //item to constrain, intial value, width(which is 600) - scl (20) so that the snake is visable
		this.y = constrain(this.y, 0, height-scl);
	}

	this.show = function () { //this function draws the snake
		fill(255); //the color of the snake (the rect that makes up the snake)
		for (var k = 0; k < this.total; k++) {
			rect(this.tail[k].x, this.tail[k].y, scl, scl);
		}

		rect(this.x, this.y, scl, scl); //draws the snake at the x and y location at the size of the scl
	}
}