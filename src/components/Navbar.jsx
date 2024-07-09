import React from "react";
import { Search, Close, HomeOutlined } from "@mui/icons-material";
import {
  alpha,
  Box,
  Card,
  Stack,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartCheckoutOutlinedIcon from "@mui/icons-material/ShoppingCartCheckoutOutlined";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useStore } from "./StoreContext";

const Navbar = () => {
  const location = useLocation();
  const navigation = useNavigate();
  const isXs = useMediaQuery((theme) => theme.breakpoints.down(450));
  const { searchQuery, handleSearchChange, handleClearSearch } = useStore();
  return (
    <Card
      elevation={0}
      component={"nav"}
      sx={{
        px: { xs: 3, sm: 4, md: 10 },
        backgroundColor: "#fff",
        borderRadius: "0px",
        // py: 5,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 10,
        height: { xs: 70, sm: 80, ss: 100, md: 144 },
        padding: "auto",
        borderBottom: "1px solid #00000047",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          component="img"
          src="/logo.png"
          alt="logo"
          sx={{
            width: {
              xs: "70px",
              ss: "120px",
              md: "150px",
              lg: "150px",
            },
          }}
          onClick={() => navigation("/")}
        />
        <Stack
          direction={"row"}
          sx={{
            backgroundColor: { xs: "transparent", ss: "#FFF4C8" },
            width: { xs: "40%", md: "40%" },
            padding: 2,
            borderRadius: "15px",
          }}
        >
          <Search />{" "}
          <input
            type="search"
            placeholder="Search Products"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              fontSize: { xs: "10px", ss: "14px" },
              background: "transparent",
              display: { xs: "none", ss: "block" },
            }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Close
            onClick={handleClearSearch}
            sx={{ display: { xs: "none", ss: "block" } }}
          />
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
          gap={{ xs: 1, md: 4 }}
        >
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              backgroundColor: "#FFF4C8",
              padding: { xs: 1, md: 2 },
              borderRadius: "15px",
            }}
          >
            <MuiLink
              component={Link}
              to={location.pathname === "/" ? "/cart" : "/"}
              sx={{
                fontSize: { xs: "10px", ss: "12px", md: "16px" },
                fontWeight: 400,
                textDecoration: "none",
                color: "#000",
                display: "flex",
                gap: { xs: 2, md: 2 },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography fontSize={{ xs: "10px", ss: "12px", md: "16px" }}>
                {!isXs && (location.pathname === "/" ? "Your Cart" : "Home")}
              </Typography>
              {location.pathname === "/" ? (
                <ShoppingCartIcon />
              ) : (
                <HomeOutlined />
              )}
            </MuiLink>
          </Stack>
          <Stack
            direction={"row"}
            gap={1}
            sx={{
              backgroundColor: "#FFF4C8",
              padding: { xs: 1, md: 2 },
              borderRadius: "15px",
            }}
          >
            <MuiLink
              component={Link}
              to={location.pathname === "/checkout" ? "/cart" : "/checkout"}
              sx={{
                fontSize: { xs: "10px", md: "16px" },
                fontWeight: 400,
                textDecoration: "none",
                color: "#000",
                display: "flex",
                gap: { xs: 2, md: 6 },
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!isXs &&
                (location.pathname === "/checkout" ? "Your Cart" : "Checkout")}
              {location.pathname === "/checkout" ? (
                <ShoppingCartIcon />
              ) : (
                <ShoppingCartCheckoutOutlinedIcon />
              )}
              {/* <ShoppingCartIcon /> */}
            </MuiLink>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default Navbar;
