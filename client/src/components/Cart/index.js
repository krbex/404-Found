// import React, { useEffect } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { QUERY_CHECKOUT } from "../../utils/queries";
// import { idbPromise } from "../../utils/helpers";
// import CartItem from "../CartItem";
// import Auth from "../../utils/auth";
// import { useStoreContext } from "../../utils/GlobalState";
// import { TOGGLE_CART, ADD_TO_CART } from "../../utils/actions";
// import "./style.css";

// function Cart() {
//   const [state, dispatch] = useStoreContext();
//   const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

//   useEffect(() => {
//     async function getCart() {
//       const cart = await idbPromise("cart", "get");
//       console.log("here is the cart");
//       console.log(cart);
//       if (cart.length) {
//         dispatch({ type: ADD_TO_CART, games: [...cart] });
//       } else {
//         dispatch({ type: ADD_TO_CART, games: [] });
//       }
//     }

//     if (!state.cart.length) {
//       getCart();
//     }
//   }, [dispatch, state.cart.length]); /*mh changed, was empty array before*/

//   function toggleCart() {
//     dispatch({ type: TOGGLE_CART });
//   }

//   function calculateTotal() {
//     let sum = 0;
//     state.cart.forEach((game) => {
//       sum += game.price * game.purchaseQuantity;
//     });
//     return sum.toFixed(2);
//   }

//   // When the submit checkout method is invoked, loop through each item in the cart
//   // Add each item id to the productIds array and then invoke the getCheckout query passing an object containing the id for all our products
//   function submitCheckout() {
//     const gameIds = [];

//     state.cart.forEach((game) => {
//       for (let i = 0; i < game.purchaseQuantity; i++) {
//         gameIds.push(game._id);
//       }
//     });

//     getCheckout({
//       variables: { games: gameIds },
//     });
//   }

//   if (!state.cartOpen) {
//     return (
//       <div className="cart-closed" onClick={toggleCart}>
//         <span role="img" aria-label="trash">
//           🛒
//         </span>
//       </div>
//     );
//   }

//   return (
//     <div className="cart">
//       <div className="close" onClick={toggleCart}>
//         [close]
//       </div>
//       <h2>Shopping Cart</h2>
//       {state.cart.length ? (
//         <div>
//           {state.cart.map((game) => (
//             // console.log(game)
//             <CartItem key={game._id} game={game} />
//           ))}

//           <div className="flex-row space-between">
//             <strong>Total: ${calculateTotal()}</strong>

//             {Auth.loggedIn() ? (
//               <button onClick={submitCheckout}>Checkout</button>
//             ) : (
//               <span>(log in to check out)</span>
//             )}
//           </div>
//         </div>
//       ) : (
//         <h3>
//           <span role="img" aria-label="shocked">
//             😱
//           </span>
//           You haven't added anything to your cart yet!
//         </h3>
//       )}
//     </div>
//   );
// }

// export default Cart;
