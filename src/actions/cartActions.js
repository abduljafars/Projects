'use strict';

//add to cart
export function addToCart(book){
	return{
		 type:'ADD_TO_CART',
   		 payload:book
		}
}

//delete from cart
export function deleteCartItem(cart){
	return{
		 type:'DELTE_CART_ITEM',
   		 payload:cart
		}
}