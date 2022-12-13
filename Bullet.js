class Bullet {
  constructor(x, y, s) {
    this.x = x;
    this.y = y;
    this.s = s;
  }

  body() {
    image(bulletimg, this.x, this.y);
  }

  collision() {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d <= 35) {
      enemy.x = width + this.x;
      this.x = 0;
      print(true);
      if (print(true)) {
        print(false)
      }
    }
  }

  move() {
    if (key === "s") {
    if (print(true)) {
        this.x = this.x + this.s;
        print(false)
      } if(print(false)) {
        this.x = this.x - this.s;
      }
       this.x = this.x + this.s;

    }
  }
}
