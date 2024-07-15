import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Box,
  IconButton,
  Stack,
  Collapse,
  alpha,
  TextField,
} from "@mui/material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { useStore } from "../components/StoreContext";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  DeleteForever,
  HomeOutlined,
  LocalPhoneRounded,
  LocationOnRounded,
  Edit,
  Check,
} from "@mui/icons-material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaymentModal from "../components/PaymentModal";
import { price } from "../constants/constants";

const Checkout = () => {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    setCart,
    handleChange,
    selectedIndex,
    selectedPaymentIndex,
    handlePaymentChange,
    isEditing,
    home,
    phone,
    address,
    toggleEditMode,
    handleHomeChange,
    handleAddressChange,
    handlePhoneChange,
    firstName,
    lastName,
    phoneNumber,
    email,
    editUserInfo,
    toggleEditUserInfo,
    handleFirstNameChange,
    handleLastNameChange,
    handlePhoneNumberChange,
    handleEmailChange,
  } = useStore();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((total, item, index) => {
      const itemPrice = price[index % price.length];
      return total + (itemPrice - itemPrice * 0.3) * item.quantity;
    }, 0);
  };

  const otherDeliveryFees = 800 + 400 + 400 + 200;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePayment = () => {
    setIsModalOpen(true);
    setCart([]);
  };

  const items = [
    {
      icon: <AirportShuttleIcon sx={{ fontSize: "60px" }} />,
      label: "Same day",
    },
    { icon: <PedalBikeIcon sx={{ fontSize: "60px" }} />, label: "Express" },
    { icon: <PlaceIcon sx={{ fontSize: "60px" }} />, label: "Normal" },
    {
      icon: (
        <>
          <PlaceIcon sx={{ fontSize: "60px" }} />
          <Stack>
            <Typography fontSize={"16px"} fontWeight={275}>
              Zip code
            </Typography>
            <Typography fontSize={"24px"} fontWeight={400}>
              054887
            </Typography>
          </Stack>
          <hr />
        </>
      ),
    },
  ];

  const payment = [
    { icon: "/google.png", label: "Pay" },
    { icon: "/apple.png", label: "Pay" },
    { icon: "/mastercard.png", label: "" },
    { icon: "/plus.png", label: "New Card" },
  ];

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box>
        <Box>
          <Navbar />
        </Box>

        <Box
          sx={{
            paddingX: { xs: 5, lg: 20 },
            marginTop: { xs: 10, sm: 16, md: 20 },
            pb: { xs: 2, md: 5 },
          }}
        >
          <Box>
            <Typography
              fontSize={{ xs: "25px", md: "50px" }}
              fontWeight={600}
              mb={{ xs: 1, ss: 3 }}
            >
              Checkout
            </Typography>
            <Typography
              fontSize={{ xs: "18px", md: "25px" }}
              fontWeight={300}
              mb={{ xs: 1, ss: 3 }}
            >
              This is the counter where you pay for the things you are buying
            </Typography>
          </Box>
          <Box>
            <Stack direction={{ xs: "column-reverse", md: "row" }} spacing={3}>
              {/* One */}
              <Box sx={{ width: "100%" }}>
                <Box>
                  <Stack
                    direction={"row"}
                    justifyContent={"space-start"}
                    alignItems={"center"}
                    spacing={5}
                    mb={1}
                  >
                    <Typography
                      fontSize={{ xs: "20px", md: "30px" }}
                      fontWeight={500}
                      my={4}
                    >
                      1. Contact Information
                    </Typography>
                    <IconButton onClick={toggleEditUserInfo}>
                      {editUserInfo ? (
                        <Check sx={{ fontSize: "20px" }} />
                      ) : (
                        <Edit sx={{ fontSize: "20px" }} />
                      )}
                    </IconButton>
                  </Stack>
                  <Grid
                    container
                    gap={{ xs: 2, md: 4 }}
                    sx={{ pl: { xs: 2, md: 4 } }}
                  >
                    <Grid item sx={{ width: "100%" }}>
                      <Card
                        elevation={0}
                        sx={{
                          bgcolor: "#FFF4C8",
                          width: { xs: "100%", md: "500px" },
                          px: 2,
                          py: { xs: 3, md: 4 },
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <PersonOutlineIcon
                              sx={{ fontSize: { xs: "50px", md: "60px" } }}
                            />
                            <Stack>
                              <Typography fontSize={"16px"} fontWeight={275}>
                                First Name
                              </Typography>
                              {editUserInfo ? (
                                <TextField
                                  value={firstName}
                                  onChange={handleFirstNameChange}
                                  size="small"
                                  sx={{
                                    fontSize: { xs: "18px", md: "24px" },
                                    width: "100%",
                                    border: "none",
                                    mb: 1,
                                  }}
                                />
                              ) : (
                                <Typography
                                  fontWeight={500}
                                  fontSize={{ xs: "18px", md: "24px" }}
                                >
                                  {firstName}
                                </Typography>
                              )}
                            </Stack>
                          </Box>
                        </Box>
                        <hr
                          style={{
                            marginTop: -3,
                            borderTop: "1px solid #000",
                            borderBottom: "none",
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
                      </Card>
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                      <Card
                        elevation={0}
                        sx={{
                          bgcolor: "#FFF4C8",
                          width: { xs: "100%", md: "500px" },
                          px: 2,
                          py: 4,
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <PeopleAltOutlinedIcon
                              sx={{ fontSize: { xs: "50px", md: "60px" } }}
                            />
                            <Stack>
                              <Typography fontSize={"16px"} fontWeight={275}>
                                Last Name
                              </Typography>
                              {editUserInfo ? (
                                <TextField
                                  value={lastName}
                                  onChange={handleLastNameChange}
                                  size="small"
                                  sx={{
                                    fontSize: { xs: "18px", md: "24px" },
                                    width: "100%",
                                    border: "none",
                                    mb: 1,
                                  }}
                                />
                              ) : (
                                <Typography
                                  fontWeight={500}
                                  fontSize={{ xs: "18px", md: "24px" }}
                                >
                                  {lastName}
                                </Typography>
                              )}
                            </Stack>
                          </Box>
                        </Box>
                        <hr
                          style={{
                            marginTop: -3,
                            borderTop: "1px solid #000",
                            borderBottom: "none",
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
                      </Card>
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                      <Card
                        elevation={0}
                        sx={{
                          bgcolor: "#FFF4C8",
                          width: { xs: "100%", md: "500px" },
                          px: 2,
                          py: 4,
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <CallRoundedIcon
                              sx={{ fontSize: { xs: "50px", md: "60px" } }}
                            />
                            <Stack>
                              <Typography fontSize={"16px"} fontWeight={275}>
                                Phone Number
                              </Typography>
                              {editUserInfo ? (
                                <TextField
                                  value={phoneNumber}
                                  onChange={handlePhoneNumberChange}
                                  size="small"
                                  sx={{
                                    fontSize: { xs: "18px", md: "24px" },
                                    width: "100%",
                                    border: "none",
                                    mb: 1,
                                  }}
                                />
                              ) : (
                                <Typography
                                  fontWeight={500}
                                  fontSize={{ xs: "18px", md: "24px" }}
                                >
                                  {phoneNumber}
                                </Typography>
                              )}
                            </Stack>
                          </Box>
                        </Box>
                        <hr
                          style={{
                            marginTop: -3,
                            borderTop: "1px solid #000",
                            borderBottom: "none",
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
                      </Card>
                    </Grid>
                    <Grid item sx={{ width: "100%" }}>
                      <Card
                        elevation={0}
                        sx={{
                          bgcolor: "#FFF4C8",
                          width: { xs: "100%", md: "500px" },
                          px: 2,
                          py: 4,
                          borderRadius: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 1,
                          }}
                        >
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <EmailIcon
                              sx={{ fontSize: { xs: "50px", md: "60px" } }}
                            />
                            <Stack>
                              <Typography fontSize={"16px"} fontWeight={275}>
                                Mail
                              </Typography>
                              {editUserInfo ? (
                                <TextField
                                  value={email}
                                  onChange={handleEmailChange}
                                  size="small"
                                  sx={{
                                    fontSize: { xs: "18px", md: "24px" },
                                    width: "100%",
                                    border: "none",
                                    mb: 1,
                                  }}
                                />
                              ) : (
                                <Typography
                                  fontWeight={500}
                                  fontSize={{ xs: "18px", md: "24px" }}
                                >
                                  {email}
                                </Typography>
                              )}
                            </Stack>
                          </Box>
                        </Box>
                        <hr
                          style={{
                            marginTop: -3,
                            borderTop: "1px solid #000",
                            borderBottom: "none",
                            marginLeft: 10,
                            marginRight: 10,
                          }}
                        />
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
                <Box>
                  <Typography
                    fontSize={{ xs: "20px", md: "30px" }}
                    fontWeight={500}
                    my={4}
                  >
                    2. Delivery Method
                  </Typography>

                  <Grid container gap={{ xs: 2, md: 4 }} sx={{ pl: { md: 4 } }}>
                    {items.map((item, index) => (
                      <Grid
                        item
                        key={index}
                        sx={{ cursor: "pointer", width: "100%" }}
                        onClick={() => handleChange(index)}
                      >
                        <Card
                          elevation={0}
                          sx={{
                            bgcolor:
                              selectedIndex === index ? "#F9DD49" : "#FFF4C8",
                            width: { xs: "100%", md: "500px" },
                            height: "145px",
                            px: 2,
                            py: 4,
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: `${index === 3 ? "column" : "row"}`,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 1,
                            }}
                          >
                            {item.icon}
                            <Typography fontSize={"21px"} fontWeight={400}>
                              {item.label}
                            </Typography>
                          </Box>
                          <hr
                            style={{
                              display: `${index === 3 ? "block" : "none"}`,
                              width: "60%",
                              borderTop: "1px solid #000",
                              borderBottom: "none",
                            }}
                          />
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box>
                  <Typography
                    fontSize={{ xs: "20px", md: "30px" }}
                    fontWeight={500}
                    my={4}
                  >
                    3. Payment Method
                  </Typography>

                  <Grid container gap={{ xs: 2, md: 4 }} sx={{ pl: { md: 4 } }}>
                    {payment.map((item, index) => (
                      <Grid
                        item
                        key={index}
                        sx={{ cursor: "pointer", width: "100%" }}
                        onClick={() => handlePaymentChange(index)}
                      >
                        <Card
                          elevation={0}
                          sx={{
                            bgcolor:
                              selectedPaymentIndex === index
                                ? "#F9DD49"
                                : index === 3
                                ? "#fff"
                                : "#FFF4C8",
                            width: { xs: "100%", md: "500px" },
                            height: { xs: "70px", ss: "145px" },
                            px: 2,
                            py: 4,
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: `${index === 3 ? "column" : "row"}`,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: 1,
                            }}
                          >
                            <img src={item.icon} />
                            <Typography fontSize={"21px"} fontWeight={400}>
                              {item.label}
                            </Typography>
                          </Box>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>

              {/* Two */}
              <Box sx={{ width: { xs: "100%", lg: "40%" } }}>
                <Box sx={{ width: "100%" }}>
                  <Box
                    sx={{
                      bgcolor: "#FFF4C8",
                      width: "100%",
                      paddingY: 1,
                      paddingX: { xs: 1, md: 2 },
                      borderRadius: "15px",
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
                      margin={{ xs: 1.5, lg: 2 }}
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
                                  width: "100%",
                                  border: "none",
                                  p: 0,
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
                            sx={{
                              cursor: "pointer",
                              ":hover": { color: "blue" },
                            }}
                          >
                            {isEditing ? "Done" : "Change"}
                          </Typography>
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    bgcolor: "#FFF4C8",
                    width: "100%",
                    paddingY: 5,
                    paddingX: 2,
                    borderRadius: "15px",
                    mt: 4,
                  }}
                  display={{ xs: "none", md: "block" }}
                >
                  <Stack direction={"column"} spacing={2}>
                    <Typography fontSize={"25px"} fontWeight={500} px={2}>
                      Payment Summary
                    </Typography>
                    <Stack
                      direction={"row"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      px={2}
                      pt={4}
                    >
                      <Typography fontSize={"20px"} fontWeight={400}>
                        Total MRP
                      </Typography>
                      <Typography fontSize={"20px"} fontWeight={400}>
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
                      <Typography fontSize={"20px"} fontWeight={400}>
                        Discount on MRP
                      </Typography>
                      <Typography fontSize={"20px"} fontWeight={400}>
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
                      <Typography fontSize={"20px"} fontWeight={400}>
                        Coupon Savings
                      </Typography>
                      <Typography fontSize={"20px"} fontWeight={400}>
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
                      <Typography fontSize={"20px"} fontWeight={400}>
                        Applicable GST
                      </Typography>
                      <Typography fontSize={"20px"} fontWeight={400}>
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
                      <Typography fontSize={"20px"} fontWeight={400}>
                        Delivery
                      </Typography>
                      <Typography fontSize={"20px"} fontWeight={400}>
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
                        &#8358; &nbsp;
                        {cart.length === 0
                          ? "0"
                          : calculateTotal() + otherDeliveryFees}
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
                        fontSize: "21px",
                        fontWeight: 500,
                        width: "80%",
                        py: 2,
                        borderRadius: "10px",
                        color: "#000",
                        // marginLeft: "400px",
                      }}
                      disabled={cart.length === 0}
                      onClick={handlePayment}
                    >
                      Pay
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Stack>
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
                  &#8358; &nbsp;
                  {cart.length === 0
                    ? "0"
                    : calculateTotal() + otherDeliveryFees}
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
                  onClick={handlePayment}
                >
                  Pay
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <PaymentModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          deliveryInfo={{ home, address, phone }}
          contactInfo={{ firstName, lastName, phoneNumber, email }}
        />
      </Box>
      <Footer />
    </Box>
  );
};

export default Checkout;
