import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { useStore } from "../components/StoreContext";
import { FetchSingleProduct } from "../constants/fetch";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ItemDetailPage = () => {
  
  const {
    addToCart,
    loadProductDetails,
    extraData,
    mainImage,
    loading,
    error,
    handleThumbnailClick,
    product, setError
} = useStore();

  const { id } = useParams();

  useEffect(() => {
    loadProductDetails(id);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  //   useEffect(() => {
  //     const loadProducts = async () => {
  //       try {
  //         const data = await FetchSingleProduct(`products/${id}`);
  //         setProduct(data);
  //         setMainImage(data.photos[3].url);
  //       } catch (error) {
  //         setError(error.message);
  //       } finally {
  //         setLoading(false);
  //       }
  //     };

  //     const loadExtraData = async () => {
  //       try {
  //         const data = await FetchSingleProduct(`extrainfo/products/${id}`);
  //         setExtraData(data);
  //       } catch (error) {
  //         setError(error.message);
  //       }
  //     };

  //     loadProducts();
  //     loadExtraData();
  //   }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  //   console.log(extraData);

  //   const image = product.photos[0].url;

  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Box
        sx={{
          paddingX: { lg: 15, md: 7, xs: 3 },
          marginTop: { xs: 12, sm: 16, md: 20 },
          pb: 5,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "between",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Stack
          direction={"column"}
          spacing={3}
          justifyContent={"center"}
          alignItems={"center"}
          marginLeft={{ xs: 3, sm: 0 }}
        >
          <Box
            component={"img"}
            src={`https://api.timbu.cloud/images/${mainImage}`}
            alt={product.name}
            height={"65vh"}
            // width={"90%"}
            sx={{ objectFit: "contain" }}
          />
          <Stack direction={"row"} spacing={1} sx={{ maxWidth: "100vw" }}>
            {product.photos.map((image) => (
              <Box
                key={""}
                component={"img"}
                src={`https://api.timbu.cloud/images/${image.url}`}
                alt={image.name}
                height={"10vh"}
                sx={{
                  border: "1px solid black",
                  objectFit: "contain",
                  width: 100,
                  p: 1,
                  borderRadius: "10px",
                }}
                onClick={() => handleThumbnailClick(image.url)}
              />
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "16px", ss: "28px" },
              fontWeight: 600,
              marginBottom: { xs: 2, ss: 4 },
            }}
          >
            {product.name}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "14px", ss: "20px" },
              fontWeight: 600,
              marginBottom: { xs: 2, ss: 4 },
            }}
          >
            Price:&nbsp;
            <Typography
              component={"span"}
              sx={{
                color: "#000",
                fontSize: { xs: "14px", ss: "20px" },
                fontWeight: 400,
                marginBottom: { xs: 2, ss: 4 },
              }}
            >
              &#8358;{product.current_price} &nbsp;
            </Typography>
            <Typography
              component={"span"}
              sx={{
                color: "#00000085",
                fontSize: { xs: "14px", ss: "12px" },
                fontWeight: 400,
                marginBottom: { xs: 2, ss: 4 },
              }}
            >
              (discount available at purchase)
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "14px", ss: "20px" },
              fontWeight: 600,
              marginBottom: { xs: 2, ss: 4 },
            }}
          >
            Available sizes: &nbsp;
            <Typography
              component={"span"}
              sx={{
                color: "#000",
                fontSize: { xs: "14px", ss: "20px" },
                fontWeight: 400,
                marginBottom: { xs: 2, ss: 4 },
              }}
            >
              {/* {extraData[0].value} */}
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "14px", ss: "20px" },
              fontWeight: 600,
              marginBottom: { xs: 2, ss: 4 },
            }}
          >
            Quantity Avaialble: &nbsp;
            <Typography
              component={"span"}
              sx={{
                color: "#000",
                fontSize: { xs: "14px", ss: "20px" },
                fontWeight: 400,
                marginBottom: { xs: 2, ss: 4 },
              }}
            >
              {product.available_quantity}
            </Typography>
          </Typography>

          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "14px", ss: "20px" },
              fontWeight: 600,
              marginBottom: { xs: { ss: 2, xs: 1 } },
            }}
          >
            Product description:
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: { xs: "14px", ss: "20px" },
              fontWeight: 400,
              marginBottom: { xs: 2, ss: 4 },
              lineHeight: { ss: "40px", sm: "30px", xs: "25px" },
            }}
          >
            {product.description}
          </Typography>

          <Button
            variant="contained"
            onClick={() => addToCart(product)}
            sx={{
              width: { lg: "30%", ss: "50%" },
              mx: "25%",
            }}
          >
            Add to Cart
          </Button>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};

export default ItemDetailPage;
