//let tree = Tree();
//let circle = Circle();
//let plane = Plane();

function Park(xPos, yPos, zPos) {

    const park = new THREE.Object3D();

    // The grass plane
    park.add(Plane(xPos,yPos,zPos))

    // Pit
    park.add(Circle(xPos,0.01,0))
    // park.add(Circle(xPos ,0.01,0.15))
    // park.add(Circle(xPos ,0.01,0.30))
    // park.add(Circle(xPos ,0.01,0.45))
    // park.add(Circle(xPos ,0.01,0.60))
    // park.add(Circle(xPos ,0.01,0.75))
    // park.add(Circle(xPos ,0.01,0.90))
    // park.add(Circle(xPos ,0.01,0.105))
    // park.add(Circle(xPos ,0.01,0.120))

    // The trees

    //Small tree
    park.add(Tree(xPos + 2, yPos,zPos))
    park.add(Tree(xPos + 2, yPos,+ 7))
    park.add(Tree(xPos + 3, yPos,zPos + 2))
    park.add(Tree(xPos - 2, yPos,zPos + 4))
    park.add(Tree(xPos + 3, yPos ,zPos - 7))
    park.add(Tree(xPos - 3, yPos ,zPos - 2))
    // Big tree
    park.add(Tree(xPos + 3, yPos + 1,zPos-2))
    park.add(Tree(xPos - 2, yPos + 1,zPos))
    park.add(Tree(xPos - 1, yPos + 1,zPos - 6))
    park.add(Tree(xPos - 2, yPos + 1,zPos + 7))


    return park;
}
