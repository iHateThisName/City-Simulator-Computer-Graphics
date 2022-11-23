function Circle(xPos, yPos, zPos) {
    const geometry = new THREE.CircleGeometry( 1.5, 50 );

    const material = new THREE.MeshBasicMaterial( { color: 0x1b6fde } );

    const circle = new THREE.Mesh( geometry, material );

    material.side = THREE.DoubleSide;

    circle.rotation.x = Math.PI / 2;

    circle.position.y = yPos;
    circle.position.x = xPos;
    circle.position.z = zPos;

    return circle;
}