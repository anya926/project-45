class Stone{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0.8,
            friction: 0.5,
            density: 1.2
        }
        this.width = 50;
        this.height = 70;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        this.image = loadImage("stone1.png");

        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}