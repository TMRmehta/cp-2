class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.thickness = 20;
        this.bottom=Bodies.rectangle(x, y, width,this.thickness)
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
        World.add(world,this.bottom)
        this.image=loadImage("dustbingreen.png")
       
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
        rect(0,0,this.width,this.height)
        pop();

        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0,-100, this.width, 200);
      }
}