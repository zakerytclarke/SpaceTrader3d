var accelVal=0.0001;
var yawVal=0.003;
var pitchVal=0.005;
var rollVal=0.01;
document.addEventListener("keydown", function(e){
  switch(e.key){
    case "ArrowUp":
      ACCELERATION=-1*accelVal;
    break;
    case "ArrowDown":
      ACCELERATION=accelVal;
    break;
    case "a":
      YAW+=yawVal;
    break;
    case "d":
     YAW-=yawVal;
    break;

    case "w":
      PITCH-=yawVal;
    break;
    case "s":
     PITCH+=yawVal;
    break;

    case "e":
      ROLL-=rollVal;
    break;
    case "q":
     ROLL+=rollVal;
    break;


     case " ":
      ACCELERATION=0;

      VELOCITY=0;
    break;
  }
});

document.addEventListener("keyup", function(e){
  switch(e.key){
    case "ArrowUp":
      ACCELERATION*=0.01;
    break;
    case "ArrowDown":
      ACCELERATION*=0.01;
    break;
  }
});