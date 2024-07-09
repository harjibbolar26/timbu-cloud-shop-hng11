import { Box, Stack, Typography, Link as MuiLink } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#F9DD49",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          paddingX: { xs: "5px", ss: "30px" },
          paddingY: "20px",
          maxWidth: "100vw",
        }}
      >
        <Stack
          direction={{ ss: "row", xs: "column" }}
          alignItems={"center"}
          justifyContent={{ ss: "space-between", xs: "start" }}
          gap={2}
          width={"100%"}
        >
          <Box>
            <Box
              component="img"
              src="/logo.png"
              alt="logo"
              sx={{
                width: {
                  xs: "100px",
                  md: "150px", // 960px and up
                  lg: "150px", // 1280px and up
                },
              }}
            />
          </Box>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={{ xs: "space-between", ss: "center" }}
            gap={{ xs: 6, ss: 4, md: 10 }}
            // mr={{ sm: 6 }}
          >
            <Stack
              direction={"column"}
              alignItems={"start"}
              justifyContent={"space-between"}
            >
              <Typography
                fontSize={{ xs: "14px", ss: "16px", md: "20px" }}
                fontWeight={400}
              >
                Company
              </Typography>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                About
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Store
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                FAQ
              </MuiLink>
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"start"}
              justifyContent={"space-between"}
            >
              <Typography
                fontSize={{ xs: "14px", ss: "16px", md: "20px" }}
                fontWeight={400}
              >
                Service
              </Typography>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                About
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Store
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                FAQ
              </MuiLink>
            </Stack>
            <Stack
              direction={"column"}
              alignItems={"start"}
              justifyContent={"space-between"}
              width={{ss: 90, md: 120}}
            >
              <Typography
                fontSize={{ xs: "14px", ss: "16px", md: "20px" }}
                fontWeight={400}
                // pr={2}
              >
                Follow Us
              </Typography>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                About
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                Store
              </MuiLink>
              <MuiLink
                to={"/"}
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: "12px", ss: "15px" },
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                FAQ
              </MuiLink>
            </Stack>
          </Stack>
          <Stack direction={"column"} justifyContent={"center"}>
            <Typography
              textTransform={"uppercase"}
              fontSize={{ xs: "16px", ss: "21px" }}
              fontWeight={300}
              marginBottom={1}
              textAlign={{ xs: "center", ss: "" }}
            >
              Newsletter
            </Typography>
            <Box sx={{ width: { xs: "200px", ss: "300px", md: "300px" } }}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
                bgcolor={"#fff"}
                padding={"2px"}
                borderRadius={"10px"}
              >
                <input
                  type="text"
                  placeholder="Enter your e-mail"
                  style={{ border: "none", width: "100%" }}
                />
                <Box
                  sx={{
                    bgcolor: "#F9DD49",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 2,
                    borderRadius: "10px",
                  }}
                >
                  <AddIcon sx={{ fontSize: "14px" }} />
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;
