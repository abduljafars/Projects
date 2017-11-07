'use strict';

//CART reducers

export function cartReducers(state={cart:[]},action){
switch(action.type){
	case "ADD_TO_CART":
		return {cart:[...state,...action.payload]}
		break;
	case "DELTE_CART_ITEM":
		return {cart:[...state,...action.payload]}
		break;
}
return state;
}