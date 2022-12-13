class Enemies {
  constructor(x, y, s, v) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.v = v;
  }

  body1(x, y) {
    
    image(enemyimg, this.x, this.y);
  }
  
  body2() {
    image(enemy2img, this.x, this.y);
    
  }
  
  body3() {
    image(enemy3img, this.x, this.y);
}
  
  body4() {
    
  }
  
  move(){
    if(keyIsDown(RIGHT_ARROW)){
    this.x = this.x - this.v
    }
  }
}
