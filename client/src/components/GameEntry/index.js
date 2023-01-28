import React from "react";
import { Link } from "react-router-dom";
// import { useStoreContext } from "../../utils/GlobalState";
// import { ADD_TO_CART } from "../../utils/actions";
// import { idbPromise } from "../../utils/helpers";
import {
  ChakraProvider,
  Box,
  Image,
  Container,
  Text,
  Button,
} from "@chakra-ui/react";

export default function GameEntry(game) {
  // const [state, dispatch] = useStoreContext();

  const { image, name, _id, price, description } = game;

  // const { cart } = state;

  // const addToCart = () => {
  //   const gameInCart = cart.find((cartGame) => cartGame._id === _id);
  //   if (gameInCart) {
  //     dispatch({
  //       type: ADD_TO_CART,
  //       game: { game },
  //     });
  //     idbPromise("cart", "put", { ...game });
  //   }
  // };

  return (
    <ChakraProvider resetCSS>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="space-around"
        flexDirection="row"
        pb={5}
        pt={5}
      >
        <Container
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          backgroundColor="blackAlpha.500"
          mb={40}
        >
          <Link to={`/game/${_id}`}>
            <Image
              alt={name}
              src={`/images/${image}`}
              height={270}
              width={480}
              overflow="hidden"
              maxWidth={500}
              maxHeight={500}
            />
          </Link>
          <Text>{description}</Text>
          <Text>{price}</Text>
          <Button
            // onClick={() => addToCart()}
            variant="solid"
            size="md"
            colorScheme="red"
            fontWeight="bold"
          >
            Add to cart
          </Button>
        </Container>
      </Box>
    </ChakraProvider>
  );
}
