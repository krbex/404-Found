import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ game }) => {
  const [, dispatch] = useStoreContext();

  const removeFromCart = (game) => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: game._id,
    });
    idbPromise("cart", "delete", { ...game });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === "0") {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: game._id,
      });
      idbPromise("cart", "delete", { ...game });
      idbPromise("cart", "put", { ...game, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      <div>
        <img src={`/images/${game.image}`} alt="" />
      </div>
      <div>
        <div>
          {game.name}, ${game.price}
        </div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={game.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(game)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
