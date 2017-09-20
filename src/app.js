'use strict';

import { createStore } from 'redux';

//3. define reducers
const reducer = function(state = [], action) {
    switch (action.type) {
        case 'A':
            return state = action.payload;
            break;
    }
    return state;
}
// 1. create store

const store = createStore(reducer);
store.subscribe(function() {
    console.log('Current State is: ', store.getState());
});

//2. create and dispatch actions
store.dispatch({
    type: 'A',
    payload: [{
        id: 1,
        title: 'Book1',
        description: 'This is book1',
        price: 50
    }, {
        id: 2,
        title: 'Book2',
        description: 'This is book2',
        price: 100
    }]
})