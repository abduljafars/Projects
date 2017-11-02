'use strict';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';


// import combined reducers
import reducers from './reducers/index';
//import actions
import {addToCart} from './actions/cartActions';

import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
import Bookslist from './components/pages/booksList';

render(<Bookslist/>,document.getElementById('app'));

// 1. create store

const middleware = applyMiddleware(logger);
const store = createStore(reducers,middleware);
/*store.subscribe(function() {
    console.log('Current State is: ', store.getState());
});
*/
//2. create and dispatch actions

store.dispatch(postBooks(
    [{
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
    ))


//DELETE a book
store.dispatch(deleteBooks({
    id:2
}))

//UPDATE a book

store.dispatch(updateBooks(
        {
            id:3,
            description:'Description of this book updated'
        }
))

//---> CART ACTIONS
//add to cart
store.dispatch(addToCart([{id:25}]))
