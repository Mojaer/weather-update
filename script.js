

function LonLat(){
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIkey}`)
  .then(resp => resp.json())
  .then(json => console.log(json))
}