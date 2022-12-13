class Tree {
  
  constructor(x,y,s,z){
    this.x = x;
    this.y = y;
    this.s = s;
    this.z = z;
  }
  
  body1(){
    image(treeimg, this.x, this.y);
  }
  
  body2(){
    image(treeimg2, this.x, this.y);
  }
  
  body3(){
    
  }
  
  body4(){
    
  }
  
 move(){ 
   if(keyIsDown(RIGHT_ARROW)) {
      this.x = this.x - this.s;
   }
   
   if(keyIsDown(LEFT_ARROW)) {
     this.x = this.x + this.s;
   }
 }
  
}