import './style.css'
import * as THREE from 'https://cdn.skypack.dev/three@0.128.0;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(
    canvas: document.querySelector('#bg'),
);

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

const geometry = new THREE.TetrahedronGeometry(4, 0);
const material = new THREE.MeshBasicMaterial({color: 0xFF6333, wireframe: true});

const prizma = new THREE.Mesh(geometry, material);

scene.add(prizma)

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate()
