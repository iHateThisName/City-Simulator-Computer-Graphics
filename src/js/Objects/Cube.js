

function firstTreeCube() {// Init BoxGeometry object (rectangular cuboid)
    const geometry = new THREE.BoxGeometry(1, 1, 1);

// Create material with color
    const material = new THREE.MeshBasicMaterial({color: 0x0000ff});

// Create mesh with geo and material
    const cube = new THREE.Mesh(geometry, material);

    cube.rotateY(Math.PI / 4);

    return cube;
}