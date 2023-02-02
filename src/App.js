import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';
import { makeStyles } from '@material-ui/core';
import 'react-alice-carousel/lib/alice-carousel.css';



function App() {

  const useStyle = makeStyles(() => ({

    App: {
      backgroundColor : "#14161a",
      color : "white",
      minHeight : "100vh"
    }
  }))

  const classes = useStyle()

  return (<div className={classes.App}>
    <Header />
    <Routes>
      <Route path='/' element={<Homepage />} exact />
      <Route path='/coins/:id' element={<CoinPage />} />
    </Routes>
    </div>);
}

export default App;
