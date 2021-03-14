setInterval(renderUI,1000);

function renderUI(){
  if(API_INTEGRITY){
    document.getElementById("apiIntegrity").innerHTML=`Network Uplink: Online`
  }else{
    document.getElementById("apiIntegrity").innerHTML=`Network Uplink: Compromised`
  }

  document.getElementById("cmdr").innerHTML=`CMDR ${USERNAME}`;
  document.getElementById("balance").innerHTML=`Credits: ${BALANCE}`;


    document.getElementById("location").innerHTML=`Location: ${LOCATION}`;
    document.getElementById("shipType").innerHTML=`Location: ${SHIP.type}`;
}