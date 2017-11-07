'use strict';

//add to cart
export function addToCart(book){
	return{
		 type:'ADD_TO_CART',
   		 payload:book
		}
}

//add to cart
export function updateCart(_id,unit){
	return{
		 type:'UPDATE_CART',
   		 _id:_id,
   		 unit:unit
		}
}
//delete from cart
export function deleteCartItem(cart){
	return{
		 type:'DELTE_CART_ITEM',
   		 payload:cart
		}
}