import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';

// Init scene
const scene = new THREE.Scene();

// Init camera (PerspectiveCamera)
const camera = new THREE.PerspectiveCamera
(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// Init renderer
const renderer = new THREE.WebGLRenderer({antialias: true});

// Set size (whole window)
renderer.setSize(window.innerWidth, window.innerHeight);

// Render to canvas element
document.body.appendChild(renderer.domElement);

// Add to scene
//scene.add(firstTreeCube());
scene.add(Plane());
scene.add(Tree());
scene.add(building(2, 0, 4));

//scene.add(building(0, -4));

//We can also do const cube = firstTreeCube()

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);

// Position camera
camera.position.z = 8;
camera.position.y = 3;

const controls = new OrbitControls(
    camera, renderer.domElement);



// Draw the scene every time the screen is refreshed
function animate() {
    requestAnimationFrame(animate);

    // Rotate cube
    // cube.rotation.x += 0.005;
    // cube.rotation.y += 0.005;
    controls.update();

    renderer.render(scene, camera);
}

function onWindowResize() {
    // Camera frustum aspect ratio
    camera.aspect = window.innerWidth / window.innerHeight;
    // After making changes to aspect
    camera.updateProjectionMatrix();
    // Reset size
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

animate();