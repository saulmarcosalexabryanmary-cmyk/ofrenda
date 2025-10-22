  import* as THREE from "../js/three.module.js";
      import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function E04({x,y,z}){

var geometry01 = new THREE.CircleGeometry(3,100);
var material01 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
mesh01.position.set(0,1,0);
mesh01.rotation.set(1.57,0,1.57);
//scene.add(mesh01);

var geometry02 = new THREE.CylinderGeometry(3,3,2,100,50,0,4);
var material02 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
mesh02.position.set(0,1,0);
//scene.add(mesh02);

var geometry03 = new THREE.CylinderGeometry(0.5,3,2,100,50,0,4);
var material03 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
mesh03.position.set(0,3,0);
//scene.add(mesh03);

var geometry04 = new THREE.CylinderGeometry(1,1,5,100,50,0,4);
var material04 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
mesh04.position.set(0,6,0);
//scene.add(mesh04);

var geometry05 = new RoundedBoxGeometry(5,6,5,10,4);
 var material05 = new THREE.MeshLambertMaterial({
    color: 0x000000, side: THREE.DoubleSide
 });
 var mesh05 = new THREE.Mesh(geometry05, material05);
  //scene.add(mesh05);
  mesh05.position.set(0,9,0);

var geometry06 = new THREE.CylinderGeometry(2.45,2.45,4,100,50,0,4);
var material06 = new THREE.MeshBasicMaterial({
    color:0x000000, side:THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);
mesh06.position.set(0,12,0);
//scene.add(mesh06);

var geometry07 = new THREE.CylinderGeometry(2.5,2.5,1,100,50,0,4);
var material07 = new THREE.MeshBasicMaterial({
    color:0xF2A941, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);
mesh07.position.set(0,10.2,0);
//scene.add(mesh07);

var geometry08 = new THREE.CylinderGeometry(3.05,3.05,0.7,100,50,0,4);
var material08 = new THREE.MeshBasicMaterial({
    color:0xF2A941, side:THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);
mesh08.position.set(0,1,0);
//scene.add(mesh08);

var geometry09 = new THREE.CircleGeometry(2.3,100);
var material09 = new THREE.MeshBasicMaterial({
    color:0xFFDF96, side:THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);
mesh09.position.set(0,13,0);
mesh09.rotation.set(1.57,0,1.57);
//scene.add(mesh09);

var geometry10 = new THREE.RingGeometry(2,2.45,100)
var material10 = new THREE.MeshBasicMaterial({
    color:0x212121, side:THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);
mesh10.position.set(0,14,0);
mesh10.rotation.set(1.57,0,1.57);
//scene.add(mesh10);

var Copal = new THREE.Group();
Copal.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10);
Copal.position.set(x,y,z);

return Copal;
}


