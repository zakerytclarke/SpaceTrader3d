function updatePhysics(){
  POSITION.x+=VELOCITY*Math.sin(YAW);
  POSITION.y+=0;
  POSITION.z+=VELOCITY*Math.cos(YAW);
  VELOCITY+=ACCELERATION;
  
  
  //If not applying acceleration, then slowly slow down
  if(AUTO_CRUISE){
    var slowDownFactor=0.1;

  }


  updateUI();
}

function updateUI(){
  var scale=100000;
  document.getElementById("speed").innerHTML=`Speed: ${Math.floor(-1*VELOCITY*scale)}m/s`
  document.getElementById("acceleration").innerHTML=`Accel: ${Math.floor(-1*ACCELERATION*scale)}m/s`
  
}