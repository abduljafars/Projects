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
import Menu from './components/menu';
import Bookslist from './components/pages/booksList';
import Footer from './components/footer';

// 1. create store
const store = createStore(reducers,middleware);
const middleware = applyMiddleware(logger);
render(<Provider store={store}>
	<div>
		<Menu/>
		<Bookslist/>
		<Footer/>
	</div> 
	</Provider>,document.getElementById('app'));

