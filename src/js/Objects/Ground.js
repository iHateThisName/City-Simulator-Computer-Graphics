function ground() {

    // Init PlaneGeometry object
    const geometry = new THREE.PlaneGeometry(20, 20);

    // Create material with color
    const material = new THREE.MeshBasicMaterial({
        color: 0x2a2b30,
    });

    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);

    plane.rotateX(Math.PI / 2);
    //Turning it upside, so we only need to render one side of the plane
    plane.rotateY(Math.PI);
    // Making the plane slightly lower to not collide with the park, Grid helper and Axes helper
    plane.position.y = -0.1

    return plane

}