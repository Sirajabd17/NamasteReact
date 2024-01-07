import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
export default store;

/*
create store
   -configurestore()-RTK react tool kit

   provide my store to app
     -<provider store = {store}> -import from react-redux

slice 
   -RTK -createSlice({
    name:"",
    initiaState:
    reducer:{
        addItem:(state,action)=>{state=action.payload}
    }
   })     

   export const {addItem,removeItems}=cartslice.actions;
   export default cartSlice.reducer;

put that slice into store
      {
        reducer:{
            cart:cartSlice,
            user:userSlice
        }
      }   
*/
