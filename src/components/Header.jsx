import { AppBar, 
        Container, 
        makeStyles, 
        MenuItem, 
        Select, 
        Toolbar,
        createTheme,
        Typography, 
        ThemeProvider} from "@material-ui/core";
import { CryptoState } from "../Pages/CryptoContext";
import { Link } from "react-router-dom";



const useStyle = makeStyles(() => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer"
    }
}))
const Header = () => {

    const classes = useStyle();

    const { currency, setCurrency } = CryptoState();

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: "#fff"
            },
            type: 'dark',
        },
      });

    return(
        <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title} variant='h5' onClick={()=> <Link to={"/"} />} >
                        Crypto Oasis
                    </Typography>
                    <Select 
                        variant="outlined"
                        style={{
                            width: 100,
                            height: 40,
                            merginRight: 15
                        }}
                        value = {currency}
                        onChange = {(e) => setCurrency(e.target.value)}
                        >
                        <MenuItem value={'INR'}>INR</MenuItem>
                        <MenuItem value={'USD'}>USD</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    )
} 

export default Header;