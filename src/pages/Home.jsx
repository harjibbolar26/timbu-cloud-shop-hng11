import React, { useEffect, useState } from "react";
import ItemCard from "../components/ItemCard";
import {
  Box,
  Button,
  Card,
  Drawer,
  Grid,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "../components/StoreContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Close, HomeOutlined, KeyboardArrowRight } from "@mui/icons-material";
import { alpha } from "@mui/material";
import { useTheme } from "@emotion/react";
import { FetchProduct } from "../constants/fetch";
import Loader from "../components/Loader";

const Home = () => {
  const {
    addToCart,
    loading, error,
    page,
    setPage,
    handlePreviousPage,
    handleNextPage,
    filteredProducts,
  } = useStore();

  // console.log(productList);
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Stack direction={"row"}>
        <Sidebar />
        <Stack sx={{ width: "100%", overflowX: "hidden" }}>
          <Stack
            sx={{
              overflowY: "auto",
              marginTop: { xs: 17, ss: 20 },
              marginLeft: 3,
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"start"}
              alignItems={"center"}
              gap={2}
              marginBottom={2}
            >
              <Box>
                <HomeOutlined sx={{ fontSize: "40px" }} />
              </Box>
              <Stack
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "16px", ss: "23px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.6)}
                  >
                    Main Page
                  </Typography>
                  <KeyboardArrowRight />
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "16px", ss: "23px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.6)}
                  >
                    Category
                  </Typography>
                  <KeyboardArrowRight />
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"start"}
                  alignItems={"center"}
                >
                  <Typography
                    fontSize={{ xs: "16px", ss: "23px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.6)}
                  >
                    Tote bags
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Box>
              <Typography
                fontSize={{ xs: "30px", ss: "40px" }}
                fontWeight={600}
                color={"#000000"}
              >
                Tote bags
              </Typography>
            </Box>
            <Box sx={{ marginY: 5 }}>
              <Stack
                direction={"row"}
                justifyContent={"start"}
                alignItems={"center"}
                gap={{ xs: 1, ss: 4 }}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    backgroundColor: "#FFF4C8",
                    padding: { xs: 1.5, ss: 2 },
                    borderRadius: "15px",
                    width: { xs: "100px", ss: "186px" },
                  }}
                >
                  <Typography
                    fontSize={{ xs: "15px", ss: "21px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.5)}
                  >
                    Colour
                  </Typography>
                  <Close
                    sx={{ fontSize: { xs: "14px", sm: "16px", ss: "20px" } }}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    backgroundColor: "#FFF4C8",
                    padding: { xs: 1.5, ss: 2 },
                    borderRadius: "15px",
                    width: { xs: "100px", ss: "186px" },
                  }}
                >
                  <Typography
                    fontSize={{ xs: "15px", ss: "21px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.5)}
                  >
                    Price
                  </Typography>
                  <Close
                    sx={{ fontSize: { xs: "14px", sm: "16px", ss: "20px" } }}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    backgroundColor: "#FFF4C8",
                    padding: { xs: 1.5, ss: 2 },
                    borderRadius: "15px",
                    width: { xs: "100px", ss: "186px" },
                  }}
                >
                  <Typography
                    fontSize={{ xs: "15px", ss: "21px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.5)}
                  >
                    Type
                  </Typography>
                  <Close
                    sx={{ fontSize: { xs: "14px", sm: "16px", ss: "20px" } }}
                  />
                </Stack>
                <Stack
                  direction={"row"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  gap={1}
                  sx={{
                    backgroundColor: "#FFF4C8",
                    padding: 1,
                    borderRadius: "15px",
                    width: { xs: "150px", ss: "226px" },
                  }}
                >
                  <Typography
                    fontSize={{ xs: "10px", ss: "15px" }}
                    fontWeight={400}
                    color={alpha("#000000", 0.5)}
                  >
                    Clear all filters
                  </Typography>
                  <Close
                    sx={{ fontSize: { xs: "14px", sm: "16px", ss: "20px" } }}
                  />
                </Stack>
              </Stack>
            </Box>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              sx={{ paddingY: "50px", paddingRight: "40px" }}
              bgcolor={"#fff"}
            >
              {loading ? (
                <Box sx={{
                  display: 'flex',
                  flexDirection: "column",
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 2,
                  height: 'calc(60vh - 64px)', 
                  width: '100%',
                  textAlign: 'center',
                  padding: '20px'
                }}>
                  <Loader/>
                  <Typography>
                    Please wait while we fetch the products
                  </Typography>
                </Box>
              
              ) : filteredProducts && filteredProducts.length > 0 ? (
                filteredProducts.map((item, index) => (
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={6}
                    xs={12}
                    key={item.id}
                    // sx={{ width: "20px" }}
                  >
                    <ItemCard item={item} addToCart={addToCart} index={index} />
                  </Grid>
                ))
              ) : (
                <Typography>{error ? error : "No item matches your search!"}</Typography>
              )}
            </Grid>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              marginBottom={4}
            >
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "20px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"}
                  cursor: page === 1 ? "not-allowed" : "pointer",
                }}
                onClick={handlePreviousPage}
                disabled={page === 1}
              >
                Prev
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"},
                  display: {xs: "none", ss: "block"}
                }}
                onClick={() => setPage(1)}
              >
                1
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"},
                  display: {xs: "none", ss: "block"}
                }}
                onClick={() => setPage(2)}
              >
                2
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"},
                  display: {xs: "none", ss: "block"}
                }}
                onClick={() => setPage(3)}
              >
                3
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  cursor: "not-allowed",
                  // width: {xs: "1px"},
                  display: {xs: "none", md: "block"}
                }}
              >
                4
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  cursor: "not-allowed",
                  // width: {xs: "1px"},
                  display: {xs: "none", md: "block"}
                }}
              >
                -
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  cursor: "not-allowed",
                  width: {xs: "10%"},
                  display: {xs: "none", md: "block"}
                }}
              >
                5
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "20px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"}
                  cursor: page === 3 ? "not-allowed" : "pointer",
                  display: {xs: "block", ss: "none"}
                }}
              >
                {page}
              </Button>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "20px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"}
                  cursor: page === 3 ? "not-allowed" : "pointer",
                }}
                onClick={handleNextPage}
                disabled={page === 3}
              >
                Next
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    
    </Box>
  );
};

export default Home;
