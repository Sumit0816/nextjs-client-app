import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Multi = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <Carousel responsive={responsive} infinite={true} showDots={true} autoPlay={true} autoPlaySpeed={2000}>
  <div style={{backgroundSize:"350px", paddingTop:"25px", paddingBottom:"25px", paddingLeft:"15px"}}>
    <img src="https://static.pbcdn.in/cdn/images/home/one-stop-for-all.png" height={"200px"} />
  </div>
  <div style={{backgroundSize:"350px", paddingTop:"25px", paddingBottom:"25px", paddingLeft:"15px"}}>
  <img src="https://static.pbcdn.in/cdn/images/home-v1/sipcal.png" height={"200px"} />
  </div>
  <div style={{backgroundSize:"350px", paddingTop:"25px", paddingBottom:"25px", paddingLeft:"15px"}}>
  <img src="https://static.pbcdn.in/cdn/images/home/one-stop-for-all.png" height={"200px"} />
  </div>
  <div style={{backgroundSize:"350px", paddingTop:"25px", paddingBottom:"25px", paddingLeft:"15px"}}>
  <img src="https://static.pbcdn.in/cdn/images/home-v1/sipcal.png" height={"200px"} />
  </div>
</Carousel>
  )
}

export default Multi