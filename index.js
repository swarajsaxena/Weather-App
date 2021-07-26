// Selecters

var submit = document.querySelector(".submit");
var inputValue = document.querySelector(".input");

var locationName = document.querySelector(".location");

var description = document.querySelector(".description");
var temperature = document.querySelector(".temperature");
var windInfo = document.querySelector(".wind-info");
var rainInfo = document.querySelector(".rain-info");

var minTemp = document.querySelector(".min-temp");
var maxTemp = document.querySelector(".max-temp");
console.log(298.83- 273.15);

var pressure = document.querySelector(".pressure");
var humidity = document.querySelector(".humidity");

// Event Listeners

submit.addEventListener("click", (event) => {
    event.preventDefault();
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=828d4c81ad955ef37e7c72a016a5a9b1")
        .then((response) => response.json())
        .then((data) => {

            console.log(data);
            inputValue.value = "";
            
            // STORING THE VALUES FROM THE JSON INTO VALUES
            
            var locationNameValue = data['name'];
            var desValue = data['weather'][0]['description'];
            var tempValue = data['main']['temp']- 273.151;
            var windValue = data['wind']['speed'];
            var rainValue = data['main']['feels_like']- 273.151;
            var minTempValue = data['main']['temp_min']- 273.151;
            var maxTempValue = data['main']['temp_max']- 273.151;
            var pressurValue = data['main']['pressure'];
            var humidityValue = data['main']['humidity'];

            // INSERTING THE VALUES IN THE HTML DOM

            locationName.innerHTML = locationNameValue;

            description.innerHTML = desValue;
            temperature.innerHTML = tempValue.toFixed(1) + '&deg;';
            windInfo.innerHTML = windValue;
            rainInfo.innerHTML = rainValue.toFixed(1) + '&deg;';

            minTemp.innerHTML = minTempValue.toFixed(1) + '&deg;';
            maxTemp.innerHTML = maxTempValue.toFixed(1) + '&deg;';

            pressure.innerHTML = pressurValue + " hPa";

            if( humidityValue == "undefined" ){
                humidity.innerHTML = "--";
            }else{
                humidity.innerHTML = humidityValue;
            }


        })

        
        
        .catch((err) =>
        prompt("Wrong City Name..")
        );
});

// Fetching API
