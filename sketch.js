//Define an array to hold all the bodies
var bodies = new Array();
var b1;
var b2;

function setup(){
    createCanvas(windowWidth,windowHeight);

    numOfBodies = Math.floor(random(2,4));

    for(i=0;i<numOfBodies;i++){
        randRadius = random(15,30);
        mass = random(0,0.8) * (randRadius * randRadius);
        randPosX = random(0,windowWidth/3);
        randPosY = random(0,windowHeight/3);
        randVelX = random(0,0.8);
        randVelY = random(0,0.1);
        this.bodies[i] = new Body(randRadius,mass,randPosX,randPosY,randVelX,randVelY);
    }
    // starRadius = 696
    // starMass = 0.0274 * (starRadius * starRadius);
    // star = new Body(starRadius,starMass,width/2,height/2,0,0);
    // this.bodies.push(star);

    // planetRadius = 6.3;
    // planetMass = 0.00098 * (planetRadius * planetRadius);
    // planet = new Body(planetRadius,planetMass,100,100,0,0);
    // this.bodies.push(planet);

    background(51);
}

function draw(){
    
    for(i=0; i< this.bodies.length; i++){
        if(this.bodies[i].position.x > windowWidth + 30 || this.bodies[i].position.x < -30 ){
            location.reload();
        }

        if(this.bodies[i].position.y > windowHeight + 30 || this.bodies[i].position.y < -30 ){
            location.reload();
        }

        for(j = 0; j< this.bodies.length; j++){
            if(i !== j){
                let f = this.bodies[j].calculateForce(this.bodies[i]);
                this.bodies[i].applyForce(f);
            }
        }
        this.bodies[i].updateVelocity();
        this.bodies[i].updatePosition();
        this.bodies[i].show();
        
    }
}