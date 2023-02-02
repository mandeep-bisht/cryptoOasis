import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { SingleCoin } from "../components/config/api";
import { CryptoState } from "./CryptoContext";
import { makeStyles, Typography, LinearProgress } from "@material-ui/core"; 
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { numberWithCommas } from "../components/Banner/Carousel";


const CoinPage = () => {

  const { id } = useParams();
  const [coin, setCoins] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoins = async() => {
    const { data } = await axios.get(SingleCoin(id));
    setCoins(data);
  }

  useEffect(()=>{
    fetchCoins()
  },[currency])

  const useStyle = makeStyles ((theme) => ({
    container: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    sidebar: {
      width: "100%",
      // [theme.breakpoints.down("md")]: {
      //   width: "100%",
      // },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      // borderRight: "2px solid grey",
    },
    heading: {
      fontWeight: "bold",
      marginBottom: 20,
      fontFamily: "Montserrat",
    },
    description: {
      width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
    },
    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }))

  const classes = useStyle();

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography variant="h3" className={classes.heading} >
          {coin?.name}
        </Typography>
        <Typography variant="subtitle1" className={classes.description} >
          {ReactHtmlParser(coin?.description.en)}
        </Typography>
        <div className={classes.marketData}>
          <span style={{ dispaly: "flex" }}>
            <Typography variant="h5" className={classes.heading} >
              Rank : {coin?.market_cap_rank}
            </Typography>
          </span>
          <span style={{ dispaly: "flex" }}>
            <Typography variant="h5" className={classes.heading} >
              Current Price : {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>
          <span style={{ dispaly: "flex" }}>
            <Typography variant="h5" className={classes.heading} >
              Market Cap: {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CoinPage
