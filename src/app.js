'use strict';

import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory,IndexRoute} from 'react-router';
// import combined reducers
import reducers from './reducers/index';
//import actions
import {addToCart} from './actions/cartActions';
import {postBooks,deleteBooks,updateBooks} from './actions/booksActions';
import Bookslist from './components/pages/booksList';
import Cart from './components/pages/cart';
import BooksForm from './components/pages/booksForm';
import Main from './main';
// 1. create store
const store = createStore(reducers,middleware);
const middleware = applyMiddleware(logger);

const Routes = (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={Main}>
				<IndexRoute component={Bookslist}/>
				<Route path="/admin" component={BooksForm} />
				<Route path="/cart" component={Cart} />
			</Route>
		</Router>
	</Provider>
)

render(Routes,document.getElementById('app'));

