import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { sendCartData } from "./store/cart-slice";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;

//memo1
//The App component uses the useSelector hook to access the cartIsVisible,
//cart, and notification states from the Redux store. It also uses the useDispatch hook
//to dispatch actions to the Redux store.

//The useDispatch hook is used to get a reference to the Redux dispatch function.

//memo2
//The isInitial variable is used to prevent the sendCartData function from being called during the initial render.

//The isInitial variable is used to determine if the component is being rendered for the first time.
//The reason for this is that in the useEffect hook, we are calling the sendCartData function
//after the component has mounted and any time the cart state changes. However, we don't want to
//call sendCartData the first time the component renders because we haven't initialized the cart state yet.
//To solve this, we use the isInitial variable, which is initially set to true.
//If it is still true when the useEffect hook is called, we simply return without calling sendCartData.
//This ensures that sendCartData is only called after the cart state has been initialized and updated.
//After the first render, we set isInitial to false. From this point on, any time the cart state changes,
//the sendCartData function will be called as expected.

//memo3
//This useEffect hook is used to send the cart data to the backend server
//every time the cart state changes (i.e., the user adds or removes items from the cart).

//The isInitial variable is used to prevent the sendCartData function from being called
//when the component first renders, as it should only be called on subsequent cart updates.

//The dispatch function is used to dispatch the sendCartData action creator,
//which sends a PUT request to the server with the updated cart data in the request body.

//The dependencies array [cart, dispatch] is passed
//to the useEffect hook to ensure that the hook runs only when either of these dependencies change.
