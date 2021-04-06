class Box {
  constructor(x,y,width,height,color) {
    var options = {
        isStatic: false
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.color = color;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    fill(this.color);
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
  }
}