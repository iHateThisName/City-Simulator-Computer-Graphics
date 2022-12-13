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
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;

// sky
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.5;
document.body.appendChild(renderer.domElement);

// Set size (whole window)
renderer.setSize(window.innerWidth, window.innerHeight);

// Lights
let ambient = new THREE.AmbientLight(0xffffff, 1);
ambient.position.set( 0, 0, 0);
// // ambient.castShadow = true;
scene.add(ambient);

/// Sun
let elevation = 1;
let azimuth = 0.25;
let sky, sunSphere;

function initSky() {
    // Add Sky
    sky = new THREE.Sky();
    sky.scale.setScalar( 450000 );
    scene.add(sky);

    // Add Sun Helper
    sunSphere = new THREE.Mesh(
        new THREE.SphereBufferGeometry( 20000, 16, 8 ),
        new THREE.MeshBasicMaterial( { color: 0xffffff } )
    );

    sunSphere.position.y = - 700000;
    sunSphere.visible = true;
    scene.add(sunSphere);

    /// GUI
    let effectController = {
        turbidity: 10,
        rayleigh: 2,
        mieCoefficient: 0.005,
        mieDirectionalG: 0.8,
        luminance: 0.5,
        inclination: elevation, //1.085, //ele, // 0.8985033172272991, // elevation / inclination
        azimuth: azimuth, //0.97, //azi, // 0.740544002807376, // Facing front,
        sun: false
    };

    // sun
    let sun = new Sun(0,0,0,0.5)

    const helper = new THREE.CameraHelper( sun.shadow.camera );
    scene.add( helper );
    scene.add(sun);

    let distance = 30;

    function guiChanged() {

        let uniforms = sky.material.uniforms;
        uniforms["turbidity"].value = effectController.turbidity;
        uniforms["rayleigh"].value = effectController.rayleigh;
        uniforms["mieCoefficient"].value = effectController.mieCoefficient;
        uniforms["mieDirectionalG"].value = effectController.mieDirectionalG;

        //    var theta = Math.PI * ( effectController.inclination - 0.5 );
        //    var phi = 2 * Math.PI * ( effectController.azimuth - 0.5 );

        let theta = Math.PI * (effectController.inclination);
        let phi = 2 * Math.PI * (effectController.azimuth);

        // var theta = Math.PI * ( ele3js - 0.5 );
        //    var phi = 2 * Math.PI * ( azi3js - 0.5 );

        sunSphere.position.x = distance * Math.cos(phi);
        sunSphere.position.y = distance * Math.sin(phi) * Math.sin(theta);
        sunSphere.position.z = distance * Math.sin(phi) * Math.cos(theta);

        //sun
        sun.position.set(sunSphere.position.x, sunSphere.position.y, sunSphere.position.z);


        sunSphere.visible = effectController.sun;

        uniforms["sunPosition"].value.copy(sunSphere.position);

        renderer.render( scene, camera );

    }

    let gui = new dat.GUI();
    gui.add(effectController, "inclination", 0, 1, 0.0001 ).onChange(guiChanged);
    gui.add(effectController, "azimuth", 0, 1, 0.0001 ).onChange(guiChanged);
    guiChanged();
}


// Add to scene
const road = new Road();
scene.add(ground());
scene.add(Park(0, 0, 0));
scene.add(road.renderRoadAroundSquare(8, 18, 0, 0));



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
    scene.add(road.renderRoadAroundSquare(8, 8, 10, -15));
    mapOfNeighborhood.set(2, Neighborhood(8.5, 2, -6.5));
    scene.add(road.renderRoadAroundSquare(8, 8, 10, -5));
    mapOfNeighborhood.set(3, Neighborhood(8.5, 2, 3.5));
    scene.add(road.renderRoadAroundSquare(8, 8, 10, 5));
    mapOfNeighborhood.set(4, Neighborhood(8.5, 2, 13.5));
    scene.add(road.renderRoadAroundSquare(8, 8, 10, 15));
    mapOfNeighborhood.set(5, Neighborhood(-1.5, 2, 13.5));
    scene.add(road.renderRoadAroundSquare(8, 8, 0, 15));
    mapOfNeighborhood.set(6, Neighborhood(-11.5, 2, 13.5));
    scene.add(road.renderRoadAroundSquare(8, 8, -10, 15));
    mapOfNeighborhood.set(7, Neighborhood(-11.5, 2, 3.5));
    scene.add(road.renderRoadAroundSquare(8, 8, -10, 5));
    mapOfNeighborhood.set(8, Neighborhood(-11.5, 2, -6.5));
    scene.add(road.renderRoadAroundSquare(8, 8, -10, -5));
    mapOfNeighborhood.set(9, Neighborhood(-11.5, 2, -16.5));
    scene.add(road.renderRoadAroundSquare(8, 8, -10, -15));
    mapOfNeighborhood.set(10, Neighborhood(-1.5, 2, -16.5));
    scene.add(road.renderRoadAroundSquare(8, 8, 0, -15));


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
// scene.add(gridHelper);

// Position camera
camera.position.z = 20;
camera.position.y = 10;

const controls = new OrbitControls(
    camera, renderer.domElement);

// scene.add(sun);
scene.add(ambient);
//scene.add(groundMesh);



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
initSky();


