
import { EventEmitter } from 'events';
//we create the event
let MyEvent = new EventEmitter();

//we define the function of the event when its called
MyEvent.on('newEvent', (num1, num2)=>{
    try{
        const auxN1=num1, auxN2=num2, total = 0;
        while (auxN1 <= 1000 && auxN2 <= 1000){
            if(auxN1 <= 1000){
                total += num1;
            }
            if(auxN2 <= 1000){
                total += num2;
            }
            auxN1+=num1;
            auxN2+=num2; 
        };
        console.log("Multiplies of", num1, num2, (total+1000));
    }catch (err){
        console.log("Hubo un error en la ejecución", err)
    }
    
});

//define the function that its going to emit the event
export function logInfo(req){
    const input = req.body.input
    var nums = input.split(' ');
    console.log("Multiplies of", nums[0], nums[1]);
    emitter.emit("newEvent", (nums[0], nums[1]));
} 




