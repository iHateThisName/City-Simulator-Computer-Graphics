function Neighborhood(x, y, z) {
    
    const neighborhood = new THREE.Object3D();

    neighborhood.add(HouseField(x, y, z));

    neighborhood.add(building(x, 1, z, false));
    neighborhood.add(building(x, 0, z+3, false));
    neighborhood.add(building(x+3, 0, z, false));
    neighborhood.add(building(x+3, 0, z+3, false));

    return neighborhood;

    function HouseField(x, y, z) {
        // Init PlaneGeometry object 
        const geometry = new THREE.BoxGeometry(7, 0, 7);
    
        // Create material with color
        const material = new THREE.MeshBasicMaterial( {color: 0x808080, side: THREE.DoubleSide} );
    
        // Create mesh with geo and material
        const plane = new THREE.Mesh(geometry, material);
    
        plane.position.set(x+ 1.5, y - 2, z + 1.5);

    
        return plane;
    }

}