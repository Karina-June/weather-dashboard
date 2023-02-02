var apiKey = "f93d3b10d3389db94f41066a5754a9f3";

var weatherUpdateUrl = `https://api.openweathermap.org/data/2.5/forecast?q={cityName}&appid=${apiKey}`;

var btn = document.querySelector("#searchCity");


function runApi () {
    fetch(weatherUpdateUrl, {
        mode: "cors", 
        headers: {
            "Access-Control-Allow-Origin": "*"
        }
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        weatherCompare (data)
      });

    };





btn.addEventListener("click", function() {
    runApi ()
});
      