
export class Road {
    // constructor(xPos, zPos) {
    //     this.xPos = xPos;
    //     this.zPos = zPos;
    // }

    #_buildStraightRoad(length, orientInXAces, xPos, zPos) {

        if (orientInXAces) {
            this.geometry = new THREE.BoxGeometry(length, 0.1, 1);
        } else {
            this.geometry = new THREE.BoxGeometry(1, 0.1, length);
        }
        // Create material with color
        const material = new THREE.MeshBasicMaterial({color: 0x5A717A});
        // Create mesh with geo and material
        const road = new THREE.Mesh(this.geometry, material);

        if (orientInXAces) {
            road.position.x = xPos;

            if (zPos < 0) {
                road.position.z = zPos - 0.5;
            } else {
                road.position.z = zPos + 0.5;
            }
        } else {

            if (zPos < 0) {
                road.position.x = zPos - 0.5;
            } else {
                road.position.x = zPos + 0.5;
            }
            road.position.z = xPos;
        }
        return road;
    }

    renderRoadAroundPark(parkLength, parkWidth) {

        // Render Road South of the park
        const southRoad = this.#_buildStraightRoad(parkLength + 3, true, 0, (parkWidth / 2) + 0.5);
        // Render North
        const northRoad = this.#_buildStraightRoad(parkLength + 3, true, 0, - (parkWidth / 2) - 0.5);
        // Render West
        const westRoad = this.#_buildStraightRoad(parkWidth + 3, false, 0, - (parkLength / 2) - 0.5);
        // Render East
        const eastRoad = this.#_buildStraightRoad(parkWidth + 3, false, 0, (parkLength / 2) + 0.5);



        const parkRoad = new THREE.Object3D();
        parkRoad.add(southRoad);
        parkRoad.add(northRoad);
        parkRoad.add(westRoad);
        parkRoad.add(eastRoad);

        return parkRoad;
    }
}