class EventEmitter{

    constructor(){
        this.handlers = {};
    }
    
    on(eventName, handler){
        if(!this.handlers[eventName]){
            this.handlers[eventName] = [];
        }

        this.handlers[eventName].push(handler);
    }

    trigger(eventName, data){
        if(this.handlers[eventName]){
            this.handlers[eventName].forEach(handler => {
                handler(data);
            });
        }
    }
}

module.exports = EventEmitter;