// import React from "react";

// import {
//   chakra,
//   Box,
//   Stack,
//   Link,
//   HStack,
//   Text,
//   Container,
//   Icon,
//   Avatar,
//   Tooltip,
//   StackProps,
//   Divider,
//   useColorModeValue,
// } from "@chakra-ui/react";
// // Here we have used react-icons package for the icons
// import { AiFillGithub } from "react-icons/ai";

// // export default function Profile() {
// //   return <div> Hello World this is the Profile page </div>;
// // }

// const Profile = () => {
//   return (
//     <Container maxW="5xl" p={{ base: 5, md: 6 }}>
//       <Stack
//         w="18rem"
//         spacing={2}
//         p={4}
//         border="1px solid"
//         borderColor={useColorModeValue("gray.400", "gray.600")}
//         rounded="md"
//         margin="0 auto"
//         _hover={{
//           boxShadow: useColorModeValue(
//             "0 4px 6px rgba(160, 174, 192, 0.6)",
//             "0 4px 6px rgba(9, 17, 28, 0.4)"
//           ),
//         }}
//       >
//         <HStack justifyContent="space-between" alignItems="baseline">
//           <Tooltip
//             label="Austin, Texas"
//             aria-label="Austin, Texas"
//             placement="right-end"
//             size="sm"
//           >
//             <Box pos="relative">
//               <Avatar
//                 src=""
//                 name="Michael Harrison"
//                 size="xl"
//                 borderRadius="md"
//               />
//               <Avatar
//                 src=""
//                 name=""
//                 size="xs"
//                 borderRadius="full"
//                 pos="absolute"
//                 bottom={0}
//                 right="-12px"
//               />
//             </Box>
//           </Tooltip>
//           <Link isExternal href="">
//             <Icon as={AiFillGithub} w={6} h={6} />
//           </Link>
//         </HStack>
//         <chakra.h1 fontSize="xl" fontWeight="bold">
//           Michael Harrison
//         </chakra.h1>
//         <Text fontSize="md" color="gray.500">
//           Love to play and wreck kids in games.
//         </Text>
//         <Divider />
//         <Text fontSize="md" color="gray.500">
//           Games Owned
//         </Text>
//       </Stack>
//     </Container>
//   );
// };

// export default Profile;
import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../actions/userActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

const Profile = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPic(userInfo.pic);
    }
  }, [history, userInfo]);

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
          console.log(pic);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateProfile({ name, email, password, pic }));
  };

  return (
    <MainScreen title="EDIT PROFILE">
      <div>
        <Row className="profileContainer">
          <Col md={6}>
            <Form onSubmit={submitHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage variant="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
              </Form.Group>{" "}
              {picMessage && (
                <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
              )}
              <Form.Group controlId="pic">
                <Form.Label>Change Profile Picture</Form.Label>
                <Form.File
                  onChange={(e) => postDetails(e.target.files[0])}
                  id="custom-file"
                  type="image/png"
                  label="Upload Profile Picture"
                  custom
                />
              </Form.Group>
              <Button type="submit" varient="primary">
                Update
              </Button>
            </Form>
          </Col>
          <Col
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={pic} alt={name} className="profilePic" />
          </Col>
        </Row>
      </div>
    </MainScreen>
  );
};

export default Profile;