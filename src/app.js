'use strict';

import { createStore } from 'redux';
import React from 'react';
import { render } from 'react-dom';

//3. define reducers
const reducer = function(state ={books:[]}, action) {
    switch (action.type) {
        case 'A':
            let books = state.books.concat(action.payload);            
            //spread operator > babel presets
            return { books: [...state.books, ...action.payload] };
            break;
        case 'DELETE_BOOK':
            const currentBookToRemove = [...state.books];
            const indexToDelete = currentBookToRemove.findIndex(function(book){
                return book.id === action.payload.id;
            })
            return {books:[...currentBookToRemove.slice(0,indexToDelete),...currentBookToRemove.slice(indexToDelete+1)]}
            break;

        case 'UPDATE_BOOK':
            //create a copy of the current array of books
            const currentBookToUpdate = [...state.books];
            //Determine at which index in books array is to be updated
            const indexToUpdate = currentBookToUpdate.findIndex(function(book){
                return book.id === action.payload.id;
            })
            //create a new book object with the new values and with the same array index of the item we want to replace
            //To archive this we will use ...spread but we could use concat method too

            const newBookToUpdate={
                ...currentBookToUpdate[indexToUpdate],
                description:action.payload.description
            }
            console.log('what is it newBookToUpdate :',newBookToUpdate);
            //use slice to remove the book at the specified index, replace with the nw object and concatenate with the rest of item in the array
            return {books:[...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate+1)]}
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