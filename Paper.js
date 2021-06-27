class Paper {
    constructor(x,y,r) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("purple");
        
      }













}