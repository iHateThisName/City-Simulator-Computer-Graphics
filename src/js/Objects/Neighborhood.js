

function Neighborhood(x, height, z) {
    
    const neighborhood = new THREE.Object3D();

    neighborhood.receiveShadow = true;
    neighborhood.castShadow = true;

    neighborhood.add(HouseField(x, z));

    neighborhood.add(building(x-0.5, Math.random()*3, z-0.5, true));
    neighborhood.add(building(x-0.5, Math.random()*3, z+3.5, false, true));
    neighborhood.add(building(x+3.5, Math.random()*3, z-0.5, true)); 
    neighborhood.add(building(x+3.5, Math.random()*3, z+3.5));
    
    return neighborhood;

    function HouseField(x, z) {
        // Init PlaneGeometry object 
        const geometry = new THREE.BoxGeometry(8, 0, 8);
    
        // Create material with color
        const material = new THREE.MeshLambertMaterial( {color: 0x808080, side: THREE.DoubleSide} );

        // Create mesh with geo and material
        const plane = new THREE.Mesh(geometry, material);
    
        plane.position.set(x+ 1.5, -0.1, z + 1.5);



        plane.receiveShadow = true;

    
        return plane;
    }
}