function Tree(xPos, yPos, zPos) {

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );

    /// TEXTURES
    const texture = new THREE.TextureLoader().load( "http://i748.photobucket.com/albums/xx127/GPL_Texture_Repository/Grass/TundraGrass3.png" );
    const stemTexture = new THREE.TextureLoader().load( "static/textures/treestem.png" );

    const leafDarkMaterial = new THREE.MeshLambertMaterial({color: 0x91E56E, map: texture});
    const leafLightMaterial = new THREE.MeshLambertMaterial({color: 0xA2FF7A, map: texture});
    const stemMaterial = new THREE.MeshLambertMaterial({color: 0x7D5A4F, map: stemTexture});

    let stem = new THREE.Mesh(geometry, stemMaterial);
    stem.position.set( 0, 0, 0 );
    stem.scale.set( 0.3, 2.5, 0.3 );

    let firstLeaf = new THREE.Mesh(geometry, leafDarkMaterial);
    firstLeaf.position.set( 0, 1.6, 0.3 );
    firstLeaf.scale.set( 0.8, 0.8, 0.5 );

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
    leafLight.position.set( 0, 1.2, 0.1 );
    leafLight.scale.set( 1.3, 0.5, 1.1 );

    stem.castShadow = true
    leafLight.castShadow = true;
    leafDark.castShadow = true;
    firstLeaf.castShadow = true;
    secondLeaf.castShadow = true;
    thirdLeaf.castShadow = true;



    const tree = new THREE.Object3D();
    tree.add(leafDark);
    tree.add(leafLight);
    tree.add(firstLeaf);
    tree.add(secondLeaf);
    tree.add(thirdLeaf);
    tree.add(stem);


    tree.rotation.y = 0;
    tree.rotation.x = 0;

    tree.position.x = xPos;
    tree.position.y = yPos;
    tree.position.z = zPos;

    tree.receiveShadow.enabled = true;
    tree.castShadow = true;


    return tree;

}
