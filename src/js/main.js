import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import {Road} from "./Objects/Road.js";
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


// Init skybox background


var skybox = new THREE.CubeTextureLoader().load([
    "static/skybox/right.bmp",
    "static/skybox/left.bmp",
    "static/skybox/up.bmp",
    "static/skybox/down.bmp",
    "static/skybox/front.bmp",
    "static/skybox/back.bmp"

]);

//scene.background = skybox;

// Add to scene
/*const road = new Road(9,18);
scene.add(ground());
scene.add(Park(0, 0, 0));
//Left side of the park
scene.add(road.renderRoadAroundPark());
scene.add(Neighborhood(8.5, 2, -16.5));
scene.add(Neighborhood(8.5, 2, -6.5));
scene.add(Neighborhood(8.5, 2, 3.5));
scene.add(Neighborhood(8.5, 2, 13.5));
//West side of the park
scene.add(Neighborhood(-11.5, 2, -16.5));
scene.add(Neighborhood(-11.5, 2, -6.5));
scene.add(Neighborhood(-11.5, 2, 3.5));
scene.add(Neighborhood(-11.5, 2, 13.5));
//North side
scene.add(Neighborhood(-1.5, 2, 13.5));
//South side
scene.add(Neighborhood(-1.5, 2, -16.5));*/
scene.add(firstTreeCube());
//scene.add(ground());

// set up ground
const groundGeometry = new THREE.BoxGeometry(16, 0.5, 16);
const groundMaterial = new THREE.MeshPhongMaterial({ color: 0xfafafa });
const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
groundMesh.receiveShadow = true;
groundMesh.position.y = -2;
scene.add(groundMesh);


//We can also do const cube = firstTreeCube()

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(40, 40);
//scene.add(gridHelper);

// Position camera
camera.position.z = 20;
camera.position.y = 10;

const controls = new OrbitControls(
    camera, renderer.domElement);


// Lighting
let sun = new THREE.DirectionalLight(0xff0040, 0.5);
sun.position.set( 2, 2, 0 );
const sunhelper = new THREE.DirectionalLightHelper(sun, 3);

let ambient = new THREE.AmbientLight(0xff0040, 0.5);
ambient.position.set( 20, 20, 20);

sun.castShadow = true;
ambient.castShadow = true;

sun.shadow.mapSize = new THREE.Vector2(512, 512)
sun.shadow.camera.near = -5;
sun.shadow.camera.far = 10;


scene.add(new THREE.CameraHelper(sun.shadow.camera));

scene.add(sun);
scene.add(sunhelper);
scene.add(ambient);


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