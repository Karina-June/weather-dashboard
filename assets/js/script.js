var apiKey = "f93d3b10d3389db94f41066a5754a9f3";
var btn = document.querySelector("#searchCity");
var enteredCity = document.querySelector(".display")


function runApi () {
  var weatherUpdateUrl = `https://api.openweathermap.org/data/2.5/forecast?q=phoenix&appid=${apiKey}`;

    fetch(weatherUpdateUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        info(data)
      });
};


function info(data) {
  var cityInput = document.getElementById("cityInput").value;

  for (var i = 0; i < data.length; i++) {
    var theCity = data[i].city.name 
    var weatherData = {
    temp: data[i].main.temp,
    realFeel: data[i].main.feels_like,
    min: data[i].main.temp_min,
    max: data[i].main.temp_max
    };


    if (theCity === cityInput) {
        addText (weatherData);
        return
    }
    else{
        enteredCity.innerHTML = "No Results Found"
    }


  }
};



btn.addEventListener("click", function() {
    runApi ()
});
      
function addText (weatherData) {
  enteredCity.innerHTML = weatherData.temp + " " + weatherData.realFeel + " " + weatherData.min + " " + weatherData.max + " "
};


