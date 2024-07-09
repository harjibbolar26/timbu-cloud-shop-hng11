import React from "react";
import ItemCard from "../components/ItemCard";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useStore } from "../components/StoreContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeOutlined, KeyboardArrowRight, Close, Menu } from "@mui/icons-material";
import { alpha } from "@mui/material";

const Home = ({ items }) => {
  const { addToCart } = useStore();
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Navbar />
      <Stack direction={"row"}>
        {/* <Box
          sx={{
            width: "300px",
            backgroundColor: "#f4f4f4",
          }}
        >
        </Box> */}
        <Sidebar />
        <Stack sx={{ width: "100%", overflowX: "hidden" }}>
          <Stack
            sx={{
              overflowY: "auto",
              marginTop: {xs: 13, ss:20},
              marginLeft: 3,
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"start"}
              alignItems={"center"}
              gap={2}
              marginBottom={3}
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
            <Box sx={{ marginY: 3 }}>
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
              sx={{ paddingY: "50px" }}
            >
              {items.map((item) => (
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={6}
                  xs={6}
                  key={item.id}
                  // sx={{ width: "20px" }}
                >
                  <ItemCard item={item} addToCart={addToCart} />
                </Grid>
              ))}
            </Grid>
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              gap={2}
              marginBottom={4}
            >
              <Typography
                fontSize={"20px"}
                fontWeight={300}
                display={{ xs: "none", ss: "block" }}
              >
                Previous
              </Typography>
              <Button
                variant="text"
                sx={{
                  bgcolor: "#FFF4C8",
                  fontSize: { xs: "12px", ss: "25px" },
                  fontWeight: 300,
                  color: "#000",
                  borderRadius: "7px",
                  padding: 1,
                  // width: {xs: "1px"}
                }}
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
                  // width: {xs: "1px"}
                }}
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
                  // width: {xs: "1px"}
                }}
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
                  // width: {xs: "1px"}
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
                  // width: {xs: "1px"}
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
                  // width: {xs: "1px"}
                }}
              >
                5
              </Button>
              <Typography
                fontSize={"20px"}
                fontWeight={300}
                display={{ xs: "none", ss: "block" }}
              >
                Next
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Home;
