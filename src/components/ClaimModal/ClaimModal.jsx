import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CancelIcon from "@mui/icons-material/Cancel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #0000",
  boxShadow: 24,
  borderRadius:"10px"
    // p: 4,
};

export default function ClaimModal(props) {
  const { open, handleClose } = props;
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#f2f7ff",
              padding:"10px",
              borderRadius:"15px"
            }}
          >
            <Typography variant="h6">Select insurance type</Typography>
            <Typography >
              <CancelIcon onClick ={handleClose} />
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              margin: "20px",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                padding: "10px",
                width: "108px",
                height: "108px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 16px rgba(52, 105, 203, .16);",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius:"6px"
              }}
            >
              <img
                src="https://icones.pro/wp-content/uploads/2021/03/symbole-de-voiture-icone-png-bleu.png"
                width={"50px"}
                height={"70px"}
              />
              <Typography sx={{ fontSize: "15px" }}>Motor Insurance</Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                width: "108px",
                height: "108px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 16px rgba(52, 105, 203, .16);",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius:"6px"
              }}
            >
              <img
                src="data:image/png;base64,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"
                width={"50px"}
                height={"70px"}
              />
              <Typography sx={{ fontSize: "15px" }}>Motor Insurance</Typography>
            </Box>
            <Box
              sx={{
                padding: "10px",
                width: "108px",
                height: "108px",
                backgroundColor: "#fff",
                boxShadow: "0 6px 16px rgba(52, 105, 203, .16);",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                borderRadius:"6px"
              }}
            >
              <img
                src="https://media.istockphoto.com/id/906661050/vector/color-icon-umbrella.jpg?s=612x612&w=0&k=20&c=Vvt0c2gYsHjoHN6wouIqOSMkmk7S3K1jAgSHllnsy04="
                width={"50px"}
                height={"70px"}
              />
              <Typography sx={{ fontSize: "15px" }}>Motor Insurance</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
