import { Container, makeStyles, Typography } from "@material-ui/core"
import Carousel from "./Carousel";

const useStyle = makeStyles(() => ({
  banner: {
    background: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}))

const Banner = () => {

  const classes = useStyle();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
            }}
          >
            Crypto Oasis
          </Typography>
          <Typography 
            variant="subtitle2"
            style={{
              color: "darkgray",
              textTransform: "capitalize",
              fontFamily: "Montserrat"
            }}
          >
          Unlock the Future of Finance with Crypto Oasis
          </Typography>
        </div>
        <Carousel />
      </Container>  
    </div>
  )
}

export default Banner

