import * as THREE from 'three';

const scene = new THREE.Scene();
const cam = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

const geometry = new THREE.BoxGeometry(1,1,1);
const mat = new THREE.MeshBasicMaterial({color: 0xff0000});
const cube = new THREE.Mesh(geometry, mat);
scene.add(cube);
cam.position.z = 5;
cam.position.y = 1;

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.y += 0.001;
    renderer.render(scene, cam);
}

animate();
