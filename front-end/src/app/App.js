import logo from '../logo.svg';
import '../App.css';
import HomePage from "../pages/homePage";
import ReservationPage from "../pages/reservationPage";
import {Route, Routes,} from "react-router-dom";
import VehiclePage from "../pages/vehicleDetailPage";
import BookingPage from "../component/CustomerDashBoard/bookingPayment";
import SignUpPage from "../pages/signUpPage";
import SignInPage from "../pages/signInPage";
//import AdminPage from "../pages/adminPage";
import AdminDashBoard from "../component/AdminDashBoard";
import DriverDashBoard from "../component/DriverDashBoard";
import MiniDrawer from "../component/CustomerDashBoardNew/drawer/customerDashboard";
import CustomerDashBoard from "../component/CustomerDashBoardNew/drawer/customerDashboard";
import Profile from "../component/CustomerDashBoardNew/profile/profile";
import Booking from "../component/CustomerDashBoardNew/placeBooking/booking";
import ManageBooking from "../component/CustomerDashBoardNew/manageBooking/manageBooking";



function App() {
  return (

     /* <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='ReservationPage' element={<ReservationPage/>}/>
        <Route path='vehicleDetailsPage' element={<VehiclePage/>}/>
        <Route path='BookingPage' element={<BookingPage/>}/>
        <Route path='sighUpPage' element={<SignUpPage/>}/>
        <Route path='signInPage' element={<SignInPage/>}/>

      </Routes>*/


      <Routes>
        <Route path="/customerDashBoard" element={<CustomerDashBoard />}>
          <Route index element={<Profile/>} />
          <Route path="booking" element={<Booking />} />
          <Route path="manageBooking" element={<ManageBooking />} />
        </Route>

          <Route exact path='/' element={<HomePage/>}/>
          <Route path='sighUpPage' element={<SignUpPage/>}/>
          <Route path='signInPage' element={<SignInPage/>}/>
      </Routes>


      //<BookingPage/>

  );
}


export default App;
