class Tree{
constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image=loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      World.remove(world, this.body);
      var pos =this.body.position;

      imageMode(CENTER);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };
    
