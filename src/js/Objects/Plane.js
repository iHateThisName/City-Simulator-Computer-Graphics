function Plane() {
    // Init PlaneGeometry object 
    const geometry = new THREE.PlaneGeometry( 12, 12 );

    // Create material with color
    const material = new THREE.MeshBasicMaterial( {color: 0x0b520d, side: THREE.DoubleSide} );

    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);

    plane.rotateX(Math.PI / 2);

    return plane;
}