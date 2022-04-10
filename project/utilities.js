function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function getRandomColor()
{
    var color = new THREE.Color(0xffffff);
    color.setHex(Math.random() * 0xffffff);
    return color;
}

function getTrueOrFalse()
{
    if(Math.random() < 0.5)
        return 1;
    return -1;
}



const Planets = {
    Uranus: "Uranus",
    Neptune: "Neptune",
    Jupiter: "Jupiter",
    Mars: "Mars",
    Mercury: "Mercury",
    Saturn: "Saturn",
    Sun: "Sun",
    Earth: "Earth",
    Venus: "Venus"
};