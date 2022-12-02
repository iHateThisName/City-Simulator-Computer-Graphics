
function firstTreeCube() {// Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material with color
    const material = new THREE.MeshPhongMaterial({color: 0x0000ff});

// Create mesh with geo and material
    const cube = new THREE.Mesh(geometry, material);

    cube.rotateY(Math.PI / 4);

    //geometry.receiveShadow = true;

    cube.castShadow = true;


    cube.position.set(0,2,0)


    return cube;
}