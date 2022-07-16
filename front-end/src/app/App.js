import logo from '../logo.svg';
import '../App.css';
import HomePage from "../pages/homePage";
import Reservation from "../pages/reservation";
import {Route, Routes,} from "react-router-dom";


function App() {
  return (

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='Reservation' element={<Reservation/>}/>
      </Routes>

  );
}


export default App;
