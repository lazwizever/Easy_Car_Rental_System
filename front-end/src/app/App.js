import logo from '../logo.svg';
import '../App.css';
import HomePage from "../pages/homePage";
import ReservationPage from "../pages/reservationPage";
import {Route, Routes,} from "react-router-dom";
import VehiclePage from "../pages/vehicleDetailPage";
import BookingPage from "../pages/bookingPage";
import SignUpPage from "../pages/signUpPage";
import SignInPage from "../pages/signInPage";
//import AdminPage from "../pages/adminPage";
import CustomerDashBoard from "../pages/customer";
import AdminDashBoard from "../component/AdminDashBoard";
import DriverDashBoard from "../component/DriverDashBoard";



function App() {
  return (

      /*<Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='ReservationPage' element={<ReservationPage/>}/>
        <Route path='vehicleDetailsPage' element={<VehiclePage/>}/>
        <Route path='BookingPage' element={<BookingPage/>}/>
        <Route path='sighUpPage' element={<SignUpPage/>}/>
        <Route path='signInPage' element={<SignInPage/>}/>

      </Routes>*/

     <DriverDashBoard/>

  );
}


export default App;
