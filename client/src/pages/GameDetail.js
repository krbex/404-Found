import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import Cart from "../components/Cart/index";
import { useStoreContext } from "../utils/GlobalState";
import { REMOVE_FROM_CART, ADD_TO_CART, UPDATE_GAMES } from "../utils/actions";
import { QUERY_GAMES } from "../utils/queries";
import { idbPromise } from "../utils/helpers";
import spinner from "../assets/spinner.gif";

function GameDetail() {
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentGame, setCurrentGame] = useState({});

  const { loading, data } = useQuery(QUERY_GAMES);

  const { games, cart } = state;
  console.log(state);

  useEffect(() => {
    // already in global store
    if (games.length) {
      setCurrentGame(data.games.find((game) => game._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_GAMES,
        games: data.games,
      });

      data.games.forEach((game) => {
        idbPromise("games", "put", game);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise("games", "get").then((indexedGames) => {
        dispatch({
          type: UPDATE_GAMES,
          products: indexedGames,
        });
      });
    }
  }, [games, data, loading, dispatch, id]);

  // const addToCart = () => {
  //   const itemInCart = cart.find((cartItem) => cartItem._id === id);
  //   if (itemInCart) {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       game: { ...currentGame, purchaseQuantity: 1 },
  //     });
  //     idbPromise("cart", "put", { ...currentGame, purchaseQuantity: 1 });
  //   }
  // };

  // const removeFromCart = () => {
  //   dispatch({
  //     type: REMOVE_FROM_CART,
  //     _id: currentGame._id,
  //   });

  //   idbPromise("cart", "delete", { ...currentGame });
  // };

  return (
    <>
      {currentGame && cart ? (
        <div className="currentGameBlock">
          <Link to="/game">← Back to games</Link>

          <h2>{currentGame.name}</h2>

          <p>{currentGame.description}</p>

          <img src={`/images/${currentGame.image}`} alt={currentGame.name} />
          <p>Trailer:</p>
          <a href={currentGame.ytUrl}>
            <img
              src={`/images/${currentGame.youtube}`}
              alt={currentGame.name}
            />
          </a>
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}

      {/* <Cart /> */}
    </>
  );
}

export default GameDetail;
