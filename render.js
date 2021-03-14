/**
 * Planet Rendering Code taken from: https://codepen.io/g12n/pen/vYBryJW?editors=1100
 * Textures taken from https://www.solarsystemscope.com/textures/
 */

var planetTextures=[];
//load all textures
for(var i=0;i<10;i++){
  var textureLoader = new THREE.TextureLoader();
  var texture = textureLoader.load(`/textures/planet${i}.jpg`);
  planetTextures.push(texture);
}

var textureURL = "/textures/planet5.jpg"; 
var displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg"; 
var worldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg"

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enablePan = false;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2,60,60 );

var texture=planetTextures[0];
var displacementMap = textureLoader.load( displacementURL );
var worldTexture = textureLoader.load( worldURL );

var material = new THREE.MeshPhongMaterial ( 
  { color: 0xffffff ,
  map: texture ,
     displacementMap: displacementMap,
  displacementScale: 0.06,
  bumpMap: displacementMap,
  bumpScale: 0.04,
   reflectivity:0, 
   shininess :0
  } 

);

var planet = new THREE.Mesh( geometry, material );


const light = new THREE.DirectionalLight(0xFFFFFF, 1);
light.position.set(-100, 10,50);
scene.add(light);


hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.1 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 0, 0 );
scene.add( hemiLight );


var worldGeometry = new THREE.SphereGeometry( 1000,60,60 );
var worldMaterial = new THREE.MeshBasicMaterial ( 
  { color: 0xffffff ,
  map: worldTexture ,
  side: THREE.BackSide
  } 
);
var world = new THREE.Mesh( worldGeometry, worldMaterial );
scene.add( world );

scene.add( planet );
camera.position.z = 5;

planet.rotation.x = 3.1415*0.02;
planet.rotation.y = 3.1415*1.54;


function animate() {
  updatePhysics();
	requestAnimationFrame( animate );
  planet.rotation.y += 0.002;
  planet.rotation.x += 0.0001;

  
  //Generate properties for current body
  var props=generatePlanet(LOCATION)
  //Color and mesh
  planet.material.color.set(fullColorHex(props.color.r,props.color.g,props.color.b));
  planet.material.map = planetTextures[props.texture];
  planet.material.needsUpdate = true;
  //Size and ridges
  planet.material.bumpScale=props.ridges;
  // planet.scale.x=props.size;
  // planet.scale.y=props.size;
  // planet.scale.z=props.size;

  //world.rotation.y += 0.001
  //world.rotation.x += 0.0005
  //Camera Movement for Spaceship
  camera.position.x = POSITION.x;
  camera.position.y = POSITION.y;
  camera.position.z = POSITION.z;

  camera.rotation.x = PITCH;
  camera.rotation.y = YAW;
  camera.rotation.z = ROLL;

	renderer.render( scene, camera );
}
animate();


function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize, false);


function rgbToHex(rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

function fullColorHex (r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return "#"+red+green+blue;
};