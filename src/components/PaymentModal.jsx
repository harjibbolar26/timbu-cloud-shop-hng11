import { Modal, Box, Typography, Button } from "@mui/material";

const PaymentModal = ({ open, onClose, deliveryInfo, contactInfo }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {sm: 400, xs: 300},
          bgcolor: "background.paper",
          boxShadow: 24,
          p: {sm: 4, xs: 2},
          borderRadius: "10px"
        }}
      >
        <Typography
          variant="h6"
          component="h2"
          textAlign={"center"}
          fontWeight={"600"}
        >
          Payment Successful
        </Typography>
        <Typography sx={{ mt: 2, mb: 0.5, fontWeight: 600 }} fontSize={{sm: "18px", xs: "16px"}} textTransform={"uppercase"} >
          Delivery Details
        </Typography>
        <Typography>
          Customer&apos;s name: &nbsp;
          <Typography component={"span"} fontWeight={"600"} fontSize={"14px"}>
            {contactInfo.firstName} {contactInfo.lastName}
          </Typography>
        </Typography>
        <Typography>
          Delivery to: &nbsp;
          <Typography component={"span"} fontWeight={"600"} fontSize={"14px"}>
            {deliveryInfo.home}
          </Typography>
        </Typography>
        <Typography>
          Phone number: &nbsp;
          <Typography component={"span"} fontWeight={"600"} fontSize={"14px"}>
            {deliveryInfo.phone}
          </Typography>
        </Typography>
        <Typography>
          Delivery address: &nbsp;
          <Typography component={"span"} fontWeight={"600"} fontSize={"14px"}>
            {deliveryInfo.address}
          </Typography>
        </Typography>
        <Typography>
          Customer&apos;s email: &nbsp;
          <Typography component={"span"} fontWeight={"600"} fontSize={"14px"}>
          {contactInfo.email}
          </Typography>
        </Typography>
        <Button onClick={onClose} sx={{ mt: 2 }}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default PaymentModal;
