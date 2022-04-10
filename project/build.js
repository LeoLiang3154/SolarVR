/* global THREE, scene, renderer, camera */


//Load models from local file: .ply
const loader = new THREE.JSONLoader();
var ambientlight;
var cameralight;
var floor = null;
var mesh = null;
const planetsOfSolar = new Array();

function createSinglePlanet(radius, hlines, vlines, color, englishName){
    var geometry = new THREE.SphereGeometry(radius, hlines, vlines);
    if (englishName == "Earth")
    {
        var getTextureFile = "texture/"+ englishName + ".jpg"
        var texture = new THREE.TextureLoader().load(getTextureFile);
        var material = new THREE.MeshBasicMaterial(
            {
                map: texture
            }
        )

        var planet = new THREE.Mesh(geometry, material);
        planet.name = englishName;
        return planet;
    }
    else
    {
        var material = new THREE.MeshBasicMaterial();
        var geometry = new THREE.SphereGeometry(radius, hlines, vlines);
        material.color = color;
        material.wireframe = true;
        var planet = new THREE.Mesh(geometry, material);
        return planet;

    }

}

function getTextureName(englishName)
{
    return englishName + ".jpg";
}




function generateSolarSystemScene() {

    fetch('json/SolarSystem.json')
        .then(res => res.json())
        .then(data => {
            //console.log(data.bodies);
            var planets = JSON.parse(JSON.stringify(data.bodies));

            // console.log(planets);
            // console.log(planets.length);

            try{
                for(i=0; i <= planets.length; i++)
                {
                    if(planets[i].isPlanet == true)
                    {
                        //console.log(planets[i].englishName);
                        planetsOfSolar.push(planets[i]);
                    }

                    if(planets[i].englishName == "Sun")
                    {
                        //console.log(planets[i].englishName);
                        planetsOfSolar.push(planets[i]);
                    }
                }
            }
            catch(TypeError)
            {}
            finally
            {
                //console.log(planetsOfSolar);
                currentScene = getSolarScene();
            }
        })

}








function createSphere(radius, hlines, vlines, r, g, b) {
    var material = new THREE.MeshBasicMaterial();
    material.color = new THREE.Color(r, g, b);
    material.wireframe = true;
    var geometry = new THREE.SphereGeometry(radius, hlines, vlines);
    var sphere = new THREE.Mesh(geometry, material);
    return sphere;
}






function getEarthScene()
{
    var earthScene = new THREE.Scene();

    var earth = createSphere(2, 44, 44, 0, 1, 0);
    var moon = createSphere(1, 32, 32, 1, 1, 1);
    earthScene.add(earth);
    earthScene.add(moon);

    return earthScene;

}

function getSolarScene()
{

    var solarScene = new THREE.Scene();
    

    //let scale = 1000;
    var hlines = 100;
    var vlines = 100;
    for(i=0; i<planetsOfSolar.length; i++)
    {
        var radius = planetsOfSolar[i].meanRadius;
        var distanceToSun = planetsOfSolar[i].semimajorAxis;
        var planet = createSinglePlanet(radius, hlines, vlines, getRandomColor(), planetsOfSolar[i].englishName);
        planet.position.setX(distanceToSun);
        console.log("Planet: " + planetsOfSolar[i].englishName +" Radius:" + radius + " Distance: " + distanceToSun);
        solarScene.add(planet);
    }

    return solarScene;

}













