/* jshint strict: false */
/* jshint -W098 */

function createStateMachine(definition) {

    // private variables

    var states = null;
    var current_state = null;
    var errorHandler = [];

    // initialization

    var i;
    for(i in definition) {
        if(definition.hasOwnProperty(i)) {
            definition[i].leaveHandler = [];
            definition[i].enterHandler = [];
            definition[i].changeHandler = {};
            if(definition[i].prev === 'init') {
                if(current_state === null) {
                    current_state = i;
                } else {
                    throw new Error('Invalid definition. initial state is already ' + current_state);
                }
            }
        }
    }
    if(current_state === null) {
        throw new Error('Missing initial state');
    }
    states = definition;
    
    // state machine object

    return {
        
        is: function(state_name) {
            return current_state === state_name;
        },

        get: function() {
            return current_state;
        },

        change: function(next_state) {
            var i, ch, previous_state;
            if(states[next_state] && (states[next_state].prev.indexOf(current_state) > -1 || states[next_state].prev === '*')) {
                for(i = 0; i < states[current_state].leaveHandler.length; i++) {
                    states[current_state].leaveHandler[i](next_state);
                }
                ch = states[current_state].changeHandler[next_state];
                previous_state = current_state;
                current_state = next_state;
                if(ch) {
                    for(i = 0; i < ch.length; i++) {
                        ch[i](previous_state, next_state);
                    }
                }
                for(i = 0; i < states[next_state].enterHandler.length; i++) {
                    states[next_state].enterHandler[i](previous_state);
                }
                return true;
            } else {
                for(i = 0; i < errorHandler.length; i++) {
                    errorHandler[i]({
                        'msg'       : 'Illegal state change',
                        'current'   : current_state,
                        'next'      : next_state
                    });
                }
                return false;
            }
        },

        onLeave: function(state_name, handler) {
            if(states.hasOwnProperty(state_name)) {
                states[state_name].leaveHandler.push(handler);
            } else {
                throw new Error('Unknown state');
            }
        },

        onEnter: function(state_name, handler) {
            if(states.hasOwnProperty(state_name)) {
                states[state_name].enterHandler.push(handler);
            } else {
                throw new Error('Unknown state');
            }
        },

        onChange: function(from_state, to_state, handler) {
            if(states.hasOwnProperty(from_state) && states.hasOwnProperty(to_state)) {
                if(!states[from_state].changeHandler.hasOwnProperty(to_state)) {
                    states[from_state].changeHandler[to_state] = [];
                }
                states[from_state].changeHandler[to_state].push(handler);
            } else {
                throw new Error('Unknown state');
            }
        },
        
        onError: function(handler) {
            errorHandler.push(handler);
        },

        removeHandler: function(handler) {
            var i, j, h;
            for(i in states) {
                if(states.hasOwnProperty(i)) {
                    h = states[i].leaveHandler.indexOf(handler);
                    if(h > -1) {
                        states[i].leaveHandler.splice(h, 1);
                    }
                    h = states[i].enterHandler.indexOf(handler);
                    if(h > -1) {
                        states[i].enterHandler.splice(h, 1);
                    }
                    for(j in states[i].changeHandler) {
                        if(states[i].changeHandler.hasOwnProperty(j)) {
                            h = states[i].changeHandler[j].indexOf(handler);
                            if(h > -1) {
                                states[i].changeHandler[j].splice(h, 1);
                            }
                        }
                    }
                    h = errorHandler.indexOf(handler);
                    if(h > -1) {
                        errorHandler.splice(h, 1);
                    }
                }
            }
        }

    };

}
