
function building(x, y, z, skyscraper) {// Init BoxGeometry object (rectangular cuboid)
    const buildingShape = new THREE.BoxGeometry(2, 3, 2);
    const roofGeo = new THREE.OctahedronGeometry(1.45, 0);

    const buildingMaterial = new THREE.MeshBasicMaterial({color: getRandomColor()});
    const roofMaterial = new THREE.MeshBasicMaterial( {color: 0x1C1C1C} );


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

    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i <3; i++) {
          color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
      }
      
      
      
     

}
    

    
       
        
       
  
