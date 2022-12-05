
export class Road {

    _buildStraightRoad(length, alongX, xPos, zPos) {

        this.geometry = new THREE.BoxGeometry(length, 0.1, 1);


        // Create material with color
        const material = new THREE.MeshLambertMaterial({color: 0x5A717A});
        // Create mesh with geo and material
        const road = new THREE.Mesh(this.geometry, material);



        if (alongX) {
            // const x = length / 2;
            road.position.x = xPos;
            road.position.z = zPos;
        } else {
            // const z = length / 2;
            road.position.x = xPos;
            road.position.z = zPos;
            road.rotateY(Math.PI / 2);
        }

        road.receiveShadow = true;
        return road;
    }

    renderRoadAroundSquare(roadLength, roadWith, xPos, zPos) {

        let distanceFromPark = 0;

        // Render Road South of the park
        if (roadLength < 0) {
            distanceFromPark = -1;
        } if (roadLength > 0) {
            distanceFromPark = 1;
        }

        const xDirectionValue = (roadLength / 2) + distanceFromPark;
        const zDirectionValue = (roadWith / 2) + distanceFromPark;


        // Render North
        const positiveZ = this._buildStraightRoad(roadWith + 3, false, xDirectionValue, 0);
        // Render South
        const negativeZ = this._buildStraightRoad(roadWith + 3, false,  -xDirectionValue, 0);
        // Render East
        const positiveX = this._buildStraightRoad(roadLength + 1, true, 0, zDirectionValue, 0);
        // Render West
        const negativeX = this._buildStraightRoad(roadLength + 1, true, 0, -zDirectionValue, 0);


        const parkRoad = new THREE.Object3D();
        parkRoad.add(positiveZ);
        parkRoad.add(negativeZ);
        parkRoad.add(positiveX);
        parkRoad.add(negativeX);

        parkRoad.position.x = xPos;
        parkRoad.position.z = zPos;

        return parkRoad;
    }
}