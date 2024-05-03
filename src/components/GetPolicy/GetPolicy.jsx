import { Box } from "@mui/material";
import React from "react";

const GetPolicy = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          backgroundColor: "#f7f9ff",
          marginBottom:"50px"
        }}
      >
        <Box sx={{ width: "50%", padding: "85px 0 40px" }}>
          <p style={{ fontSize: "30px", color: "#000", lineHeight: "40px" }}>
            Get the Policybazar app
          </p>
          <p
            style={{
              color: "#5e6c84",
              fontSize: "18px",
              paddingBottom: "40px",
            }}
          >
            Get control of all your insurance needs anywhere, anytime
          </p>
          <Box
            sx={{
              fontSize: "14px",
              color: "#253858",
              margin: "0 0 0 0px",
              padding: "0 0 20px 0",
            }}
          >
            <p>Compare different insurance policies</p>
            <p>Buy, store and share all your policies online</p>
            <p>Track your policy status on the go</p>
            <p>Download your policy with a single tap</p>
          </Box>

          <Box>
            <p
              style={{
                fontSize: "14px",
                color: "#505f79",
                padding: "20px 0 20px",
                lineHeight: "24px",
              }}
            >
              Download our app from
            </p>
            <Box sx={{display:"flex"}}>
            <Box sx={{marginRight:"30px"}}>
            <img src="https://freelogopng.com/images/all_img/1664287128google-play-store-logo-png.png"
            height={"70px"}
            />
            </Box>
            <Box>
            <img src="https://p7.hiclipart.com/preview/422/842/453/app-store-android-google-play-get-started-now-button.jpg"
            height={"75px"}
            width={"260px"}
            />
            </Box>
            </Box>
            
          </Box>
        </Box>

        <Box sx={{ width: "50%", paddingTop: "115px" }}>
          <img
            src="https://static.pbcdn.in/cdn/images/home-v1/get-app.png"
            height={"350px"}
            width={"465px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default GetPolicy;
