function Sun(xPos, yPos, zPos, intensity) {

    //


    // Lighting
    let sun = new THREE.DirectionalLight(0xffffff, intensity);
    // sun.position.set( xPos, yPos, zPos);
    sun.position.set( xPos, yPos, zPos);

    // sun.shadow.mapSize.width = 512;
    // sun.shadow.mapSize.height = 512;
    //
    // sun.shadow.camera.near = 0.5; // default
    // sun.shadow.camera.far = 50; // default
    //
    // sun.shadow.camera.left = 100;
    // sun.shadow.camera.right = -100;
    // sun.shadow.camera.top = 100;
    // sun.shadow.camera.bottom = -100;
    //
    // sun.castShadow = true;

    sun.castShadow = true;
    // sun.shadowMapWidth = 2048;
    // sun.shadowMapHeight = 2048;
    sun.shadow.camera.left = 20;
    sun.shadow.camera.right = -20;
    sun.shadow.camera.top = 20;
    sun.shadow.camera.bottom = -20;
    // sun.shadowCameraFar = 500;
    sun.shadowBias = -0.0001;

    return sun;

}