var NUM_PARTIC = 300;

/////////

function startBG() {

var bcgElem = document.getElementsByClassName("bg_type0")[0];

var bcgSize = {x: bcgElem.clientWidth, y: bcgElem.clientHeight};

var cvsElem = document.createElement("canvas");
cvsElem.setAttribute("style", "position: absolute; top: 0; left: 0;");
cvsElem.setAttribute("width", bcgElem.x);
cvsElem.setAttribute("height", bcgElem.y);

var context = cvsElem.getContext("2d");
context.fillStyle = "red";

var partics = [];
for(let i = 0; i < NUM_PARTIC; i++) partics.push(new Particle());

setInterval(() => {
	for(let i = 0; i < NUM_PARTIC; i++) partics[i].move();
	
	console.log('tick');
}, 10);
};

function rand(min, max){
	return Math.random() * (max - min) + min;
}

function dist(l, r){
	let d1 = l.x - r.x;
	let d2 = l.y - r.y;
	return Math.sqrt(d1*d1 + d2*d2);
}

class Particle{
	pos   = {x: 0.0, y: 0.0};
	speed = {x: 0.0, y: 0.0};
	
	constructor(){
		this.pos.x = rand(3, 10);
		this.pos.y = rand(3, 10);
		this.speed.x = rand(3, 10);
		this.speed.y = rand(3, 10);
	}
	
	init(){
		this.pos.x = rand(3, 10);
		this.pos.y = rand(3, 10);
		this.speed.x = rand(3, 10);
		this.speed.y = rand(3, 10);
	}
	
	move(){
		this.pos.x += speed.x;
		this.pos.y += speed.y;
		
		if(this.pos.x < 0 || this.pos.x > this.bcgSize.x || this.pos.y < 0 || this.pos.y > bcgSize.y)
			init();
	}
}