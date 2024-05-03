import { Box } from "@material-ui/core"
import { Button } from "@mui/material"

const advantage = () => {
  return (
    <Box>
        <Box sx={{textAlign:'center'}}>
            <h2>PB Advantage</h2>
        </Box>

        <Box sx={{textAlign:"center", fontSize:"15px", lineHeight:"24px", width:"100%", paddingTop:"20px", marginBottom:"20px"}}>
            <p>When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplofying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insures and being present for you int the toughest of times</p>
            <Button sx={{color:"#0065ff", fontSize:"16px", textDecoration:"none", fontWeight:"bold"}}>Know more</Button>
        </Box>

        <Box sx={{width:"100%" }}>
            {/* first advantage box */}
          <Box sx={{ border:"1px solid black", height:"auto",minHeight:"auto", width: "100%", marginBottom:"16px", paddingBottom:"10px", display:"flex", padding:"10px"}}>
            <Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgezdG6sIqj5uHlg32sMpGFZVKH4zrhKN1Ez4FxKwkA&s" height={"90px"} width={"90px"} />
            </Box>
            <Box>
                <p style={{marginLeft:"20px", fontSize:"20px"}}>One of the best Prices</p>
                <p style={{marginLeft:"20px", fontSize:"14px"}}>Guaranteed</p>
            </Box>
          </Box>

          {/* second advantage box  */}
          <Box sx={{ border:"1px solid black", height:"auto",minHeight:"auto", width: "100%", marginBottom:"16px", paddingBottom:"10px", display:"flex", padding:"10px"}}>
            <Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgezdG6sIqj5uHlg32sMpGFZVKH4zrhKN1Ez4FxKwkA&s" height={"90px"} width={"90px"} />
            </Box>
            <Box>
                <p style={{marginLeft:"20px", fontSize:"20px"}}>Unbiased Advice</p>
                <p style={{marginLeft:"20px", fontSize:"14px"}}>Keeping customers first</p>
            </Box>
          </Box>

          {/* third advantage box */}
          <Box sx={{ border:"1px solid black", height:"auto",minHeight:"auto", width: "100%", marginBottom:"16px", paddingBottom:"10px", display:"flex", padding:"10px"}}>
            <Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgezdG6sIqj5uHlg32sMpGFZVKH4zrhKN1Ez4FxKwkA&s" height={"90px"} width={"90px"} />
            </Box>
            <Box>
                <p style={{marginLeft:"20px", fontSize:"20px"}}>100% Reliable</p>
                <p style={{marginLeft:"20px", fontSize:"14px"}}>Regulated by IRDAI</p>
            </Box>
          </Box>

          {/* four advantage box */}
          <Box sx={{ border:"1px solid black", height:"auto",minHeight:"auto", width: "100%", marginBottom:"16px", paddingBottom:"10px", display:"flex", padding:"10px"}}>
            <Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgezdG6sIqj5uHlg32sMpGFZVKH4zrhKN1Ez4FxKwkA&s" height={"90px"} width={"90px"} />
            </Box>
            <Box>
                <p style={{marginLeft:"20px", fontSize:"20px"}}>Claims Support</p>
                <p style={{marginLeft:"20px", fontSize:"14px"}}>Made stress-free</p>
            </Box>
          </Box>

          {/* fifth advantage box */}
          <Box sx={{ border:"1px solid black", height:"auto",minHeight:"auto", width: "100%", marginBottom:"75px", paddingBottom:"10px", display:"flex", padding:"10px"}}>
            <Box>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZgezdG6sIqj5uHlg32sMpGFZVKH4zrhKN1Ez4FxKwkA&s" height={"90px"} width={"90px"} />
            </Box>
            <Box>
                <p style={{marginLeft:"20px", fontSize:"20px"}}>Happy to Help</p>
                <p style={{marginLeft:"20px", fontSize:"14px"}}>Every day of the week</p>
            </Box>
          </Box>
        </Box>
    </Box>
  )
}

export default advantage