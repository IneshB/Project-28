class Tree{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.width = 450;
        this.height = 600;
        this.thickness = 10;

        this.image = loadImage("Images/tree.png");

        this.body = Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic: true});
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y + 10);
        fill("yellow");
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
}