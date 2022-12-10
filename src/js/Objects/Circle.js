function Circle(xPos, yPos, zPos) {
    const geometry = new THREE.CircleGeometry( 1.5, 50 );

    /// TEXTURES
    const texture = new THREE.TextureLoader().load( "static/textures/water.png" );

    // assuming you want the texture to repeat in both directions:
    // parkTexture.wrapS = THREE.RepeatWrapping;
    // parkTexture.wrapT = THREE.RepeatWrapping;
    //
    // // how many times to repeat in each direction; the default is (1,1),
    // parkTexture.repeat.set( 8, 8 );

    const material = new THREE.MeshLambertMaterial( { color: 0x1b6fde, map: texture } );

    const circle = new THREE.Mesh( geometry, material );

    material.side = THREE.DoubleSide;

    circle.rotation.x = Math.PI / 2;

    circle.position.y = yPos;
    circle.position.x = xPos;
    circle.position.z = zPos;

    circle.receiveShadow = true;


    return circle;
}