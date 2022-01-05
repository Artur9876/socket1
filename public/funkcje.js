function MoveBall(Ball, Player)
{
  if (left && !right && !up && !down)
  {
    ball.x -= 5;
    ball.y -= 1;
  }
  else if (right && !left && !up && !down)
  {
    ball.x += 5;
    ball.y -= 1;
  }
  else if (down)
  {
    ball.y += 1;
    if (left){ 
    ball.x -= 5;
    }
    
    else if (right){
      
    ball.x += 5;
    }
  }
  else if (up)
  {
    
    ball.y -= 1;
    if (left){
      
    ball.x -= 5;
    }
    else if (right){ 
    ball.x += 5;
    }
  }

  if (ball.x - 5 == 20 && ball.y > player1.y && ball.y < player1.y + 60)
  {
    right = true;
    left = false;
    //console.log("HIT");


  }
  if (ball.x - 5 < 0)
  {
    ball.x = 400;
    ball.y = 300;
    //console.log("HIT");


  }
  if (ball.y - 5 == 0)
  {
    down = true;



  }
  else if (ball.x + 5 == 800)

  {
    left = true;
    right = false;


  }
  else if (ball.y + 5 == 600)
  {
    up = true;
    down = false;
  }
}