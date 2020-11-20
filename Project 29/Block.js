class Block{
	constructor(x,y,w,h){
		var options={
			restitution:0.4,
			friction:0.0
		}
		this.visibility = 255;
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.width=w;
		this.height=h;
	
 		World.add(world, this.body);
	}

	score(){
		if(this.visibility<0 && this.visibility>-105){
			console.log("score") 
			score++;
		}
	}

	display(){
		if(this.body.speed<6){
			var angle = this.body.angle;
	    	var Blockpos=this.body.position;		
			push()
			translate(Blockpos.x, Blockpos.y);
			rotate(angle);
			rectMode(CENTER);
			rect(0,0,this.w, this.h);
			pop()
		}
		else{
			World.remove(world, this.body);
			push();
			this.visibility = this.visibility - 5;
			pop()
		}		
			
	}

}