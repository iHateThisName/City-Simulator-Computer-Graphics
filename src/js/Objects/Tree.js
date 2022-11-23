function Tree() {

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );

    const leafDarkMaterial = new THREE.MeshBasicMaterial({color: 0x91E56E});
    const leafLightMaterial = new THREE.MeshBasicMaterial({color: 0xA2FF7A});
    const leafDarkDarkMaterial = new THREE.MeshLambertMaterial({color: 0x71B356});
    const stemMaterial = new THREE.MeshBasicMaterial({color: 0x7D5A4F});

    let stem = new THREE.Mesh(geometry, stemMaterial);
    stem.position.set( 0, 0, 0 );
    stem.scale.set( 0.3, 2.5, 0.3 );

    let firstLeaf = new THREE.Mesh(geometry, leafDarkMaterial);
    firstLeaf.position.set( 0, 1.6, 0.5 );
    firstLeaf.scale.set( 0.8, 0.8, 0.8 );

    let secondLeaf = new THREE.Mesh(geometry, leafDarkMaterial);
    secondLeaf.position.set( -0.2, 1.3, -0.4 );
    secondLeaf.scale.set( 0.7, 0.7, 0.7 );

    let thirdLeaf = new THREE.Mesh(geometry, leafDarkMaterial);
    thirdLeaf.position.set( 0, 1.7, -0.2);
    thirdLeaf.scale.set( 0.7, 0.7, 0.7 );

    let leafDark = new THREE.Mesh(geometry, leafDarkMaterial);
    leafDark.position.set( 0, 1.2, 0 );
    leafDark.scale.set( 1, 1, 1 );

    let leafLight = new THREE.Mesh(geometry, leafLightMaterial);
    leafLight.position.set( 0, 1.2, 0 );
    leafLight.scale.set( 1.1, 0.5, 1.1 );

    let ground = new THREE.Mesh(geometry, leafDarkDarkMaterial);
    ground.position.set( 0, -1, 0 );
    ground.scale.set( 2.4, 0.8, 2.4 );

    const tree = new THREE.Group();
    tree.add(leafDark);
    tree.add(leafLight);
    tree.add(firstLeaf);
    tree.add(secondLeaf);
    tree.add(thirdLeaf);
    tree.add(stem);

    tree.rotation.y = 1;
    tree.rotation.x = 0;

    tree.position.x = 0;

    return tree;

}