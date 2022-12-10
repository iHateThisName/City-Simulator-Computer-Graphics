function ground() {

    // Init PlaneGeometry object
    const geometry = new THREE.PlaneGeometry(80, 80);

    // Texture
    // Texture
    const texture = new THREE.TextureLoader().load( "static/textures/ground.jpg" );
    // assuming you want the texture to repeat in both directions:
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    // how many times to repeat in each direction; the default is (1,1),
    texture.repeat.set( 8, 8 );


    // Create material with color
    const material = new THREE.MeshLambertMaterial({
        color: 0x2a2b30,
        map: texture
    });

    // Create mesh with geo and material
    const plane = new THREE.Mesh(geometry, material);

    plane.rotateX(Math.PI / 2);
    //Turning it upside, so we only need to render one side of the plane
    plane.rotateY(Math.PI);
    // Making the plane slightly lower to not collide with the park, Grid helper and Axes helper
    plane.position.y = -0.1

    plane.receiveShadow = true;



    return plane

}