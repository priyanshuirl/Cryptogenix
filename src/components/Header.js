import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { CryptoState } from "../CryptoContext";
import { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "#fff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  const [showWidget, setShowWidget] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    setShowWidget(window.location.pathname === '/')
  }, [])

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar style={{ backgroundColor: '#14161a', padding: '5px 0px' }} position="fixed">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => window.open(`https://priyanshumishra.netlify.app/`, '_blank')}
              variant="h6"
              className={classes.title}
            >
              Made By Priyanshu Mishra
            </Typography>
            {!showWidget &&
              <Select
                variant="outlined"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"USD"}>USD</MenuItem>
                <MenuItem value={"INR"}>INR</MenuItem>
              </Select>
            }
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
