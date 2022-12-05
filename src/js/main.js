import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
import {Road} from "./Objects/Road.js";
// Init scene
const scene = new THREE.Scene();

var mapOfNeighborhood = new Map();
var mapOfBuilding = new Map();

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

scene.background = skybox;

// Add to scene
const road = new Road(8,18);
scene.add(ground());
scene.add(Park(0, 0, 0));
scene.add(road.renderRoadAroundPark());

Neighborhoods();
Buildings();

document.getElementById("deleteButton").addEventListener("click", () => deleteNeighborhood());
//Deletes a Neighborhood.
function deleteNeighborhood() {
    var i = 0;
    let neighborhoodInput = document.getElementById("neighborhoodID");
    i = parseInt(neighborhoodInput.value);
    let nh = mapOfNeighborhood.get(i);
    if(nh != null){
        scene.remove(nh);
    }else{
        alert("There is no disctrict with this id ");
    }
}

document.getElementById("addButton").addEventListener("click", () => addNeighborhood());
//Adds the Neighborhood. 
function addNeighborhood() {
    var i = 0;
    let neighborhoodInput = document.getElementById("neighborhoodID");
    i = parseInt(neighborhoodInput.value);
    let nh = mapOfNeighborhood.get(i);
        scene.add(nh);
}

function Neighborhoods() {

    mapOfNeighborhood.set(1, Neighborhood(8.5, 2, -16.5)); 
    mapOfNeighborhood.set(2, Neighborhood(8.5, 2, -6.5));
    mapOfNeighborhood.set(3, Neighborhood(8.5, 2, 3.5));
    mapOfNeighborhood.set(4, Neighborhood(8.5, 2, 13.5));
    mapOfNeighborhood.set(5, Neighborhood(-1.5, 2, 13.5));
    mapOfNeighborhood.set(6, Neighborhood(-11.5, 2, 13.5));
    mapOfNeighborhood.set(7, Neighborhood(-11.5, 2, 3.5));
    mapOfNeighborhood.set(8, Neighborhood(-11.5, 2, -6.5));
    mapOfNeighborhood.set(9, Neighborhood(-11.5, 2, -16.5));
    mapOfNeighborhood.set(10, Neighborhood(-1.5, 2, -16.5));

    let values = mapOfNeighborhood.values();
    for(let nh of values){
        scene.add(nh);
    } 
}

function Buildings(x, z) {
    mapOfBuilding.set(1, building(x-0.5, Math.random()*3, z-0.5, true));
    mapOfBuilding.set(2, building(x-0.5, Math.random()*3, z+3.5, false, true));
    mapOfBuilding.set(3, building(x+3.5, Math.random()*3, z-0.5, true));
    mapOfBuilding.set(4, building(x+3.5, Math.random()*3, z-0.5, true));  

    let values = mapOfBuilding.values();
    for(let building of values) {
        scene.add(building);
    }
}

//We can also do const cube = firstTreeCube()

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(20);
scene.add(axesHelper);

// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(40, 40);
scene.add(gridHelper);

// Position camera
camera.position.z = 20;
camera.position.y = 10;

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