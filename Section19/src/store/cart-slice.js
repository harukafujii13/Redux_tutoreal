import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
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
    removeitemFormCart(state, action) {
      const id = action.payload; //削除するアイテムのidを取得
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

export const cartactions = cartSlice.actions;

export default cartSlice;

//memo1
//The payload property is used to pass data to the reducer,
//and it can be any JavaScript value.

//memo2
//state.totalQuantity keeps track of the total number of items in the cart,
//regardless of their type, while existingItem.quantity tracks the quantity of a specific item.
//So, when a new item is added to the cart, the total quantity increases by 1,
//while the quantity of the existing item in the cart increases by 1.
