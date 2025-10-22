   import* as THREE from "../js/three.module.js";

export default function E08({x,y,z}){
//cuadro
      var geometry05 = new THREE.BoxGeometry(30,40,6,3,3,2);
var material05 = new THREE.MeshLambertMaterial({
    color:0xC78A3B, side:THREE.DoubleSide
});
var mesh06 = new THREE.Mesh(geometry05,material05);
mesh06.position.set(8,15,0);
//scene.add(mesh06);

//parte de foto
var geometry05 = new THREE.BoxGeometry(20,30,3,3,3,2);
var texture05= new THREE.TextureLoader().load("./image/sg.jpg");
var material05= new THREE.MeshLambertMaterial({map:texture05});
   
var mesh05 = new THREE.Mesh(geometry05,material05);
mesh05.position.set(8,15,3);
//scene.add(mesh05);

var Cuadro4 = new THREE.Group();
Cuadro4.add(mesh06,mesh05);
Cuadro4.position.set(x,y,z);

return Cuadro4;
}

