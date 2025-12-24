let headline = document.getElementById('headline');
let output = document.getElementById('output');
let input = document.getElementById('city');
let counter = 0;
let timeCounter = 0;
const wheaterCountLength = 5;


function loadWeather(weather) {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            console.log('--- Server response recerived ---');
            let weather = JSON.parse(this.responseText);
            console.log(weather);
            let headlineText = weather.city.name;
            headline.innerHTML = `<h1>${headlineText}</h1>`;

            let time = weather.list[timeCounter].dt_txt;
            let temperature = weather.list[counter].main.temp;
            let num = parseFloat(temperature);
            let tempImg = weather.list[counter].weather[0].icon;
            let visibility = weather.list[counter].visibility;
            let weatherCondition = weather.list[counter].weather[0].main;
            let windSpeed = weather.list[counter].wind.speed;
            let humidity = weather.list[counter].main.humidity;


            let temperatureInCelsius = num - 273.15;
            let date = time.substring(0,10);

            output.innerHTML = `
                <div class="Weather-Box">
                    <div class="date">${date}</div>
                    <img src="http://openweathermap.org/img/wn/${tempImg}@2x.png" alt="Weather Icon">
                    <svg id="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M297.4 566.6C309.9 579.1 330.2 579.1 342.7 566.6L502.7 406.6C515.2 394.1 515.2 373.8 502.7 361.3C490.2 348.8 469.9 348.8 457.4 361.3L352 466.7L352 96C352 78.3 337.7 64 320 64C302.3 64 288 78.3 288 96L288 466.7L182.6 361.3C170.1 348.8 149.8 348.8 137.3 361.3C124.8 373.8 124.8 394.1 137.3 406.6L297.3 566.6z"/></svg>
                    <div class="temp">${Math.round(temperatureInCelsius)}°C</div>
                    <div class="details">
                        <div class="condition">${weatherCondition}</div>
                        <div class="visibility">Visibility: ${visibility}m</div>
                        <div class="wind">Wind: ${windSpeed} m/s</div>
                        <div class="humidity">Luftfeuchtigkeit: ${humidity}%</div>
                    </div>
                </div>
            `;
            
            let arrowDegree = weather.list[counter].wind.deg;
            document.getElementById('arrow').style.transform = `rotate(${arrowDegree}deg)`;


            output.innerHTML += `
            <div id="Buttons">
                <div onclick="yesterdayWeather()" id="Button-Yesterday">Gestern</div>
                <div onclick="tomorrowWeather()" id="Button-Tomorrow">Morgen</div>
            </div>
            
            `;  
        }
    }
    xhttp.open('GET', `https://api.openweathermap.org/data/2.5/forecast?q=${weather}&appid=fc47bcdaf5776fc122f744ede924a6a1`, true)

    xhttp.send();
}

function tomorrowWeather() {
    if(counter != wheaterCountLength - 1) {
        console.log('test');
        counter++;
        timeCounter += 8;
        loadWeather(getValue());
        document.getElementById('message').innerHTML = "";
    }else {
       let button = document.getElementById('Button-Tomorrow');
        button.style.pointerEvents = "none"; 
        output.querySelector(".Weather-Box").style.border = "2px solid red";
        document.getElementById('message').innerHTML = "„Die Zukunft ist ungewiss, aber das Ende ist immer nahe.“";
        button.style.backgroundColor = "grey";
        button.style.opacity = "0.6";
    }
}

function yesterdayWeather() {
    if(counter != 0) {
        console.log('test');
        counter--;
        timeCounter -= 8;
        loadWeather(getValue());
        document.getElementById('message').innerHTML = "";

    }else {
       let button = document.getElementById('Button-Yesterday');
        button.style.pointerEvents = "none"; 
        output.querySelector(".Weather-Box").style.border = "2px solid red";
        document.getElementById('message').innerHTML = "Keine weiteren Wetterdaten verfügbar!";
        button.style.backgroundColor = "grey";
        button.style.opacity = "0.6";
    }
}

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    console.log("Enter wurde gedrückt!");
    inputButtonForValue();
    getValue();

  }
});

function inputButtonForValue() {
    let value = input.value;
    output.innerHTML = '';
    loadWeather(value);
}

function getValue() {
    let value = input.value

    return value;
}