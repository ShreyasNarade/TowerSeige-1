class Blue{
  constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':2.3
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      this.image = loadImage("sprites/blu.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      strokeWeight(1);
      fill("cyan");
      image(this.image,pos.x, pos.y, 90, 90);
    }
}