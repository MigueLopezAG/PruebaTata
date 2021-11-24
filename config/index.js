import { config } from 'dotenv'

config(); 

const constants = {
    rapidapiUrl: "http://api.weatherapi.com/v1/current.json?key="+process.env.WEATHER_API_URL+"&q=LOCATION&aqi=no",
}

export default constants