      import* as THREE from "../js/three.module.js";
      import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function E04({x,y,z}){
// Espacio para colocar los objetos

//Esfera e craneo
 var geometry01 = new THREE.SphereGeometry(6,100,100);
var texture1= new THREE.TextureLoader().load("./image/XMP.jpeg");
var material01= new THREE.MeshLambertMaterial({map:texture1});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,7,0);


//Cuello de calavera
var geometry02 = new THREE.CylinderGeometry(4,4,8,100,50,0,4);
var texture2= new THREE.TextureLoader().load("./image/XMP.jpeg");
var material02= new THREE.MeshLambertMaterial({map:texture2, side:THREE.DoubleSide});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(1.8,4,0);

//OJOS
var geometry03 = new THREE.SphereGeometry(2.5,100,100);
var material03 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(4,8,2);

var mesh04 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh04);
mesh04.position.set(4,8,-2);

//Nariz
var geometry04 = new RoundedBoxGeometry(0.8,1.5,0.8,3,2);
 var material04 = new THREE.MeshLambertMaterial({
    color: 0xFFFFFF, side: THREE.DoubleSide
 });
 var mesh05 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh05);
mesh05.position.set(5.6,5,0.5);
mesh05.rotation.set(0,5,0.355);

var mesh06 = new THREE.Mesh(geometry04, material04);
//scene.add(mesh06);
mesh06.position.set(5.6,5,-0.5);
mesh06.rotation.set(0,5,-0.356);

//DIENTES
var geometry05 = new THREE.CylinderGeometry(0.1,0.1,2.8,100,50,0,4);
var material05 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh07);
mesh07.position.set(5.8,1.4,0);

var mesh08 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh08);
mesh08.position.set(5.7,1.4,1);

var mesh09 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh09);
mesh09.position.set(5.7,1.4,-1);

var mesh10 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh10);
mesh10.position.set(5.3,1.4,2);

var mesh11 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh11);
mesh11.position.set(5.3,1.4,-2);

//TAPA INFERIOR
var geometry06 = new THREE.CircleGeometry(5.2,100);

var texture3= new THREE.TextureLoader().load("./image/DDMM.jpeg");
var material06= new THREE.MeshLambertMaterial({map:texture3, side:THREE.DoubleSide});
var mesh12=new THREE.Mesh(geometry06,material06);
mesh12.position.set(0,10.8,0);
mesh12.rotation.set(-1.57,0,1.57);
//scene.add(mesh12);   

var geometry07 = new THREE.CircleGeometry(4,100);

var texture4= new THREE.TextureLoader().load("./image/XMP.jpeg");
var material07= new THREE.MeshLambertMaterial({map:texture4, side:THREE.DoubleSide});
var mesh13=new THREE.Mesh(geometry07,material07);
mesh13.position.set(1.8,0,0);
mesh13.rotation.set(-1.57,0,1.57);
//scene.add(mesh13);   

var Calaverita = new THREE.Group();
Calaverita.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13);
Calaverita.position.set(x,y,z);

return Calaverita;
}