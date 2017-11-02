'use strict';

import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

// import combined reducers
import reducers from './reducers/index';
// 1. create store

const store = createStore(reducers);
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
    }, {
        id: 3,
        title: 'Book3',
        description: 'This is book3',
        price: 105
    }]
})

//DELETE a book
store.dispatch({
    type: 'DELETE_BOOK',
    payload: {
        id: 2
    }
})

//UPDATE a book
store.dispatch({
    type:'UPDATE_BOOK',
    payload:{
        id:1,
        description:'This is updated version book'
    }
})


//---> CART ACTIONS
//add to cart

store.dispatch({
    type:'ADD_TO_CART',
    payload:[{
        id:5
    }]
})