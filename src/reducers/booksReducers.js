'use strict';

export  function booksReducers(state ={books:
 [{
        _id: 1,
        title: 'Book1',
        description: 'This is book1',
        price: 501
    }, {
        _id: 2,
        title: 'Book2',
        description: 'This is book2',
        price: 102
    }, {
        _id: 3,
        title: 'Book3',
        description: 'This is book3',
        price: 505
    }]}, action) {
    switch (action.type) {
        case 'GET_BOOKS':
            return {...state,books:[...state.books]}
        case 'ADD_BOOK':
            let books = state.books.concat(action.payload);            
            //spread operator > babel presets
            return { books: [...state.books, ...action.payload] };
            break;
        case 'DELETE_BOOK':
            const currentBookToRemove = [...state.books];
            const indexToDelete = currentBookToRemove.findIndex(function(book){
                return book._id == action.payload;
            })
            return {books:[...currentBookToRemove.slice(0,indexToDelete),...currentBookToRemove.slice(indexToDelete+1)]}
            break;

        case 'UPDATE_BOOK':
            //create a copy of the current array of books
            const currentBookToUpdate = [...state.books];
            //Determine at which index in books array is to be updated
            const indexToUpdate = currentBookToUpdate.findIndex(function(book){
                return book._id === action.payload._id;
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