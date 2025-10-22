import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){
    
//cuadro
      var geometry01 = new THREE.BoxGeometry(150,60,6,3,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0xffffff, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(8,30,0);
//papel picado 
var geometry02 = new THREE.BoxGeometry(50,30,6.5,3,3,2);
var texture02= new THREE.TextureLoader().load("./image/papel1.jpg");
var material02= new THREE.MeshLambertMaterial({map:texture02});

var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(-42,45,1);

//papel picado 2
var geometry03 = new THREE.BoxGeometry(50,30,6.5,3,3,2);
var texture03= new THREE.TextureLoader().load("./image/papel2.jpg");
var material03= new THREE.MeshLambertMaterial({map:texture03});

var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(8,45,1);
//papel picado 3
var geometry04 = new THREE.BoxGeometry(50,30,6.5,3,3,2);
var texture04= new THREE.TextureLoader().load("./image/papel1.jpg");
var material04= new THREE.MeshLambertMaterial({map:texture04});

var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(58,45,1);
//Catrina
var geometry05 = new THREE.BoxGeometry(50,30,6.5,3,3,2);
var texture05= new THREE.TextureLoader().load("./image/catrina.jpg");
var material05= new THREE.MeshLambertMaterial({map:texture05});

var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(58,30,1.5);

//Catrina
var geometry06 = new THREE.BoxGeometry(50,30,6.5,3,3,2);
var texture06= new THREE.TextureLoader().load("./image/catrina.jpg");
var material06= new THREE.MeshLambertMaterial({map:texture06});

var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(-42,30,1.5);

var Plano = new THREE.Group();
Plano.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06);
Plano.position.set(x,y,z);

return Plano;
}


