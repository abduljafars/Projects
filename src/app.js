'use strict';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
// import combined reducers
import reducers from './reducers/index';
//import actions
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
import Bookslist from './components/pages/booksList';

// 1. create store
const store = createStore(reducers,middleware);
const middleware = applyMiddleware(logger);
render(<Provider store={store}><Bookslist/></Provider>,document.getElementById('app'));

//2. create and dispatch actions
/*store.dispatch(postBooks(
   
    ))
*/ 

//DELETE a book
/*store.dispatch(deleteBooks({
    id:2
}))
*/
//UPDATE a book

/*store.dispatch(updateBooks(
        {
            id:3,
            description:'Description of this book updated'
        }
))
*/
//---> CART ACTIONS
//add to cart
store.dispatch(addToCart([{id:25}]))
