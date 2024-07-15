import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Stack,
  Box,
  alpha,
  IconButton,
  Link as MuiLink,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStore } from "./StoreContext";

const ItemCard = ({ item, addToCart, index }) => {
  const { toggleFavorite, isFavorite } = useStore();
  const navigate = useNavigate();
  const favorite = isFavorite[item.id] || false;
  // console.log(item);
  return (
    <Card
      sx={{
        width: "100%",
        height: { md: "450px", xs: "320px" },
        position: "relative",
        borderRadius: "15px",
      }}
      elevation={3}
    >
      <CardMedia
        component="img"
        image={`https://api.timbu.cloud/images/${item.photos[0].url}`}
        alt={item.name}
        sx={{
          width: "100%",
          height: "70%",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          height: { xs: "30%", ss: "134px" },
          bgcolor: "#fff",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "12px", ss: "21px" },
            fontWeight: 600,
            marginBottom: { xs: 1, ss: 2 },
          }}
        >
          <MuiLink component={Link} to={`/products/${item.id}`} sx={{color: "#000", textDecoration: 'none', ":hover": {color: "blue"}}}>
            {item.name}
          </MuiLink>
        </Typography>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack>
            <Typography
              sx={{
                color: alpha("#000", 0.7),
                fontSize: { xs: "12px", ss: "15px" },
                fontWeight: 400,
                // marginBottom: 1,
              }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                color: "#000",
                fontSize: { xs: "16px", ss: "20px" },
                fontWeight: 600,
              }}
            >
              &#8358;{item.current_price[0].NGN[0]}
            </Typography>
          </Stack>
          <IconButton
            sx={{
              bgcolor: "#F9DD49",
              borderRadius: "10px",
              width: { xs: 40, ss: 69 },
              height: { xs: 30, ss: 56 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => addToCart(item)}
          >
            <ShoppingCartIcon sx={{ fontSize: { xs: "20px", ss: "40px" } }} />
          </IconButton>
        </Stack>
      </CardContent>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            position: "absolute",
            top: 10,
            // height: { xs: "100px", ss: "134px" },
            // bgcolor: "#fff",
            width: "80%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4
          }}
        >
          <Typography
            fontSize={"12px"}
            bgcolor={item.bgColor}
            p={"5px"}
            color={"#FFF"}
            borderRadius={1}
          >
            New
          </Typography>
          <Box sx={{ color: favorite ? "red" : "white" }}>
            <IconButton onClick={toggleFavorite}></IconButton>
            <FavoriteIcon
              onClick={() => toggleFavorite(item.id)}
              sx={{
                bgcolor: item.bgColor,
                borderRadius: "50%",
                p: "5px",
                fontSize: "25px",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </Card>
  );
};

export default ItemCard;
