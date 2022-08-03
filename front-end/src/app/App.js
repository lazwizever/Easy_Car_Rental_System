import logo from '../logo.svg';
import '../App.css';
import HomePage from "../pages/homePage";
import {Route, Routes,} from "react-router-dom";
import SignUpPage from "../pages/signUpPage";
import SignInPage from "../pages/signInPage";
import DriverDashBoard from "../component/DriverDashBoard/drawer/driverDashboard";
import CustomerDashBoard from "../component/CustomerDashBoardNew/drawer/customerDashboard";
import Profile from "../component/CustomerDashBoardNew/profile/profile";
import Booking from "../component/CustomerDashBoardNew/placeBooking/booking";
import ManageBooking from "../component/CustomerDashBoardNew/manageBooking/manageBooking";
import DriverProfile from "../component/DriverDashBoard/profile/profile";
import DriverSchedule from "../component/DriverDashBoard/driverSchedule/driverSchedule";
import AdminDashBoard from "../component/AdminDashBoard/drawer/adminDashboard";
import AdminProfile from "../component/AdminDashBoard/profile/profile";
import ManageCustomer from "../component/AdminDashBoard/manageCustomer/manageCustomer";
import IncomeReports from "../component/AdminDashBoard/incomeReports/incomeReports";
import ManageVehicle from "../component/AdminDashBoard/manageVehicle/manageVehicle";
import DashBoard from "../component/AdminDashBoard/dashBoard/adminDashboardIndex";



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

          <Route path="/driverDashBoard" element={<DriverDashBoard />}>
              <Route index element={<DriverProfile/>} />
              <Route path="driverSchedule" element={<DriverSchedule />} />
          </Route>


          <Route path="/adminDashBoard" element={<AdminDashBoard />}>
              <Route index element={<DashBoard/>} />
              <Route path="manageCustomer" element={<ManageCustomer />} />
              <Route path="manageBooking" element={<ManageBooking />} />
              <Route path="incomeReports" element={<IncomeReports />} />
              <Route path="manageDriver" element={<DriverSchedule />} />
              <Route path="manageVehicle" element={<ManageVehicle />} />
          </Route>



          <Route exact path='/' element={<HomePage/>}/>
          <Route path='sighUpPage' element={<SignUpPage/>}/>
          <Route path='signInPage' element={<SignInPage/>}/>
      </Routes>


      //<BookingPage/>

  );
}


export default App;
