var bird;
var pipes = [];
var btn_start = document.getElementsByClassName("start")[0];
var isStarted = false;
var isHited = false;
var points_div = document.getElementsByClassName("points")[0];
var points = 0;
var best_points = 0;
var win_div = document.getElementsByClassName("win")[0];
var finish_points_div = document.getElementsByClassName("finish-points")[0];
var best_points_div =document.getElementsByClassName("best-points")[0];

function setup() {
  var canvas = createCanvas(650, 400); 
  canvas.parent('game');
  bird = new Bird();
  pipes.push(new Pipe());
}

function draw() {
  background(80);
  if(isHited)
  {
    for(var i = pipes.length - 1; i >= 0; i--){ 
      pipes[i].show();
    }
    bird.velocity -= 1;
    bird.y -= bird.velocity;
    bird.x += 3;
    bird.show();
    if(bird.y > width + bird.hei)
    {
      win_div.style.visibility = "visible";
      win_div.style.opacity = "1";
      if(best_points < points) {best_points = points;}
      finish_points_div.innerHTML = points;
      best_points_div.innerHTML = best_points;
    }
  }
  if(isStarted){
    for(var i = pipes.length - 1; i >= 0; i--){
      pipes[i].update(); 
      pipes[i].show();
      if(pipes[i].hits(bird)){
        pipes[i].color = 150;
        isStarted=false;
        isHited = true;
      }

      if((bird.x - pipes[i].x >= 0 && bird.x - pipes[i].x < 2)){
        points++;
      } 

      if(pipes[i].x < pipes[i].width){
        pipes.slice(i,1);
      }
    }

    points_div.innerHTML = "Points: " + points;

    bird.update();  
    bird.show(); 
    if((width - pipes[pipes.length - 1].x) > 180){
      pipes.push(new Pipe());    
    }    
  }
}
        
function keyPressed(){
  if(key==' '){
    bird.up();  
  }
}

function start_game()
{
  btn_start.style.visibility = "hidden";
  isStarted = true;
}

function restart()
{
  bird = new Bird();
  pipes = [];
  pipes.push(new Pipe());
  isHited = false;
  points = 0;
  points_div.innerHTML = "Points: " + points;
  win_div.style.visibility = "hidden";
  win_div.style.opacity = "0";
  btn_start.style.visibility = "visible";

}