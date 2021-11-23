import fetch from 'node-fetch';
import { rapidapiUrl } from '../config';


export async function getWeather(req, res){
    const location = req.query.location
    const weatherApi = rapidapiUrl.replace('LOCATION', "Mexico");
    fetch(weatherApi, {
        method: 'GET',
    }).then( res => {
          return res.json();
    }).catch(error => res.send(422).send({ error: error }))
    .then(response =>{ 
        if(response.data){
            res.send(200).send(response.data);
        } else {
            res.send(422).send({ 'error': response})
        }
    });

} 