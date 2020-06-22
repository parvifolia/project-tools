// Get data from Accuweather

class Forecast {
    constructor(){
        this.key='RmVxi14481HWMfZs7hX8bX2zgtN5WH02';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateCity(city) {
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);
        return {cityDets,weather};    
    }
    async getCity(city){
        const query = `?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityUrl+query);
        const data = await response.json();
        return data[0];
    }
    async getWeather (a) {
        const query = `${a}?apikey=${this.key}`;
        const response = await fetch(this.weatherUrl+query);
        const data = await response.json();
        return data[0];
    }
}

// Selectors
const request = document.querySelector("form");
const card = document.querySelector(".card");
const details = document.querySelector(".details");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const body = document.querySelector("body");
const background = document.querySelector(".weather-background");
const forecast = new Forecast();

const updateUi = (data) => {
    
    // const cityDets = data.cityDets;
    // const weather = data.weather;

    //destructure

    const {cityDets,weather} = data;

    //update details

    details.innerHTML=`
        <h5 class="my-3">${cityDets.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    //night-day - ternany operator
    let timeSrc = (weather.IsDayTime) ? "/static/img/weather/day.svg" : '/static/img/weather/night.svg' ;


    background.setAttribute('style',`background-image:url(${timeSrc}); background-repeat: none;background-size:cover; transition: all 0.7s ease;`);
    

    //icon
    const iconSrc = `/static/img/weather/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src',iconSrc);

    //remove d-none

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }
}

//form request
request.addEventListener('submit', e=> {

    //get city value
    e.preventDefault();
    const city= request.city.value.trim();
    request.reset();

    //update ui with new city
    forecast.updateCity(city)
        .then(data=>updateUi(data))
        .catch(err=>console.log(err));

    // set local storage
    localStorage.setItem('city', city)
});

let lastCity = localStorage.getItem("city")
if (lastCity) {
    forecast.updateCity(lastCity)
        .then(data=>updateUi(data))
        .catch(err=>console.log(err));
}



