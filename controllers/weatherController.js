import fetch from 'node-fetch';
import constants from '../config/index.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

var weatherPath = path.join(dirname, '..', 'data', 'weather.json');


export async function getWeather(req, res){

    const location = req.params.location
    const weatherApi = constants.weatherApi.replace('LOCATION', location);
    fetch(weatherApi, {
        method: 'GET',
    }).then( res => {
          return res.json();
    }).catch(error => res.send(422).send({ error: error }))
    .then(response =>{ 
        if(response.data){
            res.send(200).send(response.data);
            const data = JSON.parse(fs.readFileSync(userPath));
            data.push({
                name : response.data.location.name,
                region : response.data.location.region,
                tempC : response.data.current.temp_c,
                tempF : response.data.current.temp_f,
                date: response.data.current.last_updated
            })
            let payload = JSON.stringify(data);
            fs.writeFile(weatherPath, payload, (err)=>{
                if(err){
                    return res.status(400).send({message: 'Ocurrió un error al guardar la informacion'})
                } else {
                    return res.status(200).send({message: 'La información del clima agregado correctamente'})
                }
            })

        } else {
            res.send(422).send({ 'error': response})
        }
    });

} 