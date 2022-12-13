class Character {
  
  constructor(x, y, s, z){
    this.x = x;
    this.y = y;
    this.s = s;
    this.z = z;
  }
  
  body(x) {

    scale(this.z);
  
//     image(characterimg, this.x, this.y);
    
//     if(keyIsDown(RIGHT_ARROW)) {
      image(runningimg, this.x, this.y);
//     }

  }
  
  move() {
    if(keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + this.s;
   }
   
   if(keyIsDown(LEFT_ARROW)) {
     this.x = this.x - this.s;
   }
    
  if(this.x >= width+100) {
      mode++;
      console.log(mode);
      this.x = 0;
   }
    if(mode >= 1) {
      if(this.x < 0){
      mode--;
      console.log(mode);
      this.x = 100;
    }
    }
  
    }

  stop() {
      if(this.x >= 100){
      this.x = 100;
    }
    
    if (this.x <= 0){
      this.x = 0;
    }
  }
  
  continue() {
    if(this.x == 100){
      this.x = this.x + this.s
    }
  }
  
  collisionWithEnemy(enemy) {
    d2 = dist(this.x, this.y, enemy.x + 3, enemy.y);
    
  }
  
}