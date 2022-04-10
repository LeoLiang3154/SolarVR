/* global THREE */
//Declare Systen Variables


var currentScene;
var camera;
var renderer = new THREE.WebGLRenderer();
var controls;

//Setup the 3 main components: scene, camera, renderer
function setScene() {
    currentScene = new THREE.Scene();
    var ratio = window.innerWidth / window.innerHeight;

    camera = new THREE.PerspectiveCamera(45, ratio, 0.1, 99999999999999999);

    camera.position.set(149499000, 0, 0);
    camera.lookAt(0, 0, 5);
    //console.log("Current Camera Position: " + camera.position.X);



    controls = new THREE.FirstPersonControls(camera);
    controls.enabled= true;
    controls.lookSpeed = 0.02;
    controls.movementSpeed = 100000;
    controls.noFly = false;
    controls.constrainVertical = true;
    controls.verticalMin = 1.0;
    controls.verticalMax = 2.0;
    controls.lon = 0;
    controls.lat = 0;

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

//Resize the scene and update the camera aspect to the screen ration
var resizeScene = function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.render(currentScene, camera);
};

// function clearScene() {
//     for (let i = currentScene.children.length - 1; i >= 0; i--)
//         if (currentScene.children[i].type === "Mesh")
//             currentScene.remove(currentScene.children[i]);
// }





