function Sun(xPos, yPos, zPos, intensity) {

    //


    // Lighting
    let sun = new THREE.DirectionalLight(0xffffff, intensity);
    sun.position.set( xPos, yPos, zPos);

    sun.shadow.mapSize.width = 512;
    sun.shadow.mapSize.height = 512;
    //
    // sun.shadow.camera.left = 500;
    // sun.shadow.camera.right = -

    //Set up shadow properties for the light
    // light.shadow.mapSize.width = 512; // default
    // light.shadow.mapSize.height = 512; // default
    sun.shadow.camera.near = 0.5; // default
    sun.shadow.camera.far = 50; // default

    sun.shadow.camera.left = 100;
    sun.shadow.camera.right = -100;
    sun.shadow.camera.top = 100;
    sun.shadow.camera.bottom = -100;

    sun.castShadow = true;

    return sun;

}