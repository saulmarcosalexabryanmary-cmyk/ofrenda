   import* as THREE from "../js/three.module.js";
      import {RoundedBoxGeometry} from "../js/RoundedBoxGeometry.js"

export default function E05({x,y,z}){
//botella
   var geometry01 = new THREE.CylinderGeometry(1.6,1.9,7,100,50,0,4);
var material01 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh01 = new THREE.Mesh(geometry01,material01);
//scene.add(mesh01);
mesh01.position.set(0,3.5,0);

var geometry02 = new RoundedBoxGeometry(3.55,8,3.55,10,4);
 var material02 = new THREE.MeshLambertMaterial({
    color: 0x946A00, side: THREE.DoubleSide
 });
 var mesh02 = new THREE.Mesh(geometry02, material02);
  //scene.add(mesh02);
  mesh02.position.set(0,4.5,0);

  var geometry03 = new THREE.CircleGeometry(1.9,100);
var material03 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh03 = new THREE.Mesh(geometry03,material03);
//scene.add(mesh03);
mesh03.position.set(0,0,0);
mesh03.rotation.set(-1.57,0,1.57);  

   var geometry04 = new THREE.CylinderGeometry(0.3,1.2,3,100,50,0,4);
var material04 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh04 = new THREE.Mesh(geometry04,material04);
//scene.add(mesh04);
mesh04.position.set(0,9,0);

var geometry05 = new RoundedBoxGeometry(0.6,1,0.6,15,6);
 var material05 = new THREE.MeshLambertMaterial({
    color: 0xED9F00, side: THREE.DoubleSide
 });
 var mesh05 = new THREE.Mesh(geometry05, material05);
  //scene.add(mesh05);
  mesh05.position.set(0,10.5,0);

    var geometry06 = new THREE.CylinderGeometry(1.8,1.8,4,100,50,0,4);
var material06 = new THREE.MeshBasicMaterial({
    color:0xFFFFFF, side:THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry06,material06);
//scene.add(mesh06);
mesh06.position.set(0,4,0);

var geometry07 = new THREE.CylinderGeometry(1.82,1.82,3.2,100,50,0,4);
var material07 = new THREE.MeshBasicMaterial({
    color:0xED9F00, side:THREE.DoubleSide
});
var mesh07 = new THREE.Mesh(geometry07,material07);
//scene.add(mesh07);
mesh07.position.set(0,4.2,0);


//caballito1
var geometry08 = new THREE.CylinderGeometry(1.2,0.8,3,100,50,0,4);
var material08 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh08 = new THREE.Mesh(geometry08,material08);
//scene.add(mesh08);
mesh08.position.set(5,1.5,0);

var geometry09 = new THREE.CircleGeometry(0.8,100);
var material09 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh09 = new THREE.Mesh(geometry09,material09);
//scene.add(mesh09);
mesh09.position.set(5,0,0);
mesh09.rotation.set(-1.57,0,1.57);  

var geometry10 = new THREE.CircleGeometry(1,100);
var material10 = new THREE.MeshBasicMaterial({
    color:0xED9F00, side:THREE.DoubleSide
});
var mesh10 = new THREE.Mesh(geometry10,material10);
//scene.add(mesh10);
mesh10.position.set(5,2.8,0);
mesh10.rotation.set(-1.57,0,1.57);  


//caballito 2
var geometry11 = new THREE.CylinderGeometry(1.2,0.8,3,100,50,0,4);
var material11 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh11 = new THREE.Mesh(geometry11,material11);
//scene.add(mesh11);
mesh11.position.set(-5,1.5,0);

var geometry12 = new THREE.CircleGeometry(0.8,100);
var material12 = new THREE.MeshBasicMaterial({
    color:0x785500, side:THREE.DoubleSide
});
var mesh12 = new THREE.Mesh(geometry12,material12);
//scene.add(mesh12);
mesh12.position.set(-5,0,0);
mesh12.rotation.set(-1.57,0,1.57);  

var geometry13 = new THREE.CircleGeometry(1,100);
var material13 = new THREE.MeshBasicMaterial({
    color:0xED9F00, side:THREE.DoubleSide
});
var mesh13 = new THREE.Mesh(geometry13,material13);
//scene.add(mesh13);
mesh13.position.set(-5,2.8,0);
mesh13.rotation.set(-1.57,0,1.57);  

var Caguama = new THREE.Group();
Caguama.add(mesh01,mesh02,mesh03,mesh04,mesh05,mesh06,mesh07,mesh08,mesh09,mesh10,mesh11,mesh12,mesh13);
Caguama.position.set(x,y,z);

return Caguama;
}