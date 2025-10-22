import* as THREE from "../js/three.module.js";

export default function E01({x,y,z}){

// Espacio para colocar los objetos
    var geometry1 = new THREE.CylinderGeometry(5.5,3.5,11,100,20,10,100);

    var texture1= new THREE.TextureLoader().load("./image/GLASS.jpg");
var material1= new THREE.MeshLambertMaterial({map:texture1});
var mesh01=new THREE.Mesh(geometry1,material1);
mesh01.position.set(0,5.5,0);
//scene.add(mesh01);        

//TAPA SUPERIOR
var geometry04 = new THREE.RingGeometry(5.5,4,100)

var texture3= new THREE.TextureLoader().load("./image/GLASS.jpg");
var material03= new THREE.MeshLambertMaterial({map:texture3});
var mesh05 = new THREE.Mesh(geometry04,material03);
mesh05.position.set(0,11,0);
mesh05.rotation.set(1.57,0,1.57);
//scene.add(mesh05);

//CERA
var geometry02 = new THREE.CircleGeometry(5.3,100);

var texture2= new THREE.TextureLoader().load("./image/CERA.jpg");
var material02= new THREE.MeshLambertMaterial({map:texture2});
var mesh02=new THREE.Mesh(geometry02,material02);
mesh02.position.set(0,10.8,0);
mesh02.rotation.set(-1.57,0,1.57);
//scene.add(mesh02);   

//TAPA INFERIOR
var geometry02 = new THREE.CircleGeometry(3.5,100);

var texture2= new THREE.TextureLoader().load("./image/GLASS.jpg");
var material02= new THREE.MeshLambertMaterial({map:texture2});
var mesh03=new THREE.Mesh(geometry02,material02);
mesh03.position.set(0,0,0);
mesh03.rotation.set(1.57,0,1.57);
//scene.add(mesh03);   

//MECHA
var geometry10 = new THREE.CylinderGeometry(0.1,0.1,2,100,50,0,4);
var material10 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry10,material10);
mesh11.position.set(0,11,0);
//scene.add(mesh11);

//FUEGO
 var geometry06 = new THREE.SphereGeometry(0.7,100,100);
var texture3= new THREE.TextureLoader().load("./image/FUEGO.jpg");
var material04= new THREE.MeshLambertMaterial({map:texture3});
var mesh07 = new THREE.Mesh(geometry06,material04);
mesh07.position.set(0,12,0);
//scene.add(mesh07);

var geometry11 = new THREE.CylinderGeometry(0,0.7,2,100,50,0,4);
var texture3= new THREE.TextureLoader().load("./image/FUEGO.jpg");
var material05= new THREE.MeshLambertMaterial({map:texture3});
var mesh12 = new THREE.Mesh(geometry11,material05);
mesh12.position.set(0,13,0);
//scene.add(mesh12);

var VELADORA = new THREE.Group();
VELADORA.add(mesh01,mesh02,mesh03,mesh05,mesh07,mesh11,mesh12);
VELADORA.position.set(x,y,z);

return VELADORA;
}
