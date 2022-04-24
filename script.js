

const locationBtn = document.getElementById('location-btn')

locationBtn.addEventListener('click', LonLat)

function LonLat() {

  let Location = document.getElementById('location').value;


  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${Location}&appid=b776eb19cb750275132cc185f36bf44b`)
    .then(resp => resp.json())
    .then(data => {

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=b776eb19cb750275132cc185f36bf44b`)
        .then(resp => resp.json())
        .then(tempdata => {
          const temperature = (tempdata.main.temp - 273.3);

          console.log(tempdata)


          document.getElementById('temp').innerText = temperature.toFixed(2);

          document.getElementById('Name').innerText = tempdata.name;

          document.getElementById('weatherd-discription').innerText = tempdata.weather[0].description
        }


        )
    }


    )

}