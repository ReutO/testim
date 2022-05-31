class EventEmitter{

    constructor(){
        this.handlers = {};
        this.indexes = {};
    }
    
    on(eventName, handler){
        if(!this.handlers[eventName]){
            this.handlers[eventName] = {};
        }

        if(!this.indexes[eventName]){
            this.indexes[eventName] = 0;
        }

        const index = ++this.indexes[eventName]+1;
        this.handlers[eventName][index] = handler;

        return () => {
            if(this.handlers[eventName][index])
                delete this.handlers[eventName][index];
        }
    }

    trigger(eventName, data){
        if(this.handlers[eventName]){
            for(let key in this.handlers[eventName]){
                this.handlers[eventName][key](data);
            }
        }
    }


}

module.exports = EventEmitter;