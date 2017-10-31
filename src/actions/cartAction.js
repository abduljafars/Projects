'use strict';

//ADD TO CART

//This function recieves array(as arguments) of book items
export function addToCart(book){
return {
	type:'ADD_TO_CART',
	payload:book
}
}