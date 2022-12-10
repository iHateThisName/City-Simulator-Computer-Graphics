
function building(x, height, z, skyscraper, futuristic) {

  var mapOfBuilding = new Map();
  
    const buildingShape = new THREE.BoxGeometry(2, 6, 2);
    const roofGeo = new THREE.OctahedronGeometry(1.45, 0);
    const futuristicHouse = new THREE.CylinderGeometry(1,1,6,20);

    const buildingTexture = new THREE.TextureLoader().load( "static/textures/building.jpg" );
    const roofTexture = new THREE.TextureLoader().load( "static/textures/roof.jpg" );


    const buildingMaterial = new THREE.MeshLambertMaterial({color: getRandomColor(), map: buildingTexture});
    const roofMaterial = new THREE.MeshLambertMaterial( {color: 0x1C1C1C, map: roofTexture} );

    
    let building = new THREE.Mesh(buildingShape, buildingMaterial);
    let cone = new THREE.Mesh( roofGeo, roofMaterial );
    let futuristicBuilding = new THREE.Mesh(futuristicHouse, buildingMaterial)
    
    const house = new THREE.Group();
    if (futuristic) {
      house.add(futuristicBuilding);
    } else {
      house.add(building);
      if(!skyscraper) {
        house.add(cone);
    }
    }

    building.castShadow = true;
    cone.castShadow = true;
    futuristicBuilding.castShadow = true;
    house.receiveShadow = true;


    house.position.set(x, height, z);
    cone.position.y = 3;
    cone.rotation.y = Math.PI / 4;
    return house;

    function Buildings() {
      mapOfBuilding.set(1, building());
  }
  

    
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i <3; i++) {
          color += letters[Math.floor(Math.random() * 10)];
        }
        return color;
      }
      
      
      
     

}
    

    
       
        
       
  
