import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

var userPath = path.join(dirname, '..', 'data', 'user.json');

export async function getAll(req, res){

} 

export async function get(req, res){
    const userId = req.params.id;
    
    if(userId){
        fs.readFile(userPath, (err, data) => {
            if (err) throw err;
            let user = JSON.parse(data);
            console.log("mostaza", user)
            return res.status(200).send(user);
        });
    } 
} 

export async function postUser(req, res) {

}

export async function updateUser(req, res) {

}