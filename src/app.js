'use strict';

import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

//3. define reducers
const reducer = function(state = { books: [] }, action) {
    switch (action.type) {
        case 'A':
            //let books = state.books.concat(action.payload);
            //spread operator > babel presets
            return { books: [...state.books, ...action.payload] };
            break;
        case 'Delete':
            const currentBookToRemove = [...state.books];
            //const intexToDelete = currentBookToRemove.
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

store.dispatch({
    type: 'A',
    payload: [{
        id: 3,
        title: 'Book3',
        description: 'This is book3',
        price: 150
    }]
})

store.dispatch({
    type: 'Delete',
    payload: {
        id: 3
    }
})