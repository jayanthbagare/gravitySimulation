class Body{
    constructor(radius, mass, initX , initY, velX, velY){
        this.radius = 0;
        this.mass = 0;
        this.position = createVector(0,0);
        this.velocity = createVector(velX,velY);
        this.acceleration = createVector(0,0);
        this.gConstant = 0.1;
        this.lifespan = 255;
        this.color = color(random(0,255),random(0,255),random(0,255),random(0,255));


        this.radius = radius;
        this.mass = mass;

        this.position.x = initX;
        this.position.y = initY;
    }

    calculateForce(body){
        let force = p5.Vector.sub(this.position,body.position);
        let distance = force.mag();
 
        if(this.radius > body.radius){
            distance = constrain(distance,body.radius,this.radius);
        }else{
            distance = constrain(distance,this.radius,body.radius);
        }
        
        force.normalize();
        let strength = (this.gConstant * this.mass * body.mass)/(distance * distance);
        force.mult(strength);
        return force;
    }

    applyForce(force){
        let acc = p5.Vector.div(force, this.mass);
        this.acceleration.add(acc);
    }

    updateVelocity(){
        this.velocity.add(this.acceleration);
    }

    updatePosition(){
        this.position.add(this.velocity);
        this.acceleration.mult(0);
        this.lifespan -= 0.02;
    }

    show(){
        fill(this.color, this.lifespan);
        ellipse(this.position.x,this.position.y,this.radius,this.radius);
    }
}