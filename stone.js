class Stone{
    constructor(x, y, width, height) {
        var options = {
             isStatic:true,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("stone.jpg");
     


        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);

       
      }
}