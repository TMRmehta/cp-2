class paper{
    constructor(x, y, radius ){
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius = radius
        this.body=Bodies.circle(x,y,(this.radius-20)/2,options)
        World.add(world,this.body)
        this.image = loadImage("paper.png")
    }
    display(){
       var  angle= this.body.angle
        push();
        rotate(angle)
        translate(this.body.position.x, this.body.position.y);
        fill(255)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop();
      }
}
