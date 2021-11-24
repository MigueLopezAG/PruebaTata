//We import the librarys to use formanipulate the JSON file
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

//Path of the JSON file
var userPath = path.join(dirname, '..', 'data', 'user.json');

//Function to get all the information of the file
export async function getAll(req, res){
    try{
        fs.readFile(userPath, (err, data) => {
            if (err) throw err;
            let users = JSON.parse(data);
            if(users){
                return res.status(200).send(users);    
            } else {
                return res.status(404).send({message: 'No se encontro el usuario'});
            }
        });
    }catch(err){
        return res.status(500).send({message: 'Hubo un error con el servidor'});
    }
} 

//Function to get a specific user with an id
export async function get(req, res){
    const userId = req.params.id;
    try{
        fs.readFile(userPath, (err, data) => {
            if (err) throw err;
            let users = JSON.parse(data);
            users.map((user)=> {
                if(user.id === userId){
                    return res.status(200).send(user);
                }
            });
            return res.status(404).send({message: 'No se encontro el usuario'});
        });
    }catch(err){
        return res.status(500).send({message: 'Hubo un error con el servidor'});
    }
    
} 

//Function to create a new user. we receive the data of the JSON file, add the new user and send the succes message
export async function postUser(req, res) {
    const { name, age, gender, email} = req.body
    try{
        //condition to verify all the data to save
        if(name && age && gender && email ){
            const data = JSON.parse(fs.readFileSync(userPath));
            data.push({
                id: (data.length + 1),
                name,
                age,
                gender,
                email
            })
            let payload = JSON.stringify(data);
            fs.writeFile(userPath, payload, (err)=>{
                if(err){
                    return res.status(400).send({message: 'Ocurrió un error al guardar la informacion'})
                } else {
                    return res.status(200).send({message: 'Usuario agregado correctamente'})
                }
            })
        } else {
            return res.status(404).send({message: 'No se puede guardar el usuario, falta información'});
        }
    }catch(err){
        return res.status(500).send({message: 'Hubo un error con el servidor'});
    }
}

//Funcition to update a current user, first check if it exist, then we modify the user and send the succesfull message
export async function updateUser(req, res) {
    const userId = req.params.id;
    const { name, age, gender, email} = req.body
    try{
        const data = JSON.parse(fs.readFileSync(userPath));
        //loop to check if the id exist in the file
        data.map((user)=> {
            if(user.id === userId){
                user.name = name ? name : user.name;
                user.age = age ? age : user.age;
                user.gender = gender ? gender : user.gender;
                user.email = email ? email : user.email;
                let payload = JSON.stringify(data);
                fs.writeFile(userPath, payload, (err)=>{
                    if(err){
                        return res.status(400).send({message: 'Ocurrió un error al guardar la informacion'})
                    } else {
                        return res.status(200).send({message: 'Usuario actualizado correctamente'})
                    }
                })
            }
        });
    }catch(err){
        return res.status(500).send({message: 'Hubo un error con el servidor'});
    }
    
}