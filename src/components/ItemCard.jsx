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
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStore } from "./StoreContext";

const ItemCard = ({ item, addToCart, index }) => {
  const { toggleFavorite, isFavorite } = useStore();
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        width: "100%",
        position: "relative",
        borderRadius: "20px",
        padding: 0,
      }}
      elevation={3}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.name}
        sx={{
          width: "100%",
          p: 0,
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          bottom: 0,
          height: { xs: "100px", ss: "134px" },
          bgcolor: "#fff",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "13px", ss: "21px" },
            fontWeight: 600,
            marginBottom: { xs: 1, ss: 2 },
          }}
        >
          {item.name}
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
              ${item.price}
            </Typography>
          </Stack>
          <IconButton
            sx={{
              bgcolor: "#F9DD49",
              borderRadius: "10px",
              width: { xs: 50, ss: 69 },
              height: { xs: 40, ss: 56 },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={() => addToCart(item)}
          >
            <ShoppingCartIcon sx={{ fontSize: { xs: "30px", ss: "40px" } }} />
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
            // zIndex: 20,
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
          <Box sx={{ color: isFavorite ? "red" : "white" }}>
            <IconButton onClick={toggleFavorite}></IconButton>
            <FavoriteIcon
              onClick={() => toggleFavorite(index)}
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
