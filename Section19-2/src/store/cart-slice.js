import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    changed: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;

//state.changed = true;
//The changed property is used to track whether the cart has been modified or not.
//It is initially set to false in the initialState. When an item is added or removed from the cart,
//the changed property is set to true indicating that the cart has been modified. This property can be used
//to optimize performance by only sending the cart data to the server if it has been changed.

//changed is a state property in the cartSlice that tracks whether any change has been made to the cart items.
//It is initially set to false in the initial state.
//When a user adds, removes or updates items in the cart,
//this property is set to true to indicate that the cart has been modified.
//This is useful when persisting the cart data to a backend server. If the changed property is true,
//it means that the cart has to be updated on the server.
//The changed property is set to true in the addItemToCart and removeItemFromCart reducers
//when an item is added or removed from the cart respectively.
