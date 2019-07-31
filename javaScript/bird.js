function Bird(){
  this.y = height/2;
  this.x = width/7;
  this.wid = 30;
  this.hei = this.wid;  
  
  
  this.show = function(){
    fill(255);
    ellipse(this.x,this.y,this.wid,this.hei);  
  }
  this.velocity = 0;
  this.gravity = 0.5; 
  
  this.lift = -13;
  
  
  this.up = function(){
    this.velocity += this.lift;    
   }    
  this.update = function(){
    this.velocity += this.gravity;
    this.y += this. velocity;
    if(this.y > height - this.hei/2){
      this.y = height - this.hei/2;  
      this.velocity = 0;
    }
    if(this.y < this.hei/2){
      this.y = this.hei/2;  
      this.velocity = 0;
    }
  }

  


}