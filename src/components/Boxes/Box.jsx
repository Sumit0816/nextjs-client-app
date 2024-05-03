
import { Box } from '@mui/material';

const ContainerBox = (props) => {
  return (
    <Box>
      <Box sx={{backgroundColor:"#f2f7ff", width:"12vw",  borderRadius:"20px", marginRight:"10px"}}>
      <Box sx={{display:"flex", flexDirection:"column", textAlign:"center", paddingTop:"5px", borderRadius:"20px 20px 0 0", backgroundColor:"lightgreen"}}>
        {props.name}
      </Box>
      <Box sx={{textAlign:"center", padding:"10px"}}>
        {props.image}
        {/* <img src="https://png.pngtree.com/png-vector/20191206/ourmid/pngtree-purple-umbrella-vector-or-color-illustration-png-image_2042575.jpg" alt="umbrella" style={{width:"50%"}} /> */}
      </Box>
      </Box>
      <Box>{props.boxtopic}</Box>
    </Box>
  )
}

export default ContainerBox