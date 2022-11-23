
function building(x, y, z, skyscraper) {// Init BoxGeometry object (rectangular cuboid)
    const buildingShape = new THREE.BoxGeometry(2, 3, 2);
    const roofGeo = new THREE.OctahedronGeometry(1.45, 0);
    

    const buildingMaterial = new THREE.MeshBasicMaterial({color: 0x36454F});
    const roofMaterial = new THREE.MeshBasicMaterial( {color: 0x80808} );


    let building = new THREE.Mesh(buildingShape, buildingMaterial);
    let cone = new THREE.Mesh( roofGeo, roofMaterial );
    
    const house = new THREE.Group();
    house.add(building);
    if(!skyscraper) {
        house.add(cone);
    }

    house.position.set(x, y, z);
    cone.position.y = 1.5;
    cone.rotation.y = Math.PI / 4;
    return house;

}
    

    
       
        
       
  
