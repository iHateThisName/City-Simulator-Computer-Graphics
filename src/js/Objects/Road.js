
export class Road {
    geometry;
    constructor(xPos, zPos) {
        // this.length = length;
        this.xPos = xPos;
        this.zPos = zPos;
    }

    buildStraightRoad(length, orientInXAces) {

        if (orientInXAces) {
            this.geometry = new THREE.BoxGeometry(length, 0.1, 1);
        } else {
            this.geometry = new THREE.BoxGeometry(1, 0.1, length);
        }
        // Create material with color
        const material = new THREE.MeshBasicMaterial({color: 0x5A717A});
        // Create mesh with geo and material
        const road = new THREE.Mesh(this.geometry, material);

        // road.position.set(this.xPos - 12, this.zPos);
        // road.position.x = this.xPos;

        if (orientInXAces) {
            road.position.x = this.xPos;
            road.position.z = this.zPos + 0.5;
        } else {
            road.position.x = this.zPos + 0.5;
            road.position.z = this.xPos;
        }
        return road;
    }
}