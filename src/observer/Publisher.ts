import { EventManager } from "./EventManager";

export class Publisher {
    public eventManager: EventManager;

    constructor(){
        this.eventManager = new EventManager();
    }

    fecha(){
        this.eventManager.notify();
    }
}