function Plane(xPos, yPos, zPos) {
    // Init PlaneGeometry object 
    const geometry = new THREE.PlaneGeometry( 8 , 18);

    /// TEXTURES
    const parkTexture = new THREE.TextureLoader().load( "http://i748.photobucket.com/albums/xx127/GPL_Texture_Repository/Grass/TundraGrass3.png" );

    // assuming you want the texture to repeat in both directions:
    parkTexture.wrapS = THREE.RepeatWrapping;
    parkTexture.wrapT = THREE.RepeatWrapping;

    // how many times to repeat in each direction; the default is (1,1),
    parkTexture.repeat.set( 8, 8 );

    // Create material with color
    const material = new THREE.MeshLambertMaterial( {color: 0x0b520d, side: THREE.DoubleSide, map: parkTexture} );



    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);

    plane.rotateX(Math.PI / 2);

    plane.position.set(xPos,yPos,zPos);

    plane.receiveShadow = true;

    return plane;
}