function Pipe(){
  this.distance=140;
  this.x = width;
  this.upPipe=random(30,height-this.distance-60);
  this.downPipe = height - this.distance -
                                this.upPipe;
  this.width = 24;
  this.speed = 2.3;
  this.color=false;
  this.update = function(){
    this.x -= this.speed;
  } 
  
  
  this.hits=function(bird){
    if(bird.y < (this.upPipe+bird.hei/2) || 
       bird.y >(this.upPipe + this.distance-bird.hei/2)){
      if(bird.x - 2 > (this.x-bird.wid/2) &&
         bird.x < this.x + this.width){
        this.color=true;        
        return true;
      }
      this.color=false;
      return false;
    }   
  }
  
  
  this.show = function(){
    fill(255); 
    if(this.color){
     fill(255,0,0);   
    }
    rect(this.x,0,
          this.width,this.upPipe);
    rect(this.x,this.upPipe+this.distance,
          this.width,this.downPipe);
  }   
  
}