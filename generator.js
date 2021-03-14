function generatePlanet(str){
  seed=str.hashCode();
  var features={
    size:random(seed)*100+300,
    rotation:random(seed),
    orbit:random(seed),
    height:random(seed)*10,
    ridges:ridges(),
    color:{
      r:Math.floor(random(seed)*55+200),
      g:Math.floor(random(seed)*55+200),
      b:Math.floor(random(seed)*55+200)
    },
    texture:Math.floor(random(seed)*10),
  }



  return features;

  function random() {
    var x = Math.sin(seed++) * 10000;
    seed++;
    return x - Math.floor(x);
  }

  function ridges(){
    var ridges=Math.floor(random(seed)*5);
    switch(ridges){
      case 0:
        return 0
      break;
      case 1:
        return 0.05;
      break;
      case 2:
      return 
        return 0.1
      break;
      case 3:
      return 1;
      break;
      case 4:
        return 5;
      break;
    }
  }
}

