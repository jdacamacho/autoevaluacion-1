import { User } from "../models/User";
import { EventListener } from "./EventListener.interface";
import { Labor } from "./Labor";

export class EventManager{
    private suscribers: EventListener[];

    constructor(){

    }

    suscribe (user: EventListener) {
        this.suscribers.push(user);
    }

    unsuscribe(userId: string){

    }

    notify(){
        this.suscribers.forEach( (s) => {
            s.update();
        });
    }
}