import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box style={{backgroundColor:"black", color: "white"}}
      component="footer"
    
    >
      <Container >


        <Grid container spacing={12}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                <h2>More Products</h2>
              </Typography>
            </Box>
            <Grid item xs={12} sm={6} md={8}>
            <Box pb={3}>
              <Typography variant="footerHead" gutterBottom>
                <h3>Life Insurance</h3>
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Life Insurance</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">Term Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Life Insurance Calculator</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">1 Crore Term Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Term Return of Premium</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Term Insurance for Housewife</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Spouse Term Plan</Typography>
            </Box>
          </Grid>
          </Grid>


          <Grid item xs={12} sm={6} md={2}>
            <Box pb={3}>
              <Typography variant="footerHead" gutterBottom>
                <h3>Health Insurance</h3>
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Health Insurance</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">1 Cr Health Cover</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Family Health Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Senior Citizen Health Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Coronavirus Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Corona Kavach Policy</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Corona Rakshak Policy</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Arogya Sanjeevani Policy</Typography>
            </Box>
            
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                <h3>Investment</h3>
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Investment Plans</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">Capital Guarantee Plans</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Investment Plans for NRIs</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Child Plans</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Pension Plans</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Guaranteed Return Plans</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Tax Saving Investments</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Market Linked Investment Plans</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">(ULIP)</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">SIP (Systematic Investment Plan)</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Endowment Policy</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">LIC</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Income Tax Calculator</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">SIP Calculator</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">NPS Calculator</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">FD Calculator</Typography>
            </Box>
          </Grid>


          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                <h3>General Insurance</h3>
              </Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Car Insurance</Typography>
            </Box>

            <Box pb={2}>
              <Typography variant="footerText">Bike Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Motor Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Third Party Car Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Third Party Bike Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Travel Insurance</Typography>
            </Box>
            <Box pb={2}>
              <Typography variant="footerText">Commercial Vehcile Insurance</Typography>
            </Box>
          </Grid>


          {/* <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ pb: 3 }}>
              <Typography variant="footerHead" gutterBottom>
                Contact Us
              </Typography>
            </Box>
            <Link href="https://www.facebook.com/">
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/" sx={{ pl: 1, pr: 1 }}>
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/">
              <Twitter />
            </Link>
            <Link href="https://www.twitter.com/" sx={{ pl: 1, pr: 1 }}>
              <LinkedIn />
            </Link>
            <Link href="https://www.twitter.com/">
              <WhatsApp />
            </Link>
            <Box pt={2}>
            <Link
              color="inherit"
              href="https://Buddhagreen.com/"
         sx={{color:"white"}}
            >
              trip@Buddhagreen.co.in
            </Link>{" "}
            </Box>
          </Grid> */}
        </Grid>
        {/* <Box
          mt={5}
          align="center"
          sx={{ borderTop: 1, borderColor: "white", pt: 3 }}
        >
          <Typography variant="footerText">
            {new Date().getFullYear() + " "}
            <Link
              color="inherit"
              href="https://Buddhagreen.com/"
              sx={{ textDecoration: "none" }}
            >
              Buddhagreen.com
            </Link>{" "}
            {" All Rights Reserved"}
          </Typography>
        </Box> */}
        <Box sx={{fontSize:"10px"}}>
            <p>*Standard Plans Terms and Conditions apply</p>
            <p>+For insurance plans that do not require inspection of your car</p>
            <p>#The above returns are based on the past performance of 7 years</p>
            <p>*As per Draft Notification No. RT-11036/194/2021-MVL (Govt. of India, Ministry of Road Transport and Highways)</p>
            <p>#Tax benefit is subject to change in tax laws. ^Valid for policies issued until 31st March 23</p>
            <p>*The Guaranteed Returns are dependent on the policy term and premium term availed along with the other variable factors. The Guaranteed return of Rs 1 Cr is for a 30-Year-old individual for a policy term of 10 Years and a premium paying term of 5 Years with a Rs 1,00,000 monthly installment premium.</p>
            <p>**Fixed deposit rate applicable for 5 years 1 day to 10 years for investment amount less than Two Crore ( Not for senior citizens), PPF interest rate applicable for 15 years for investment amount upto 1.5 Lac</p>
            <p>*Rs. 950/month is the starting price for a Rs. 1 Crore term life insurance for a 30 year-old male, non-smoker, with no pre-existing diseases, cover upto 68 years of age. Additional premium is payable for riders opted.</p>
            <p>**Full refund of the premium may be availed when you opt to exit the policy at a pre-defined interval. On availing the one-time option to exit, the total base premium is returned by the Insurer excluding GST & premium paid for additional optional benefits.</p>

        </Box>
      </Container>
    </Box>
  );
}
