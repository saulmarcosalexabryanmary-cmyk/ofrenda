 import* as THREE from "../js/three.module.js";

export default function E03({x,y,z}){

//cuadro 1
var geometry01 = new THREE.BoxGeometry(120,15,150,2,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0x533B4D, side:THREE.DoubleSide
});

var mesh01 = new THREE.Mesh(geometry01,material01);
mesh01.position.set(50,-8,0); 
//scene.add(mesh01); 

//cuadro2
      var geometry01 = new THREE.BoxGeometry(100,15,120,2,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0x6B3F69, side:THREE.DoubleSide
});

var mesh02 = new THREE.Mesh(geometry01,material01);
mesh02.position.set(50,6,0);
//scene.add(mesh02);

//cuadro3
var geometry01 = new THREE.BoxGeometry(80,15,90,2,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0x8D5F8C, side:THREE.DoubleSide
});

var mesh03 = new THREE.Mesh(geometry01,material01);
mesh03.position.set(50,20,0);
//scene.add(mesh03);

//cuadro 4
var geometry01 = new THREE.BoxGeometry(60,15,60,2,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0xA376A2, side:THREE.DoubleSide
});

var mesh04 = new THREE.Mesh(geometry01,material01);
mesh04.position.set(50,35,0);
//scene.add(mesh04);

//cuadro5
var geometry01 = new THREE.BoxGeometry(40,15,30,2,3,2);
var material01 = new THREE.MeshLambertMaterial({
    color:0xDDC3C3, side:THREE.DoubleSide
});

var mesh05 = new THREE.Mesh(geometry01,material01);
mesh05.position.set(50,50,0);
//scene.add(mesh05);

var Piramide = new THREE.Group();
Piramide.add(mesh01,mesh02,mesh03,mesh04,mesh05);
Piramide.position.set(x,y,z);

return Piramide;
}
