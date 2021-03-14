apiOnStart();

function apiOnStart(){
  //Check API integrity every 10 minutes
  checkSystemIntegrity();
  setInterval(checkSystemIntegrity,10*60000);
  //Account Info
  getAcct();
}





async function checkSystemIntegrity(){
  var status=await fetch("https://api.spacetraders.io/game/status").then(x=>x.json());
  if(status.status.trim()=="spacetraders is currently online and available to play"){
    API_INTEGRITY=true;
  }else{
    API_INTEGRITY=false;
  }
}




async function getAcct(){
  var acct=await fetch(`https://api.spacetraders.io/users/${USERNAME}?token=${PASSWORD}`).then(x=>x.json());
  BALANCE=acct.user.credits;
  SHIP=acct.user.ships[0];
  LOCATION=SHIP.location;
}