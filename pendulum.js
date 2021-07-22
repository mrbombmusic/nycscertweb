class Pendulum {
  constructor(l) {
    this.bob = createVector()
    this.origin = createVector(width / 2, 0)
    this.len = l;
    this.angle = PI / 4;
    this.angleV = 0;
    this.angleA = 0.01;
    this.gravity = 0.5;
    this.size = 24;
    this.c = "#000000"
  }

  display() {
    stroke(this.c)
    strokeWeight(2);
    line(this.origin.x, this.origin.y, this.bob.x, this.bob.y)
    strokeWeight(1);
    circle(this.bob.x, this.bob.y, this.size)
  }

  update() {
    let force = this.gravity * sin(this.angle);
    this.angleA = (-1 * force) / this.len;

    this.angleV += this.angleA;
    this.angle += this.angleV;
    this.bob.x = this.len * sin(this.angle) + this.origin.x;
    this.bob.y = this.len * cos(this.angle) + this.origin.y;
  }

  played() {
    this.c = "#ff0000"
  }

  notPlayed() {
    this.c = "#000000"
  }



}
