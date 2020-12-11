class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Images/mango.png");
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("green");
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image, 0, 0, this.radius * 2, this.radius * 2);
        pop();
    }
}