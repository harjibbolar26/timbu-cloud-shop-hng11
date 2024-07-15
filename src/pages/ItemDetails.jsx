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
    setLoading,
    error,
    handleThumbnailClick,
    product,
    setError,
  } = useStore();

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      loadProductDetails(id);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  if (!product) {
    return <div>Product not found</div>;
  }

  //   console.log(extraData);
  console.log(product);

  //   const image = product.photos[0].url;

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <Box>
        <Navbar />
      </Box>
      {loading ? (
        <Box sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 64px)', 
    width: '100%',
    textAlign: 'center',
    padding: '20px'
  }}>
    <Typography>
      Loading... Please wait while we fetch the product details.
    </Typography>
  </Box>

      ) : (
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
            //   marginLeft={{ xs: 3, sm: 0 }}
          >
            <Box
              component={"img"}
              src={`https://api.timbu.cloud/images/${mainImage}`}
              alt={product.name}
              height={"65vh"}
              width={"80%"}
              sx={{ objectFit: "contain" }}
            />
            <Stack direction={"row"} spacing={1} sx={{ maxWidth: "100vw" }}>
              {product && product.photos && Array.isArray(product.photos) ? (
                product.photos.map((image) => (
                  <Box
                    key={""}
                    component={"img"}
                    src={`https://api.timbu.cloud/images/${image.url}`}
                    alt={image.name}
                    height={"10vh"}
                    sx={{
                      // border: "1px solid black",
                      objectFit: "contain",
                      width: { ss: 100, xs: "100%" },
                      // p: 1,
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleThumbnailClick(image.url)}
                  />
                ))
              ) : (
                <Typography>No photos available</Typography>
              )}
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
                {product.extra_infos[0].value}
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
      )}
      <Footer />
    </Box>
  );
};

export default ItemDetailPage;
