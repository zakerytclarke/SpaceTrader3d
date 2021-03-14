var LOCATION="";

var AUTO_CRUISE=false;

var POSITION={
  x:0,
  y:0,
  z:5
}

var PITCH=0;
var ROLL=0;
var YAW=0;

var VELOCITY=0;
var ACCELERATION=0;

// setInterval(function(){
//   LOCATION++;
// },1000)

//API Variables
var API_INTEGRITY=true;

var BALANCE=0;
var SHIP={};




String.prototype.hashCode = function() {
  var hash = 0, i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};