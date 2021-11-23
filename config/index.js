require('dotenv').config();


const config = {
    rapidapiUrl: "http://api.weatherapi.com/v1/current.json?key="+process.env.WEATHER_API_URL+"&q=LOCATION&aqi=no",
}

export default config