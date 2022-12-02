function Sun(xPos, yPos, intensity) {
    // Lighting
    let sun = new THREE.DirectionalLight(0xffffff, intensity);
    sun.position.set( xPos, yPos, 0);

    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.left = 50;
    sun.shadow.camera.right = -50;

    sun.castShadow = true;

    return sun;

}