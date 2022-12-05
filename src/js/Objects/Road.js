
export class Road {
    constructor(parkLength, parkWidth) {
        this.parkLength = parkLength;
        this.parkWidth = parkWidth;
    }

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

    renderRoadAroundPark() {

        let distanceFromPark = 0;

        // Render Road South of the park
        if (this.parkLength < 0) {
            distanceFromPark = -1;
        } if (this.parkLength > 0) {
            distanceFromPark = 1;
        }

        const xDirectionValue = (this.parkLength / 2) + distanceFromPark;
        const zDirectionValue = (this.parkWidth / 2) + distanceFromPark;


        // Render North
        const positiveZ = this._buildStraightRoad(this.parkWidth + 20, false, xDirectionValue, 0);
        // Render South
        const negativeZ = this._buildStraightRoad(this.parkWidth + 20, false,  -xDirectionValue, 0);
        // Render East
        const positiveX = this._buildStraightRoad(this.parkLength + 20, true, 0, zDirectionValue, 0);
        // Render West
        const negativeX = this._buildStraightRoad(this.parkLength + 20, true, 0, -zDirectionValue, 0);


        const parkRoad = new THREE.Object3D();
        parkRoad.add(positiveZ);
        parkRoad.add(negativeZ);
        parkRoad.add(positiveX);
        parkRoad.add(negativeX);

        parkRoad.position.y = -0.1
        return parkRoad;
    }
}