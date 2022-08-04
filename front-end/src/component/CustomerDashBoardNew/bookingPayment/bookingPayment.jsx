import React, { Component, Fragment } from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./bookingPaymentStyle";
import Grid from "@mui/material/Grid";
import {
    Autocomplete,
    Box,
    Button,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {TimePicker} from "@mui/x-date-pickers";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BookingService from "../../../service/bookingService";
import CustomerService from "../../../service/customerService";
import {format} from "date-fns";
import vehicleService from "../../../service/vehicleService";



const vehicleType = [
    { label: 'General'},
    { label: 'Premium'},
    { label: 'Luxury'},
]

class PaymentPage extends Component{

    constructor(props) {
        super(props);

        this.state={

            customer: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },

                user: {
                    userId: '',
                    role: '',
                    userName: '',
                    passWord: '',
                },

                licenseNo: '',
                address: '',
                contactNo:'',
            },


            vehicleBooking:{},

       /*  booking:{
             bookingId:'B005',
             pickUpDate:'2022-08-06',
             pickUpTime:'10:10:01',
             returnDate:'2022-08-10',
             returnTime:'10:10:01',
             driverRequestType:'NO',

             customer: {
                     id:this.state.customer.id,
                     nic:this.state.customer.nic,
                     name:{
                         firstName:this.state.customer.name.firstName,lastName:this.state.customer.name.lastName},
                     licenseNo:this.state.customer.licenseNo,
                     address:this.state.customer.address,
                     contactNo:this.state.customer.contactNo,
                     email:this.state.customer.email,
                     user:{
                         role:this.state.customer.user.role,
                         userName:this.state.customer.user.userName,
                         passWord:this.state.customer.user.passWord
                     }

             },

             driverScheduleDTOList:[],

             bookingDetailsList:[
                 {
                     vehicleId: "",
                     bookingId: "",
                     vehicle: {
                         vehicleId: "",
                         registrationNo: "",
                         fuelType: "",
                         transmissionType: "",
                         vehicleType: "",
                         noOfPassengers:'' ,
                         vehiclePriceRate: {
                             dailyRate: '',
                             monthlyRate: '',
                         },
                         freeMileAge: {
                             dailyMileage: '',
                             monthlyMileage: '',
                         },
                         vehicleAvailability: "",
                         damageFee: '',
                         brand: "",
                         color: "",
                         lastServiceKm: '',
                         mileage: '',
                         pricePerExtraKm: '',
                     },
                     booking:{
                         bookingId:'',
                         pickUpDate:'',
                         pickUpTime:'',
                         returnDate:'10',
                         returnTime:'10:10:01',
                         driverRequestType:'NO',

                         customer: {
                             id:this.state.customer.id,
                             nic:this.state.customer.nic,
                             name:{
                                 firstName:this.state.customer.name.firstName,lastName:this.state.customer.name.lastName},
                             licenseNo:this.state.customer.licenseNo,
                             address:this.state.customer.address,
                             contactNo:this.state.customer.contactNo,
                             email:this.state.customer.email,
                             user:{
                                 role:this.state.customer.user.role,
                                 userName:this.state.customer.user.userName,
                                 passWord:this.state.customer.user.passWord
                             }

                         },

                         driverScheduleDTOList:[],

                     },
                 }

             ],
         },*/

        }
    }


    loadData = async () => {
        /*--------------Load Customer Data--------------------*/
        let params ={userName: localStorage.getItem("userName")}
        let res = await CustomerService.fetchCustomer(params);

        if (res.status === 200) {
            let cusData = res.data.data;

            console.log('customer data'+cusData);

            this.setState({

                customer: {
                    id: cusData.id,
                    nic: cusData.nic,
                    name: {
                        firstName: cusData.name.firstName,
                        lastName: cusData.name.lastName
                    },

                    user: {
                        userId: '',
                        role: '',
                        userName: cusData.user.userName,
                        passWord: cusData.user.passWord,
                    },

                    licenseNo: cusData.licenseNo,
                    address: cusData.address,
                    contactNo: cusData.contactNo,
                },
            });
        }


        /*------------Load vehicle data-------------------*/

        let paramsVehicle = {vehicleId:localStorage.getItem("vehicle")}

        let res1 = await vehicleService.fetchVehicleData(paramsVehicle);

        if (res1.status === 200) {
            let cusData = res.data.data;

            this.setState({
                vehicleBooking:res1.data.data
            });
        }



    };



    submitBooking = async () => {
        let booking = this.state.booking;

        console.log(booking)

            let res = await BookingService.postBooking(booking);

            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                await this.loadData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }

    };

    componentDidMount() {
        this.loadData();
    }

    render() {
        const {classes} = this.props;

        return(
            <Fragment>

               <Grid className={classes.container}>


                    {/*------------------Nav Tabs----------------------*/}
                   <Grid className={classes.navTabs}>
                       <Tabs centered>
                           <Tab label="Home" href="/" style={{color: 'black'}}/>
                           <Tab label="Reservation" href="ReservationPage" style={{color: 'black'}}/>
                           <Tab label="About Us" style={{color: 'black'}}/>
                           <Tab label="Contact Us" style={{color: 'black'}}/>
                           <Tab label="Sign In" style={{color: 'black'}}/>
                           <Tab label="Sign Up" style={{color: 'black'}}/>
                       </Tabs>

                       <AccountCircleIcon style={{fontSize:'25px',paddingTop:'10px',color:'black',fontFamily:'Quicksand'}}/>

                   </Grid>


                   {/*-----------------date picker,time picker---------*/}
                   <Grid style={{display:'flex',width:'96vw',justifyContent:'center',paddingTop:'4vh',paddingLeft:'2vw'}}>
                       <Grid  className={classes.dateTimeContainer}>

                           <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Date" variant="outlined" size="small" style={{width: '80%'}}

                                      value={format(new Date(localStorage.getItem("pickUpDate")),"yyyy-MM-dd")}
                                      onChange={(e) => {
                                          let formDataOb =this.state.formData
                                          formDataOb.customer.id = e.target.value
                                          this.setState(formDataOb)
                                      }}
                                      validators={['required']}

                           />

                           <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Time" variant="outlined" size="small" style={{width: '80%'}}
                                      value={format(new Date(localStorage.getItem("returnTime")),"HH:mm a")}


                           />


                           <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Date" variant="outlined" size="small" style={{width: '80%'}}

                                      value={format(new Date(localStorage.getItem("returnDate")),"yyyy-MM-dd")}
                                      onChange={(e) => {
                                          let formDataOb =this.state.formData
                                          formDataOb.customer.id = e.target.value
                                          this.setState(formDataOb)
                                      }}
                                      validators={['required']}

                           />

                           <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Time*" variant="outlined" size="small" style={{width: '80%'}}
                                      value={format(new Date(localStorage.getItem("returnTime")),"HH:mm a")}

                           />


                           <Autocomplete
                               style={{width:'12vw'}}
                               disablePortal
                               id="combo-box-demo"
                               options={vehicleType}
                               sx={{ width: 300 }}
                               renderInput={(params) => <TextField {...params} label="Vehicle Category" />}
                           />


                       </Grid>

                       <Grid paddingLeft='1vw'>
                           <Button style={{backgroundColor:'#FF9900',color:'black',fontWeight:'semi',height:'9vh',width:'8vw',
                               fontSize:'15px',opacity:'95%'}}
                           >Find My Car</Button>
                       </Grid>
                   </Grid>


                    {/*--------------------Customer Details Title------*/}
                   <Typography style={{color:'black',paddingTop: '6vh',fontSize:'26px',paddingLeft:'2vw'}}>
                       Customer Details
                   </Typography>



                   {/*-----------------Customer Details----------------*/}
                       <Grid container spacing={3} style={{paddingTop: '4vh',width:'50vw',paddingLeft:'2vw'}}>

                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" placeHolder="Customer Id*" label="Customer Id*" variant="outlined" size="small" style={{width: '80%'}}

                                          value={this.state.customer.id}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.id = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}

                               />
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" placeHolder="Customer First Name*" label="Customer Name*" variant="outlined" size="small" style={{width: '80%'}}

                                          value={this.state.customer.name.firstName}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.name.firstName = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}

                               />
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" placeHolder="Customer NIC*" label="Customer NIC*" variant="outlined" size="small" style={{width: '80%'}}

                                          value={this.state.customer.nic}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.nic = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}


                               />
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Driving License No *" size="small" variant="outlined" style={{width: '80%'}}

                                          value={this.state.customer.licenseNo}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.licenseNo = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}

                               />
                           </Grid>

                           <Grid item lg={8} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Address" size="small" variant="outlined" style={{width: '91%'}}

                                          value={this.state.customer.address}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.address = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}


                               />
                           </Grid>

                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Contact No" size="small" style={{width: '80%'}} variant="outlined"

                                          value={this.state.customer.contactNo}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.contactNo = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}

                               />
                           </Grid>

                           <Grid item lg={8} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="E-mail" size="small" style={{width: '91%'}} variant="outlined"

                                          value={this.state.customer.email}
                                          onChange={(e) => {
                                              let formDataOb =this.state.formData
                                              formDataOb.customer.email = e.target.value
                                              this.setState(formDataOb)
                                          }}
                                          validators={['required']}

                               />
                           </Grid>


                           <TextField id="outlined-basic" placeHolder="Customer Id*" label="Vehicle Id" variant="outlined" size="small" style={{width: '80%'}}

                                      value={this.state.vehicleBooking.registrationNo}
                                      /*onChange={(e) => {
                                          let formDataOb =this.state.formData
                                          formDataOb.customer.email = e.target.value
                                          this.setState(formDataOb)
                                      }}*/
                                      validators={['required']}

                           />






                       </Grid>









                   {/*--------------------Booking Details Title------*/}
                   <Typography style={{color:'black',paddingTop: '8vh',fontSize:'26px',paddingLeft:'2vw'}}>
                       Bookings Details
                   </Typography>


                   <Grid container spacing={3} style={{paddingTop: '4vh',width:'50vw',paddingLeft:'2vw'}}>

                       <Grid item lg={4} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic" placeHolder="Booking Id*" label="Booking Id*" variant="outlined" size="small" style={{width: '80%'}}/>
                       </Grid>


                       <Grid item lg={4} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic" placeHolder="Pick-Up-Date" label="Pick-Up-Date" variant="outlined" size="small" style={{width: '80%'}}/>
                       </Grid>


                       <Grid item lg={4} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic" placeHolder="Pick-Up-Time" label="Pick-Up-Time" variant="outlined" size="small" style={{width: '80%'}}/>
                       </Grid>


                       <Grid item lg={4} md={6} sm={6} xm={6}>
                           <FormControl>
                               <FormLabel id="demo-row-radio-buttons-group-label">Need a Driver</FormLabel>
                               <RadioGroup
                                   row
                                   aria-labelledby="demo-row-radio-buttons-group-label"
                                   defaultValue="Yes"
                                   name="row-radio-buttons-group"
                               >
                                   <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                                   <FormControlLabel value="No" control={<Radio />} label="No" />
                               </RadioGroup>
                           </FormControl>
                       </Grid>


                   </Grid>



                   {/*--------------------Booking Details Title------*/}
                   <Typography style={{color:'black',paddingTop: '8vh',fontSize:'26px',paddingLeft:'2vw'}}>
                       Vehicle Details
                   </Typography>


                   {/*-----------------Vehicle Details----------------*/}
                   {/*<Grid width={'60%'} display={"flex"} flexWrap={'wrap'}>

                       <TextField
                           required
                           id="outlined-required"
                           label="vehicleId"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.vehicleId}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.vehicleId = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Registration number"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.registrationNo}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.registrationNo = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Brand "
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.brand}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.brand = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Color"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.color}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.color = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="No Of Passengers"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.noOfPassengers}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.noOfPassengers = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />
                       <TextField
                           required
                           id="outlined-required"
                           label="Mileage"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.mileage}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.mileage = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Last Service Mileage"
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.lastServiceKm}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.lastServiceKm = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Price Per Extra KM "
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.pricePerExtraKm}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.pricePerExtraKm = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />

                       <TextField
                           required
                           id="outlined-required"
                           label="Damage Fee "
                           sx={{ m: 1, width: '22.7ch' }}
                           //value={this.state.formData.damageFee}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.damageFee = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />
                       <TextField
                           required
                           id="outlined-required"
                           label="Daily Price"
                           sx={{ m: 1, width: '35ch' }}
                           //value={this.state.formData.vehiclePriceRate.dailyRate}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.vehiclePriceRate.dailyRate = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />
                       <TextField
                           required
                           id="outlined-required"
                           label="Monthly Price"
                           defaultValue=""
                           sx={{ m: 1, width: '35ch' }}
                           //value={this.state.formData.vehiclePriceRate.monthlyRate}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.vehiclePriceRate.monthlyRate = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />
                       <TextField
                           required
                           id="outlined-required"
                           label="Daily Free Milage "
                           sx={{ m: 1, width: '35ch' }}
                           //value={this.state.formData.freeMileAge.dailyMileage}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.freeMileAge.dailyMileage = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />
                       <TextField
                           required
                           id="outlined-required"
                           label="Monthly Free Milage "
                           sx={{ m: 1, width: '35ch' }}
                           //value={this.state.formData.freeMileAge.monthlyMileage}
                           onChange={(e) => {
                               let formDataOb =this.state.formData
                               formDataOb.freeMileAge.monthlyMileage = e.target.value
                               this.setState(formDataOb)
                           }}
                           validators={['required']}
                       />


                       <Autocomplete

                           onChange={(e, value, r) => {
                               let formData = this.state.formData

                               formData.vehicleType = value.type
                               this.setState({ formData })

                           }}
                           getOptionLabel={
                               (option) => option.type
                           }
                           id="controllable-states"

                           value={this.state.formData.freeMileAge.dailyMileage}

                           options={this.state.vehicleTypes}
                           sx={{m: 1, width: '35ch' }}
                           renderInput={(params) => <TextField {...params} label="Vehicle Type" />}
                       />


                       <Autocomplete

                           onChange={(e, value, r) => {

                               let formData = this.state.formData
                               formData.transmissionType = value.type

                               this.setState({ formData })

                           }}
                           getOptionLabel={
                               (option) => option.type
                           }
                           id="controllable-demo"
                           options={this.state.transmissionTypes}
                           sx={{ m: 1,width: '35ch' }}
                           renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                       />

                       <Autocomplete

                           onChange={(e, value, r) => {

                               let formData = this.state.formData

                               formData.fuelType = value.type

                               this.setState({ formData })

                           }}
                           getOptionLabel={
                               (option) => option.type
                           }
                           id="controllable"
                           options={this.state.fuelTypes}
                           sx={{ m:1, width: '35ch' }}
                           renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                       />


                       <Autocomplete

                           onChange={(e, value, r) => {

                               let formData = this.state.formData

                               formData.vehicleAvailability = value.type

                               this.setState({ formData })

                           }}
                           getOptionLabel={
                               (option) => option.type
                           }
                           id="controllable"
                           options={this.state.vehicleAvailabilityTypes}
                           sx={{ m:1, width: '35ch' }}
                           renderInput={(params) => <TextField {...params} label="Availability" />}
                       />


                   </Grid>*/}


                   <Button onClick={this.submitBooking} variant="contained" color="success" style={{margin:"1vh"}}>
                       Place Booking
                   </Button>

               </Grid>

            </Fragment>

        )
    }

}

export default withStyles(styleSheet)(PaymentPage)