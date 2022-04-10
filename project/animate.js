/* global THREE, cube, scene, camera, renderer */

let clock = new THREE.Clock();

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();

function animate() {
    renderer.render(currentScene, camera);
    controls.update(clock.getDelta());
    //console.log(camera.position);



    raycaster.setFromCamera( pointer, camera);
    const intersects = raycaster.intersectObjects(currentScene.children );
    //var distanceToPlanets = camera.position.distanceTo( yourObject.position );
    for ( let i = 0; i < intersects.length; i ++ ) {

		var distanceToPlanets = camera.position.distanceTo(intersects[i].object.position);
        
        console.log("Current distance to planet: " + distanceToPlanets);

        var planetName = intersects[i].object.name;
        if(distanceToPlanets <= 30000)
        {
            controls.movementSpeed = 3000;
        }

        if(distanceToPlanets <= 20000)
        {
            controls.movementSpeed = 3000;
        }
        if(distanceToPlanets <= 10000)
        {
            controls.movementSpeed = 500;

        }
        if(distanceToPlanets <= 6500)
        {
            controls.movementSpeed = 0;
            switch(planetName)
            {
                    case Planets.Earth:
                        console.log(camera.position);
                        currentScene = getEarthScene();
    
                        var ratio = window.innerWidth / window.innerHeight;
                        camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 1000);
                        camera.position.set(10, 10, 15);
                        camera.lookAt(0, 0, 5);
    
                        console.log("Current Camera Position: " + camera.position);

    
                        renderer.render(currentScene,camera);

                        console.log("Replacing to earth scene");
                        console.log(camera.position);
                        break;
                    
                
            }
        }
        
	}
    
    requestAnimationFrame(animate);
}
