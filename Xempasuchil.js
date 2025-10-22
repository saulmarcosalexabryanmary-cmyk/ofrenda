import* as THREE from "../js/three.module.js";
      import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function E01({x,y,z}){
var geometry01 = new RoundedBoxGeometry(3,10,3,3,2);
 var material01 = new THREE.MeshLambertMaterial({
    color: 0xFF8B21, side: THREE.DoubleSide
 });
 var mesh02 = new THREE.Mesh(geometry01, material01);
 //scene.add(mesh02);

var mesh03 = new THREE.Mesh(geometry01, material01);
 //scene.add(mesh03);
 mesh03.rotation.set(0,5,1.57);


var mesh04 = new THREE.Mesh(geometry01, material01);
 //scene.add(mesh04);
mesh04.rotation.set(0,5,2.355);

var mesh05 = new THREE.Mesh(geometry01, material01);
//scene.add(mesh05);
mesh05.rotation.set(0,5,0.785);


var geometry02 = new RoundedBoxGeometry(3,10,3,3,2);
 var material02 = new THREE.MeshLambertMaterial({
    color: 0xFF8B21, side: THREE.DoubleSide
 });
 var mesh06 = new THREE.Mesh(geometry02, material02);
 //scene.add(mesh06);

var mesh07 = new THREE.Mesh(geometry02, material02);
 //scene.add(mesh07);
 mesh07.rotation.set(0,0,1.57);


var mesh08 = new THREE.Mesh(geometry02, material02);
 //scene.add(mesh08);
mesh08.rotation.set(0,0,2.355);


var mesh09 = new THREE.Mesh(geometry02, material02);
//scene.add(mesh09);
mesh09.rotation.set(0,0,0.785);

var Xempasuchil = new THREE.Group();
Xempasuchil.add(mesh02,mesh03, mesh04, mesh05,mesh06,mesh07,mesh08, mesh09);
Xempasuchil.position.set(x,y,z);
return Xempasuchil;
}