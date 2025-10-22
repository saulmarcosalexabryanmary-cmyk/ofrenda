import* as THREE from "../js/three.module.js";
      import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function E01({x,y,z}){
//PAN
    var geometry01 = new RoundedBoxGeometry(8,10,8,10,4);
 var material01 = new THREE.MeshLambertMaterial({
    color: 0xF7B336, side: THREE.DoubleSide
 });
 var mesh01 = new THREE.Mesh(geometry01, material01);
  //scene.add(mesh01);
  mesh01.position.set(0,0,0);

  var geometry02 = new THREE.SphereGeometry(1,100,100);
var material02 = new THREE.MeshBasicMaterial({
    color:0xA36900, side:THREE.DoubleSide
});
var mesh02 = new THREE.Mesh(geometry02,material02);
//scene.add(mesh02);
mesh02.position.set(0,5,0);

//Bolitas superiores
 var geometry03 = new THREE.SphereGeometry(1,100,100);
var material03 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,4,2);
      
var geometry04 = new THREE.SphereGeometry(1,100,100);
var material04 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,4,-2);

var geometry05 = new THREE.SphereGeometry(1,100,100);
var material05 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh05 = new THREE.Mesh(geometry05,material05);
//scene.add(mesh05);
mesh05.position.set(2,4,0);

var geometry06 = new THREE.SphereGeometry(1,100,100);
var material06 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(-2,4,0);

//Bolitas inferiores
var geometry07 = new THREE.SphereGeometry(1,100,100);
var material07 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh07);
mesh07.position.set(3.5,1,0);

var geometry08 = new THREE.SphereGeometry(1,100,100);
var material08 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh08);
mesh08.position.set(-3.5,1,0);

var geometry09 = new THREE.SphereGeometry(1,100,100);
var material09 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh09);
mesh09.position.set(0,1,3.5);

var geometry10 = new THREE.SphereGeometry(1,100,100);
var material10 = new THREE.MeshBasicMaterial({
    color:0xBF7C04, side:THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(0,1,-3.5);

//Huesitos
var geometry11 = new RoundedBoxGeometry(1,3,1,10,4);
 var material11 = new THREE.MeshLambertMaterial({
    color: 0xD99E32, side: THREE.DoubleSide
 });
 var mesh11 = new THREE.Mesh(geometry11, material11);
  //scene.add(mesh11);
  mesh11.position.set(3.5,2.8,0);
  mesh11.rotation.set(0,0,0.5);

var geometry12 = new RoundedBoxGeometry(1,3,1,10,4);
 var material12 = new THREE.MeshLambertMaterial({
    color: 0xD99E32, side: THREE.DoubleSide
 });
 var mesh12 = new THREE.Mesh(geometry12, material12);
  //scene.add(mesh12);
  mesh12.position.set(-3.5,2.8,0);
  mesh12.rotation.set(0,0,-0.5);

  var geometry13 = new RoundedBoxGeometry(1,3,1,10,4);
 var material13 = new THREE.MeshLambertMaterial({
    color: 0xD99E32, side: THREE.DoubleSide
 });
 var mesh13 = new THREE.Mesh(geometry13, material13);
  //scene.add(mesh13);
  mesh13.position.set(0,2.8,-3.5);
  mesh13.rotation.set(0.5,0,0);

    var geometry14 = new RoundedBoxGeometry(1,3,1,10,4);
 var material14 = new THREE.MeshLambertMaterial({
    color: 0xD99E32, side: THREE.DoubleSide
 });
 var mesh14 = new THREE.Mesh(geometry14, material14);
  //scene.add(mesh14);
  mesh14.position.set(0,2.8,3.5);
  mesh14.rotation.set(-0.5,0,0);

var Pan = new THREE.Group();
Pan.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13, mesh14);
Pan.position.set(x,y,z);

return Pan;
}