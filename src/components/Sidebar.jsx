import React, { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Typography,
  Box,
  Paper,
  Stack,
  Checkbox,
  Slider,
  Collapse,
  IconButton,
  useMediaQuery,
  Drawer,
} from "@mui/material";
import {
  KeyboardArrowUp,
  KeyboardArrowDown,
  Delete,
  DeleteForever,
  Close,
  Menu,
} from "@mui/icons-material";
import { useStore } from "./StoreContext";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";

const category = [
  { label: "T-shirt" },
  { label: "Beanies" },
  { label: "Hoodies" },
  { label: "Tote Bags" },
  { label: "Bucket Hats" },
  { label: "Sun  Glasses" },
  { label: "Water Bottles" },
];
const type = [
  { label: "Plain" },
  { label: "With caption" },
  { label: "With zip" },
  { label: "Without zip" },
];
const colour = [
  "#000000",
  "#041AE3",
  "#05FF00",
  "#FF0000",
  "#FA00F0",
  "#07F0FF",
  "#FFF500",
  "#AE03FF",
  "#FF6D04",
  "#40B435",
];

const Sidebar = () => {
  const {
    price,
    handlePriceChange,
    expanded,
    toggleSection,
    isSidebarOpen,
    toggleSidebar,
  } = useStore();

  const SidebarContent = ({ isDrawer = false }) => (
    <Box
      component={"nav"}
      sx={{
        backgroundColor: "#FFF",
        width: isDrawer ? "100%" : "300px",
        overflowY: "auto",
        paddingY: "20px",
        paddingX: "20px",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        borderRight: isDrawer ? "none" : "1px solid #00000047",
        marginBottom: isDrawer ? 0 : "150px",
        display: isDrawer ? "block" : { xs: "none", lg: "block" },
        height: isDrawer ? "100%" : "auto",
      }}
    >
      <Box
        sx={{
          position: isDrawer ? "static" : "relative",
          top: isDrawer ? 0 : 100,
        }}
      >
        <Box>
          <Typography
            fontSize={{ ss: "30px", sm: "24px", xs: "20px" }}
            fontWeight={500}
            paddingLeft={{ ss: "20px", xs: "10px" }}
            paddingTop={"30px"}
          >
            Category
          </Typography>
          <Stack
            direction={"column"}
            alignItems={"start"}
            justifyContent={"center"}
            // gap={1}
            marginTop={"20px"}
            paddingLeft={{ sm: "25px", xs: "10px" }}
          >
            {category &&
              category.map((item) => (
                <Stack key={item} direction={"row"} alignItems={"center"}>
                  <Checkbox
                    sx={{
                      color: "#F9DD49",
                      "&.Mui-checked": { color: "#F9DD49" },
                    }}
                    checked={item.label === "Tote Bags" ? true : false}
                  />
                  <Typography
                    fontSize={{ sm: "18px", xs: "16px" }}
                    fontWeight={300}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              ))}
          </Stack>
        </Box>
        <hr
          style={{
            border: `1px solid ${alpha("#000000", 0.28)}`,
            // border: "1px solid black",
            color: "#00000047",
          }}
        />
        <Box>
          <Typography
            fontSize={{ ss: "30px", sm: "24px", xs: "20px" }}
            fontWeight={500}
            paddingLeft={{ ss: "20px", xs: "10px" }}
            paddingTop={"30px"}
          >
            Filter by:
          </Typography>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            // paddingRight={"20px"}
            paddingTop={"10px"}
          >
            <Typography
              fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
              fontWeight={400}
              paddingLeft={{ ss: "20px", xs: "10px" }}
            >
              Type
            </Typography>
            <IconButton onClick={() => toggleSection("type")}>
              {expanded.type ? (
                <KeyboardArrowUp sx={{ fontSize: "30px" }} />
              ) : (
                <KeyboardArrowDown sx={{ fontSize: "30px" }} />
              )}
            </IconButton>
          </Stack>
          <Collapse in={expanded.type}>
            <Stack
              direction={"column"}
              alignItems={"start"}
              justifyContent={"center"}
              marginTop={"10px"}
              paddingLeft={{ sm: "25px", xs: "10px" }}
            >
              {type &&
                type.map((item) => (
                  <Stack key={item} direction={"row"} alignItems={"center"}>
                    <Checkbox
                      sx={{
                        color: "#F9DD49",
                        "&.Mui-checked": { color: "#F9DD49" },
                      }}
                    />
                    <Typography
                      fontSize={{ sm: "18px", xs: "16px" }}
                      fontWeight={300}
                    >
                      {item.label}
                    </Typography>
                  </Stack>
                ))}
            </Stack>
          </Collapse>
          <Box marginTop={"10px"} paddingLeft={{ ss: "20px", xs: "10px" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              // paddingRight={"20px"}
              paddingTop={"10px"}
            >
              <Typography
                fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
                fontWeight={400}
                marginBottom={"10px"}
              >
                Colour
              </Typography>
              <IconButton onClick={() => toggleSection("colour")}>
                {expanded.colour ? (
                  <KeyboardArrowUp sx={{ fontSize: "30px" }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "30px" }} />
                )}
              </IconButton>
            </Stack>
            <Collapse in={expanded.colour}>
              {colour &&
                colour.map((box) => (
                  <Checkbox
                    key={box}
                    sx={{
                      color: box,
                      "&.Mui-checked": { color: box },
                      transform: "scale(1.3)",
                    }}
                  />
                ))}
            </Collapse>
          </Box>
          <Box
            sx={{
              paddingLeft: "20px",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingTop={"10px"}
            >
              <Typography
                fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
                fontWeight={400}
              >
                Price
              </Typography>
              <IconButton onClick={() => toggleSection("price")}>
                {expanded.price ? (
                  <KeyboardArrowUp sx={{ fontSize: "30px" }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "30px" }} />
                )}
              </IconButton>
            </Stack>
            <Collapse in={expanded.price} sx={{ paddingRight: "20px" }}>
              <Slider
                value={price}
                onChange={handlePriceChange}
                aria-labelledby="price-slider"
                min={0}
                max={100}
                marks={[
                  { price: 0, label: "Cheap" },
                  { price: 100, label: "Expensive" },
                ]}
                valueLabelDisplay="auto"
                sx={{
                  "& .MuiSlider-thumb": {
                    height: 20,
                    width: 20,
                    backgroundColor: "#FFCD00",
                  },
                  "& .MuiSlider-rail": {
                    opacity: 0.5,
                    backgroundColor: "#D9D9D9",
                    height: "10px",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#FFCD00",
                    height: "10px",
                    border: "none",
                  },
                  "& .MuiSlider-markLabel": {
                    color: "#000", // Color of the labels
                    fontSize: "16px", // Font size of the labels
                    fontWeight: 300,
                    // paddingLeft: "25px",
                    paddingRight: "30px",
                    // width: "calc(300px - 70px)",
                  },
                }}
              />
            </Collapse>
          </Box>
          <Box marginTop={"10px"} paddingLeft={{ ss: "20px", xs: "10px" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingRight={"1px"}
              paddingTop={"10px"}
            >
              <Typography
                fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
                fontWeight={400}
                marginBottom={"10px"}
              >
                Other Items
              </Typography>
              <IconButton onClick={() => toggleSection("otherItems")}>
                {expanded.otherItems ? (
                  <KeyboardArrowUp sx={{ fontSize: "30px" }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "30px" }} />
                )}
              </IconButton>
            </Stack>
          </Box>
          <Box marginTop={"10px"} paddingLeft={{ ss: "20px", xs: "10px" }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              paddingRight={"1px"}
            >
              <Typography
                fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
                fontWeight={400}
                marginBottom={"10px"}
              >
                Special Features
              </Typography>
              <IconButton onClick={() => toggleSection("specialFeatures")}>
                {expanded.specialFeatures ? (
                  <KeyboardArrowUp sx={{ fontSize: "30px" }} />
                ) : (
                  <KeyboardArrowDown sx={{ fontSize: "30px" }} />
                )}
              </IconButton>
            </Stack>
          </Box>
          <Box marginTop={"25px"} paddingLeft={"35px"}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"start"}
              gap={{ xs: 1, sm: 2, s: 3, lg: 4 }}
            >
              <Box
                sx={{
                  bgcolor: "#F9DD49",
                  paddingX: { ss: 4, xs: 2 },
                  paddingY: 1,
                  borderRadius: "10px",
                }}
              >
                <Typography
                  fontSize={{ ss: "22px", sm: "20px", xs: "18px" }}
                  fontWeight={400}
                >
                  Apply
                </Typography>
              </Box>
              <DeleteForever sx={{ fontSize: 40 }} />
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      {isBigScreen ? (
        <Box component={"nav"}>{<SidebarContent />}</Box>
      ) : (
        <>
          <IconButton
            onClick={toggleSidebar}
            sx={{
              position: "fixed",
              top: 40,
              left: 25,
              marginY: 5,
              zIndex: 1000,
            }}
          >
            <Box
              component={"img"}
              src="/hamburger.png"
              sx={{
                boxShadow: 3,
                borderRadius: "10px",
                p: 1,
                bgcolor: "background.paper",
              }}
            />
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="left"
            open={isSidebarOpen}
            onClose={toggleSidebar}
            PaperProps={{ sx: { width: { ss: "250px", xs: "200px" } } }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  backdropFilter: "blur(4px)",
                },
              },
            }}
          >
            <IconButton
              onClick={toggleSidebar}
              sx={{
                position: "fixed",
                top: 10,
                left: 10,
                backgroundColor: "transparent",
              }}
            >
              <Close />
            </IconButton>
            <Box sx={{ marginTop: "10px", height: "calc(100% - 20px)" }}>
              <SidebarContent isDrawer={true} />
            </Box>
          </Drawer>
        </>
      )}
    </>
    // <SidebarContent/>
  );
};

export default Sidebar;
