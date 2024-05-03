import { Box } from "@material-ui/core";

const Favourite = () => {
  return (
    <Box sx={{ width: "100%", backgroundColor: "#fff", height:"500px" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          sx={{
            fontSize: "36px",
            lineHeight: "32px",
            marginLeft: "16px",
            width: "240px",
            width: "50%",
            margin: "40px 0px 0px 16px",
          }}
        >
          <Box sx={{marginBottom:"20px"}}>What makes</Box>
          <Box sx={{marginBottom:"20px"}}>
            <span style={{ fontWeight: "bold" }}>Policybazar</span> one of
          </Box>
          <Box sx={{ fontWeight: "bold", marginBottom:"20px" }}>India's favourite places</Box>
          <Box>
            to <span style={{ fontWeight: "bold" }}>buy insurance?</span>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              width: "200px",
              verticalAlign: "top",
              backgroundColor: "#fff",
              margin: "40px 48px 0px 0px",
              height: "180px",
              textAlign: "left",
              display: "inline-block",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(52, 105, 203, .16)",
              position: "relative",
              left: 0,
              overflow: "hidden",
              borderLeft: "3px solid blue",
            }}
          > 
          <Box sx={{margin:"11px"}}>
          <img
              src="https://www.shutterstock.com/shutterstock/photos/2290920757/display_1500/stock-vector-vector-d-icon-party-popper-cartoon-emoji-of-birthday-confetti-explosion-simple-minimal-2290920757.jpg"
              height={"34px"}
              width={"34px"}
              alt="bday image"
            />
          </Box>
          
            <Box
              style={{
                color: "#2d3cd9",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0 16px 0",
              }}
            >
              Over 9 Million
            </Box>
            <Box
              style={{
                fontSize: "12px",
                lineHeight: "21px",
                color: "#25385",
                padding: "10px 11px 0 16px",
              }}
            >
              customers trust us & have bought their insurance on Policybazar
            </Box>
          </Box>

{/* second Box */}
          <Box
            sx={{
              width: "200px",
              verticalAlign: "top",
              backgroundColor: "#fff",
              margin: "40px 48px 0px 0px",
              height: "180px",
              textAlign: "left",
              display: "inline-block",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(52, 105, 203, .16)",
              position: "relative",
              left: 0,
              overflow: "hidden",
              borderLeft: "3px solid #0bbdf2",
              marginTop:"80px",
              marginBottom:"50px"
            }}
          > 
          <Box sx={{margin:"11px"}}>
          <img
              src="https://i.pinimg.com/564x/0d/2c/65/0d2c65f18a674d75f9239dd06a0de785.jpg"
              height={"34px"}
              width={"34px"}
              alt="bday image"
            />
          </Box>
          
            <Box
              style={{
                color: "#0bbdf2",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0 16px 0",
              }}
            >
              50+ insures
            </Box>
            <Box
              style={{
                fontSize: "12px",
                lineHeight: "21px",
                color: "#25385",
                padding: "10px 11px 0 16px",
              }}
            >
             partnered with us so that you can compare easily & transparently
            </Box>
          </Box>
        </Box>
      </Box>

      {/* third box */}
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
       <Box></Box>
       <Box>
       <Box
            sx={{
              width: "200px",
              verticalAlign: "top",
              backgroundColor: "#fff",
              margin: "0px 48px 0px 0px",
              height: "180px",
              textAlign: "left",
              display: "inline-block",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(52, 105, 203, .16)",
              position: "relative",
              left: 0,
              overflow: "hidden",
              borderLeft: "3px solid #47d990",
              // marginTop:"80px",
              // marginBottom:"50px"
            }}
          > 
          <Box sx={{margin:"11px"}}>
          <img
              src="https://www.shutterstock.com/shutterstock/photos/1994045024/display_1500/stock-vector-starry-eyed-emoji-golden-stars-for-eyes-excited-emoticon-with-open-smile-d-stylized-vector-icon-1994045024.jpg"
              height={"34px"}
              width={"34px"}
              alt="bday image"
            />
          </Box>
          
            <Box
              style={{
                color: "#47d990",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0 16px 0",
              }}
            >
              Great Price
            </Box>
            <Box
              style={{
                fontSize: "12px",
                lineHeight: "21px",
                color: "#25385",
                padding: "10px 11px 0 16px",
              }}
            >
             for all kinds of insurance palns available online
            </Box>
          </Box>

          {/* fourth box */}
          <Box
            sx={{
              width: "200px",
              verticalAlign: "top",
              backgroundColor: "#fff",
              // margin: "0px 48px 0px 0px",
              height: "180px",
              textAlign: "left",
              display: "inline-block",
              borderRadius: "8px",
              boxShadow: "0 6px 16px rgba(52, 105, 203, .16)",
              position: "relative",
              left: 0,
              overflow: "hidden",
              borderLeft: "3px solid #ffc400",
              // marginTop:"80px",
              // marginBottom:"50px"
            }}
          > 
          <Box sx={{margin:"11px"}}>
          <img
              src="https://p1.hiclipart.com/preview/943/953/92/happy-face-emoji-blond-woman-smiley-hair-girl-eye-head-hair-png-clipart-thumbnail.jpg"
              height={"34px"}
              width={"34px"}
              alt="bday image"
            />
          </Box>
          
            <Box
              style={{
                color: "#ffc400",
                fontSize: "18px",
                fontWeight: "bold",
                padding: "0 16px 0",
              }}
            >
             Claims
            </Box>
            <Box
              style={{
                fontSize: "12px",
                lineHeight: "21px",
                color: "#25385",
                padding: "10px 11px 0 16px",
              }}
            >
             support built in with every policy for help, when you need it the most
            </Box>
          </Box>
       </Box>
      </Box>
    </Box>
  );
};

export default Favourite;
