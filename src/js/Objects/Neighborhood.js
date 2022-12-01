function Neighborhood(x, height, z, skyscraper, futuristic) {
    
    const neighborhood = new THREE.Object3D();

    neighborhood.add(HouseField(x, z));
    if(!futuristic) {
    neighborhood.add(building(x, Math.random()*3, z, skyscraper, true));
    neighborhood.add(building(x, Math.random()*3, z+3, skyscraper));
    neighborhood.add(building(x+3, Math.random()*3, z, true));
    neighborhood.add(building(x+3, Math.random()*3, z+3, skyscraper));
    }
    else {
       
    }
    return neighborhood;

    function HouseField(x, z) {
        // Init PlaneGeometry object 
        const geometry = new THREE.BoxGeometry(7, 0, 7);
    
        // Create material with color
        const material = new THREE.MeshBasicMaterial( {color: 0x808080, side: THREE.DoubleSide} );
    
        // Create mesh with geo and material
        const plane = new THREE.Mesh(geometry, material);
    
        plane.position.set(x+ 1.5, 0.1, z + 1.5);

    
        return plane;
    }

}