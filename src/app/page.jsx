"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import PlaylistAddCheckCircleRoundedIcon from "@mui/icons-material/PlaylistAddCheckCircleRounded";
import OfflineBoltRoundedIcon from "@mui/icons-material/OfflineBoltRounded";
import { Box, Button, Container } from "@mui/material";
import ContainerBox from "../components/Boxes/Box";
import SwipeableTextMobileStepper from "../components/ImgCarousel/ImagCarousel";
import Favourite from "../components/FavouritePolicy/Favourite";
import Advantage from "../components/Advantage/advantage";
import Help from "../components/HelpComponent/Help";
import Multi from "../components/MultiCarousel/Multi";
import GetPolicy from "../components/GetPolicy/GetPolicy";
import Link from "next/link";

const page = () => {
  return (
    <Box>
      <Container sx={{ backgroundColor: "fff" }}>
        <Navbar />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Box sx={{ width: "50%" }}>
            <p style={{ fontSize: "40px" }}>Let's find you</p>
            <p style={{ fontSize: "40px", marginTop: "-45px" }}>
              the <span style={{ fontWeight: "bold" }}>Best Insurance</span>
            </p>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ color: "blueviolet", fontSize: "20px" }}>
                <p>
                  {" "}
                  <PlaylistAddCheckCircleRoundedIcon /> 50+ insures with one
                </p>
                <p style={{ marginTop: "-20px", marginLeft: "29px" }}>
                  of the prices
                </p>
              </Box>
              <Box sx={{ color: "orange", fontSize: "20px" }}>
                <p>
                  {" "}
                  <OfflineBoltRoundedIcon /> Quick, easy &
                </p>
                <p style={{ marginTop: "-20px", marginLeft: "28px" }}>
                  hasle free
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <SwipeableTextMobileStepper />
            {/* <img src={"https://static.pbcdn.in/cdn/images/home/investment_1cr_desktop.png"} style={{display: "block",margin:"auto" , marginTop:"35px",width: "60%" }} /> */}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "80px",
          }}
        >
          <Box>
            <Link href="/lifeInsurance" style={{ textDecoration: "none" }}>
              <ContainerBox
                boxtopic="Life Insurance"
                name="Upto 10% Discount"
                image={
                  <img
                    src="https://cdn-icons-png.freepik.com/512/4162/4162704.png"
                    width={"50px"}
                    height={"50px"}
                    alt="Umbrella"
                  />
                }
              />
            </Link>
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Health Insurance"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/865/865969.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Investment Plans"
              name="New Fund Launch"
              image={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2746/2746047.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Car Insurance"
              name="Upto 85% Discount"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-22.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="2 WheelerInsurance"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/motorcycles-icon-png/motorcycle-transport-icons-10.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Family Insurance"
              name="Upto 25% Discount"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/family-icon/family-icon-9.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Travel Insurance"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/airplane-icon-png/plane-icon-free-search-download-as-png-ico-and-icns-iconseekerm-31.png"
                  width={"50px"}
                  height={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            marginBottom: "50px",
          }}
        >
          <Box>
            <ContainerBox
              boxtopic="Term Insurance (Women)"
              name="Upto 10% Discount"
              image={
                <img
                  src="https://cdn-icons-png.freepik.com/512/4162/4162704.png"
                  width={"50px"}
                  alt="Umbrella"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Free of Cost Term Plans"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/865/865969.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Guaranteed Return Plans"
              name="New Fund Launch"
              image={
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2746/2746047.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Child Savings Plans"
              name="Upto 85% Discount"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/car-icon-png/car-icon-png-22.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Retirement Plans"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/motorcycles-icon-png/motorcycle-transport-icons-10.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Employee Group Health Insurance"
              name="Upto 25% Discount"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/family-icon/family-icon-9.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
          <Box>
            <ContainerBox
              boxtopic="Home Insurance"
              name="Cashless Anywhere"
              image={
                <img
                  src="https://www.freeiconspng.com/thumbs/airplane-icon-png/plane-icon-free-search-download-as-png-ico-and-icns-iconseekerm-31.png"
                  width={"50px"}
                  alt="heart rate"
                />
              }
            />
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "15px",
              borderWidth: "2px",
              fontSize: "15px",
              color: "0065ff",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            View all products
          </Button>
        </Box>

        <Box>
          <h3 style={{ color: "blue" }}>ALSO BUY</h3>
          <Box sx={{ display: "flex", marginBottom: "20px" }}>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#998dd9" }}>Investment</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>LIC Plans</Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#998dd9" }}>Term Life</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Return of Premium
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#998dd9" }}>Term Life</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Life Insurance for Housewives
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Health Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Day 1 Coverage
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Health Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                1 Cr Health Insurance
              </Box>
            </Box>
          </Box>

          {/* Second */}

          <Box sx={{ display: "flex", marginBottom: "20px" }}>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Health Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Unlimited Restoration of Cover
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Health Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Personal Accident
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#00b8d9" }}>Business Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Marine Insurance
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Business Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Professional Indemnity for Doctors
              </Box>
            </Box>
          </Box>

          {/* third */}

          <Box sx={{ display: "flex", marginBottom: "30px" }}>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Business Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Directors & Officers liability
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#ff9a9a" }}>Business Insurance</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Workmen Compensation
              </Box>
            </Box>
            <Box
              sx={{
                backgroundColor: "fff",
                boxShadow: " 0 6px 16px rgba(52, 105, 203, .16);",
                fontSize: "14px",
                padding: "11px 12px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <Box sx={{ color: "#6b778c" }}>Others</Box>
              <Box sx={{ color: "#253858", fontSize: "20px" }}>
                Pet Insurance
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Multi Carousel */}
        <Box sx={{ background: "#f2f7ff", marginBottom: "50px" }}>
          <Multi />
        </Box>

        {/* after multi Carousel component */}
        <Box>
          <Favourite />
        </Box>

        <Box>
          <Advantage />
        </Box>

        <Box>
          <GetPolicy />
        </Box>

        <Box>
          <Help />
        </Box>
      </Container>
      <Box sx={{ marginTop: "150px" }}>
        <Footer />
      </Box>
    </Box>
  );
};
export default page;
