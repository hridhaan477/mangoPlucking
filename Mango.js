class mango {
  constructor(x, y,r) {
    var options = {
      resitution: 0.8,
      friction: 1.0,
      isStatic:true
    };
    this.x = x;
    this.y = y;
    this.r=r;
     this.body = Bodies.circle(this.x, this.y, this.r, options);
    this.image = loadImage("mango.png");
    World.add(world, this.body);
  }

  display() {

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r * 2, this.r * 2);
    pop();

  }
}

