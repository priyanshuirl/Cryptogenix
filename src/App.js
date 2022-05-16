import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import LoginPage from './Pages/LoginPage'
import { TransactionsProvider } from './components/Context/TransactionContext'

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <TransactionsProvider>
        <div className={classes.App}>
          <Header />
          <Route path="/" component={LoginPage} exact />
          <Route path="/home" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </div>
      </TransactionsProvider>
    </BrowserRouter>
  );
}

export default App;
