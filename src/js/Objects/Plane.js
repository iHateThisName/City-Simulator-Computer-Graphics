function Plane(xPos, yPos, zPos) {
    // Init PlaneGeometry object 
    const geometry = new THREE.PlaneGeometry( 8 , 18);

    // Create material with color
    const material = new THREE.MeshBasicMaterial( {color: 0x0b520d, side: THREE.DoubleSide} );

    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);

    plane.rotateX(Math.PI / 2);

    plane.position.set(xPos,yPos,zPos);

    return plane;
}