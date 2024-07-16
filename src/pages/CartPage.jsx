import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Typography,
  Box,
  IconButton,
  Stack,
  alpha,
  TextField,
} from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import PlayCircleRoundedIcon from "@mui/icons-material/PlayCircleRounded";
import { useStore } from "../components/StoreContext";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  DeleteForever,
  HomeOutlined,
  LocalPhoneRounded,
  LocationOnRounded,
} from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { price } from "../constants/constants";

const CartPage = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    expanded,
    toggleSection,
    isEditing,
    home,
    phone,
    address,
    toggleEditMode,
    handleHomeChange,
    handleAddressChange,
    handlePhoneChange,
  } = useStore();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      const itemPrice = price[index % price.length];
      return total + (itemPrice - itemPrice * 0.3) * item.quantity;
    }, 0);
  };

  const otherDeliveryFees = 800 + 400 + 400 + 200;

  console.log(cart);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box>
        <Navbar />
      </Box>
      <Box sx={{ paddingX: 3, marginTop: { xs: 12, sm: 16, md: 20 }, pb: 5 }}>
        <Box sx={{ paddingX: { lg: 20 } }}>
          <Stack
            direction={{ xs: "column", ss: "row" }}
            justifyContent={"center"}
            alignItems={{ xs: "center", ss: "start" }}
            gap={0}
            width={"100%"}
          >
            <Box
              sx={{
                // bgcolor: "#FFF4C8",
                width: "100%",
                // paddingY: 1,
                paddingX: 2,
                borderRadius: "15px",
              }}
            >
              <Stack
                direction={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
              >
                <Box
                  sx={{
                    bgcolor: "#FFF4C8",
                    paddingY: 1,
                    paddingX: 2,
                    borderRadius: "15px",
                    width: "100%",
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <PlayCircleRoundedIcon />
                      <Typography>Available Offers </Typography>
                    </Stack>
                    <IconButton
                      onClick={() => toggleSection("availableOffers")}
                    >
                      {expanded.availableOffers ? (
                        <KeyboardArrowUp sx={{ fontSize: "40px" }} />
                      ) : (
                        <KeyboardArrowDown sx={{ fontSize: "40px" }} />
                      )}
                    </IconButton>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#FFF4C8",
                    width: "100%",
                    paddingY: 1,
                    paddingX: 2,
                    borderRadius: "15px",
                  }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={1}
                    >
                      <SellIcon />
                      <Typography>Apply Coupons </Typography>
                    </Stack>
                    <IconButton onClick={() => toggleSection("applyCoupons")}>
                      {expanded.applyCoupons ? (
                        <KeyboardArrowUp sx={{ fontSize: "40px" }} />
                      ) : (
                        <KeyboardArrowDown sx={{ fontSize: "40px" }} />
                      )}
                    </IconButton>
                  </Stack>
                </Box>
              </Stack>
            </Box>
            <Box
              sx={{
                bgcolor: "#FFF4C8",
                width: "40%",
                paddingY: 1,
                paddingX: { xs: 1, md: 1 },
                borderRadius: "15px",
                display: { xs: "none", ss: "block" },
              }}
            >
              <Typography
                fontWeight={500}
                fontSize={{ xs: "18px", md: "25px" }}
                padding={1}
              >
                Delivery Address
              </Typography>
              <Box
                bgcolor={"#fff"}
                padding={{ xs: 2, lg: 3 }}
                borderRadius={"15px"}
                margin={{ xs: 0.5, md: 2 }}
              >
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  gap={2}
                >
                  <Stack direction={"column"} gap={2}>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={{ xs: 1, md: 2 }}
                    >
                      <HomeOutlined />
                      {isEditing ? (
                        <TextField
                          value={home}
                          onChange={handleHomeChange}
                          size="small"
                          sx={{
                            fontSize: { xs: "12px", md: "15px" },
                            width: "100%", border: "none", p:0
                          }}
                        />
                      ) : (
                        <Typography
                          fontWeight={500}
                          fontSize={{ xs: "12px", md: "15px" }}
                        >
                          {home}
                        </Typography>
                      )}
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={{ xs: 1, md: 2 }}
                    >
                      <LocalPhoneRounded />
                      {isEditing ? (
                        <TextField
                          value={phone}
                          onChange={handlePhoneChange}
                          size="small"
                          sx={{ fontSize: { xs: "12px", md: "15px" } }}
                        />
                      ) : (
                        <Typography
                          fontWeight={500}
                          fontSize={{ xs: "12px", md: "15px" }}
                        >
                          {phone}
                        </Typography>
                      )}
                    </Stack>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={{ xs: 1, md: 2 }}
                    >
                      <LocationOnRounded />
                      {isEditing ? (
                        <TextField
                          value={address}
                          onChange={handleAddressChange}
                          size="small"
                          sx={{ fontSize: { xs: "12px", md: "15px" } }}
                        />
                      ) : (
                        <Typography
                          fontWeight={500}
                          fontSize={{ xs: "12px", md: "15px" }}
                        >
                          {address}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                  <IconButton
                    onClick={toggleEditMode}
                    sx={{ alignSelf: "flex-end" }}
                  >
                    <Typography
                      fontSize={{ xs: "12px", lg: "15px" }}
                      sx={{ cursor: "pointer", ":hover": { color: "blue" } }}
                    >
                      Change
                    </Typography>
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
        <Box sx={{ paddingX: { xs: 0, lg: 20 }, marginTop: 3 }}>
          <Stack
            direction={{ ss: "row" }}
            justifyContent={{ xs: "space-between", ss: "center" }}
            alignItems={"start"}
            gap={0}
            // width={"100%"}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: { xs: "100%", ss: "60%" },
                paddingRight: 2,
              }}
            >
              <Stack direction={"row"} justifyContent={"space-between"} p={2}>
                <Typography
                  fontSize={{ xs: "22px", md: "30px" }}
                  fontWeight={500}
                >
                  My Cart ({cart.length})
                </Typography>
                <Typography
                  marginRight={{ lg: 5 }}
                  fontSize={{ xs: "22px", md: "30px" }}
                  fontWeight={500}
                  display={{ xs: "none", ss: "block" }}
                >
                  Total: &#8358; {calculateTotal()}
                </Typography>
              </Stack>
              <Box
                sx={{
                  bgcolor: "#FFF4C8",
                  width: "100%",
                  paddingY: 1,
                  paddingX: 2,
                  borderRadius: "15px",
                }}
              >
                {cart.length === 0 ? (
                  <Typography p={3} fontSize={"21px"} fontWeight={500}>
                    No Item in your cart yet.
                    <Link
                      to={"/"}
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      {" "}
                      Continue shopping!
                    </Link>
                  </Typography>
                ) : (
                  <Stack direction="column" spacing={2} key={cart[0].id}>
                    {cart.map((item, index) => {
                      const itemPrice = price[index % price.length];
                      const discountPrice = itemPrice - 0.3 * itemPrice;
                      return (
                        <>
                          <Box
                            key={item.id}
                            sx={{
                              bgcolor: "#FFF4C8",
                              borderRadius: "15px",
                              padding: { md: 2 },
                              display: "flex",
                              flexDirection: { xs: "row", ss: "row" },
                              justifyContent: "space-between",
                              alignItems: "center",
                              width: "100%",
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={{ xs: 1, md: 2 }}
                              alignItems="center"
                            >
                              <Box
                                component={"img"}
                                src={`https://api.timbu.cloud/images/${item.photos[0].url}`}
                                alt={item.name}
                                sx={{
                                  height: { xs: 80, md: 130 },
                                  width: { xs: 100, md: 145 },
                                  borderRadius: "10px",
                                }}
                              />
                              <Stack
                                direction="column"
                                alignItems="start"
                                justifyContent="space-between"
                                spacing={1}
                              >
                                <Typography
                                  fontSize={{
                                    xs: "14px",
                                    ss: "18px",
                                    md: "21px",
                                  }}
                                  fontWeight={500}
                                >
                                  {item.name}
                                </Typography>
                                <Stack
                                  direction="row"
                                  alignItems="center"
                                  justifyContent={"start"}
                                  spacing={{ xs: 0, ss: 2 }}
                                >
                                  <Stack
                                    direction={"row"}
                                    alignItems={"center"}
                                    justifyContent={"start"}
                                  >
                                    <IconButton
                                      onClick={() => removeFromCart(item)}
                                    >
                                      <DeleteForever />
                                      <Typography
                                        fontSize={{ xs: "13px", md: "15px" }}
                                        fontWeight={500}
                                        display={{ xs: "none", md: "block" }}
                                      >
                                        Remove from cart
                                      </Typography>
                                    </IconButton>
                                  </Stack>
                                  <Box
                                    sx={{
                                      width: { xs: "70px", md: "100px" },
                                      bgcolor: "#fff",
                                      display: "flex",
                                      justifyContent: "space-between",
                                      alignItems: "center",
                                      paddingX: 1,
                                      borderRadius: "9px",
                                      marginTop: 1,
                                    }}
                                  >
                                    <IconButton
                                      onClick={() => updateQuantity(item, -1)}
                                      sx={{ fontSize: "18px" }}
                                    >
                                      -
                                    </IconButton>
                                    <Typography
                                      fontSize={{ xs: "12px", md: "16px" }}
                                    >
                                      {item.quantity}
                                    </Typography>
                                    <IconButton
                                      onClick={() => updateQuantity(item, 1)}
                                      sx={{ fontSize: "18px" }}
                                    >
                                      +
                                    </IconButton>
                                  </Box>
                                </Stack>
                              </Stack>
                            </Stack>
                            <Stack
                              direction="column"
                              alignItems="end"
                              marginTop={2}
                            > <Typography fontSize={{ xs: "16px", ss: "25px" }} fontWeight={500}>
                            &#8358; {discountPrice * item.quantity}
                          </Typography>
                          <Typography fontSize={{ xs: "10px", md: "14px" }} fontWeight={500} color={alpha("#000", 0.5)}>
                            <span style={{ textDecoration: "line-through" }}>
                              &#8358; {itemPrice}
                            </span>{" "}
                            <Typography component="span" fontSize={{ xs: "10px", md: "14px" }} fontWeight={500} sx={{ textDecoration: "none" }}>
                              30% off
                            </Typography>
                          </Typography>
                            </Stack>
                          </Box>
                          <hr />
                        </>
                      );
                    })}
                  </Stack>
                )}
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: "#FFF4C8",
                width: "40%",
                paddingY: 5,
                paddingX: 2,
                borderRadius: "15px",
                display: { xs: "none", ss: "block" },
              }}
            >
              <Stack direction={"column"} spacing={2}>
                <Typography
                  fontSize={{ xs: "20px", md: "25px" }}
                  fontWeight={500}
                  px={2}
                >
                  Payment Summary
                </Typography>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    Total MRP
                  </Typography>
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    &#8358;800
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    Discount on MRP
                  </Typography>
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    &#8358;400
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    Coupon Savings
                  </Typography>
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    &#8358;400
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    Applicable GST
                  </Typography>
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    &#8358;200
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    Delivery
                  </Typography>
                  <Typography fontSize={{ md: "20px" }} fontWeight={400}>
                    free
                  </Typography>
                </Stack>
                <hr />
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  px={2}
                  pt={4}
                >
                  <Typography fontSize={"20px"} fontWeight={400}>
                    Total
                  </Typography>
                  <Typography fontSize={"20px"} fontWeight={400}>
                    &#8358; {calculateTotal() + otherDeliveryFees}
                  </Typography>
                </Stack>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  mt: 4,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "none",
                    bgcolor: "#F9DD49",
                    fontSize: { md: "20px" },
                    fontWeight: 500,
                    width: "80%",
                    py: { xs: 1, md: 2 },
                    borderRadius: "10px",
                    color: "#000",
                    // marginLeft: "400px",
                  }}
                  disabled={cart.length === 0}
                  onClick={() => navigate("/checkout")}
                >
                  Start checkout
                </Button>
              </Box>
            </Box>
            <Box
              sx={{ width: "100%", mt: 3, mr: 5 }}
              display={{ xs: "block", ss: "none" }}
            >
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                // gap={30}
              >
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    Subtotal
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    {calculateTotal()}
                  </Typography>
                </Box>
              </Stack>
              <hr />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                // gap={30}
              >
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    Charges
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    {otherDeliveryFees}
                  </Typography>
                </Box>
              </Stack>
              <hr />
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
                // gap={30}
              >
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    Delivery
                  </Typography>
                </Box>
                <Box>
                  <Typography fontSize={"16px"} fontWeight={400}>
                    Free
                  </Typography>
                </Box>
              </Stack>
              <hr />
              <Box
              sx={{
                width: "100%",
                mt: 2,
                display: { xs: "block", md: "none" },
              }}
            >
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography fontSize={"16px"} fontWeight={500}>
                  Total
                </Typography>
                <Typography fontSize={"16px"} fontWeight={500}>
                  &#8358; {calculateTotal() + otherDeliveryFees}
                </Typography>
              </Stack>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  mt: 2,
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    border: "none",
                    bgcolor: "#F9DD49",
                    fontSize: "16px",
                    fontWeight: 500,
                    width: "100%",
                    py: 1,
                    borderRadius: "10px",
                    color: "#000",
                  }}
                  disabled={cart.length === 0}
                  onClick={() => navigate("/checkout")}
                >
                  Start Checkout
                </Button>
              </Box>
            </Box>
            </Box>
          </Stack>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default CartPage;
