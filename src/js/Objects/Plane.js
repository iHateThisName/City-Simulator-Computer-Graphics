function Plane() {
    // Init PlaneGeometry object 
    const geometry = new THREE.PlaneGeometry( 1, 1 );

    // Create material with color
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );

    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);


    return plane;
}