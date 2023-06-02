import { EventListener } from "./EventListener.interface";
import { EventManager } from "./EventManager";
import { Publisher } from "./Publisher";

export class Labor implements EventListener{

    constructor(){

    }

    update(){
        console.log("Notificando al labor");
    }
}
