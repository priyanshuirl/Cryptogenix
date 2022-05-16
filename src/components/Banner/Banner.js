import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 'auto',
    display: "flex",
    flexDirection: "column",
    marginTop: '40px',
    paddingTop: 50,
    justifyContent: "space-around",
    paddingBottom: 50,
  },
  tagline: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin: '20px 0px'
  },
  carousel: {
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            className="textGradient"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: '#ff0093',
              fontSize: '11vw',
            }}
          >
            Cryptogenix
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              marginBottom: 30,
              fontSize: '3.2vw',
            }}
          >
            The ultimate Cryptocurrency tracker
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
