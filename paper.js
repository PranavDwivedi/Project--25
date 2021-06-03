class paper 
{
  constructor(x, y, r) {

    var options =
    {

      isStatic: false,
      restitution: 0.3,
      friction: 0,
      density: 1.2,

    }
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    this.x = x;
    this.y = y;
    this.image = loadImage("paper.png");  

  }
  display()
  {
var paperpos = this.body.position;
push();
translate(paperpos.x, paperpos.y);
image(this.image, 0, 0, this.r);

  }

}