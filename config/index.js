import { config } from 'dotenv'

config(); 
//We define the url of the Weather API to use
const constants = {
    weatherUrl: "http://api.weatherapi.com/v1/current.json?key="+process.env.WEATHER_API_URL+"&q=LOCATION&aqi=no",
}

export default constants