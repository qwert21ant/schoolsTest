var NUM_PARTIC = 300;

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
	
	move(bgSize){
		this.pos.x += this.speed.x;
		this.pos.y += this.speed.y;
		
		if(this.pos.x < 0 || this.pos.x > bgSize.x || this.pos.y < 0 || this.pos.y > bgSize.y) this.init();
	}
};

function startBG() {
	var bcgElem = document.getElementsByClassName("main_grid_center_column")[0];

	var bcgSize = {x: bcgElem.clientWidth, y: bcgElem.clientHeight};
	console.log('Canvas size: ');
	console.log(bcgSize);

	var cvsElem = document.createElement("canvas");
	cvsElem.setAttribute("style", "position: absolute; height: " + bcgSize.y + "px; width: " + bcgSize.x + "px;");
	
	bcgElem.insertBefore(cvsElem, bcgElem.firstChild);

	var context = cvsElem.getContext("2d");
	context.rect(0, 0, bcgSize.x, bcgSize.y);
	context.fillStyle = "red";
	context.fill();
	context.stroke();

	var partics = [];
	for(let i = 0; i < NUM_PARTIC; i++) partics.push(new Particle());

	setInterval(() => {
		for(let i = 0; i < NUM_PARTIC; i++) partics[i].move(bcgSize);
		
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