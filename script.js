//We need a reducer (rootReducer)

const initialState = {
    count: 0
}

function rootReducer(state=initialState, action) {
    // debugger; we can use this to stop the script here for debugging
    switch (action.type){
        case 'INCREMENT':
            var newState = {...state };
            // let newState = Object.assign ({}, state); This would also work.
            newState++;
            return newState;
            
        case 'DECREMENT':
            var newState = {...state };
            
            newState--;
            return newState;
        default:
            return state;
    }
}
//We eneed some redux store and initial State

/*global Redux*/
const store = Redux.createStore(rootReducer);

//We need some way of changing the state
/* global $ */
$(document).ready(function(){
    let currentState = store.getState();
    $('#counter').text(currentState.count);
    
    $('#increment').on('click', function(){
        store.dispatch({
            type: 'INCREMENT'
        });
        let currentState = store.getState();
        $('#counter').text(currentState.count);
    });
    $('#decrement').on('click', function(){
        store.dispatch({
            type: 'DECREMENT'
        });
        let currentState = store.getState();
        $('#counter').text(currentState.count);
    });
})