import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./bookingPaymentStyle";
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, Tab, Tabs, TextField, Typography} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import BookingService from "../../../service/bookingService";
import CustomerService from "../../../service/customerService";
import {format} from "date-fns";
import vehicleService from "../../../service/vehicleService";
import DriverService from "../../../service/DriverService";


const vehicleType = [
    {label: 'General'},
    {label: 'Premium'},
    {label: 'Luxury'},
]

class PaymentPage extends Component {

    constructor(props) {
        super(props);

        this.state = {

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
                contactNo: '',
            },

            vehicleBooking: {},
            needDriver: 'NO',
            driver: {},
        }
    }

    loadData = async () => {
        /*--------------Load Customer Data--------------------*/
        let params = {userName: localStorage.getItem("userName")}
        let res = await CustomerService.fetchCustomer(params);

        if (res.status === 200) {
            let cusData = res.data.data;

            console.log('customer data' + cusData);

            this.setState({

                customer: {
                    id: cusData.id,
                    nic: cusData.nic,
                    name: {
                        firstName: cusData.name.firstName,
                        lastName: cusData.name.lastName
                    },

                    user: {
                        userId: cusData.user.userId,
                        role: cusData.user.role,
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

        let paramsVehicle = {vehicleId: localStorage.getItem("vehicle")}

        let res1 = await vehicleService.fetchVehicleData(paramsVehicle);

        if (res1.status === 200) {
            let cusData = res.data.data;

            this.setState({
                vehicleBooking: res1.data.data
            });
        }


    };

    submitBooking = async () => {
        let driverSchedule = [];

        if (this.state.needDriver == "YES"){
            driverSchedule =[
                {
                    driverId :this.state.driver.driverId,
                    bookingId:'B007',
                    driver:this.state.driver,
                    booking:{
                        bookingId: 'B007',
                        pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        driverRequestType: this.state.needDriver,

                        customer: this.state.customer,

                        bookingDetailsList: [
                            {
                                vehicleId: this.state.vehicleBooking.vehicleId,
                                bookingId: "B007",
                                vehicle: this.state.vehicleBooking,
                                booking: {
                                    bookingId: 'B007',
                                    pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                                    pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                                    returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                                    returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                                    driverRequestType: this.state.needDriver,

                                    customer: this.state.customer,

                                    driverScheduleDTOList: [
                                        {
                                            driverId :this.state.driver.driverId,
                                            bookingId:'B007',
                                            driver:this.state.driver,
                                        }
                                    ],

                                },
                            }

                        ],
                    }
                }
            ]
        }

        let booking = {
            bookingId: 'B007',
            pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
            returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
            returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
            driverRequestType: this.state.needDriver,

            customer: this.state.customer,

            driverScheduleDTOList: [],

            bookingDetailsList: [
                {
                    vehicleId: this.state.vehicleBooking.vehicleId,
                    bookingId: "B007",
                    vehicle: this.state.vehicleBooking,
                    booking: {
                        bookingId: 'B007',
                        pickUpDate: format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
                        pickUpTime: format(new Date(localStorage.getItem("pickUpTime")), "HH:mm:ss"),
                        returnDate: format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
                        returnTime: format(new Date(localStorage.getItem("returnTime")), "HH:mm:ss"),
                        driverRequestType: this.state.needDriver,

                        customer: this.state.customer,

                        driverScheduleDTOList: [],

                    },
                }

            ],
        }


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


    setDriver = async () => {


        let res = await DriverService.fetchAvailableDriver();

        if (res.status === 200) {

            this.setState({
                driver: res.data.data,
            });
        }


    };


    render() {
        const {classes} = this.props;

        return (
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

                        <AccountCircleIcon
                            style={{fontSize: '25px', paddingTop: '10px', color: 'black', fontFamily: 'Quicksand'}}/>

                    </Grid>


                    {/*-----------------date picker,time picker---------*/}
                    <Grid style={{
                        display: 'flex',
                        width: '96vw',
                        justifyContent: 'center',
                        paddingTop: '4vh',
                        paddingLeft: '2vw'
                    }}>
                        <Grid className={classes.dateTimeContainer}>

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Date"
                                       variant="outlined" size="small" style={{width: '80%'}}

                                       value={format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd")}
                                       onChange={(e) => {
                                           let formDataOb = this.state.formData
                                           formDataOb.customer.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Time"
                                       variant="outlined" size="small" style={{width: '80%'}}
                                       value={format(new Date(localStorage.getItem("pickUpTime")), "HH:mm a")}


                            />


                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Date"
                                       variant="outlined" size="small" style={{width: '80%'}}

                                       value={format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")}
                                       onChange={(e) => {
                                           let formDataOb = this.state.formData
                                           formDataOb.customer.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Time*"
                                       variant="outlined" size="small" style={{width: '80%'}}
                                       value={format(new Date(localStorage.getItem("returnTime")), "HH:mm a")}

                            />


                            <Autocomplete
                                style={{width: '12vw'}}
                                disablePortal
                                id="combo-box-demo"
                                options={vehicleType}
                                sx={{width: 300}}
                                renderInput={(params) => <TextField {...params} label="Vehicle Category"/>}
                            />


                        </Grid>

                        <Grid paddingLeft='1vw'>
                            <Button style={{
                                backgroundColor: '#FF9900',
                                color: 'black',
                                fontWeight: 'semi',
                                height: '9vh',
                                width: '8vw',
                                fontSize: '15px',
                                opacity: '95%'
                            }}
                            >Find My Car</Button>
                        </Grid>
                    </Grid>


                    {/*--------------------Customer Details Title------*/}
                    <Typography style={{color: 'black', paddingTop: '6vh', fontSize: '26px', paddingLeft: '2vw'}}>
                        Customer Details
                    </Typography>


                    {/*-----------------Customer Details----------------*/}
                    <Grid container spacing={3} style={{paddingTop: '4vh', width: '50vw', paddingLeft: '2vw'}}>

                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Customer Id*"
                                       variant="outlined" size="small" style={{width: '80%'}}

                                       value={this.state.customer.id}
                                       onChange={(e) => {
                                           let formDataOb = this.state.formData
                                           formDataOb.customer.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Customer First Name*" label="Customer Name*"
                                       variant="outlined" size="small" style={{width: '80%'}}
                                       value={this.state.customer.name.firstName}
                                       validators={['required']}

                            />
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Customer NIC*" label="Customer NIC*"
                                       variant="outlined" size="small" style={{width: '80%'}}

                                       value={this.state.customer.nic}
                                       validators={['required']}


                            />
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" label="Driving License No *" size="small" variant="outlined"
                                       style={{width: '80%'}}

                                       value={this.state.customer.licenseNo}
                                       validators={['required']}

                            />
                        </Grid>

                        <Grid item lg={8} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" label="Address" size="small" variant="outlined"
                                       style={{width: '91%'}}

                                       value={this.state.customer.address}

                                       validators={['required']}


                            />
                        </Grid>

                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" label="Contact No" size="small" style={{width: '80%'}}
                                       variant="outlined"

                                       value={this.state.customer.contactNo}

                                       validators={['required']}

                            />
                        </Grid>

                        <Grid item lg={8} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" label="E-mail" size="small" style={{width: '91%'}}
                                       variant="outlined"

                                       value={this.state.customer.email}

                                       validators={['required']}

                            />
                        </Grid>


                    </Grid>


                    {/*--------------------Booking Details Title------*/}
                    <Typography style={{color: 'black', paddingTop: '8vh', fontSize: '26px', paddingLeft: '2vw'}}>
                        Bookings Details
                    </Typography>


                    <Grid container spacing={3} style={{paddingTop: '4vh', width: '50vw', paddingLeft: '2vw'}}>

                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Booking Id*" label="Booking Id*"
                                       variant="outlined" size="small" style={{width: '80%'}}/>
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Pick-Up-Date" label="Pick-Up-Date"
                                       variant="outlined" size="small" style={{width: '80%'}}/>
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Pick-Up-Time" label="Pick-Up-Time"
                                       variant="outlined" size="small" style={{width: '80%'}}/>
                        </Grid>


                        <Grid item lg={4} md={6} sm={6} xm={6}>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Need a Driver</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    defaultValue="No"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel value="Yes" control={<Radio/>} label="Yes"
                                                      onClick={() => {
                                                          this.setState({
                                                              needDriver: "YES"
                                                          })

                                                          this.setDriver();
                                                      }}


                                    />
                                    <FormControlLabel value="No" control={<Radio/>} label="No"
                                                      onClick={() => {
                                                          this.setState({
                                                              needDriver: "NO"
                                                          })

                                                      }}


                                    />
                                </RadioGroup>
                            </FormControl>
                        </Grid>


                    </Grid>


                    {/*--------------------Booking Details Title------*/}
                    <Typography style={{color: 'black', paddingTop: '8vh', fontSize: '26px', paddingLeft: '2vw'}}>
                        Vehicle Details
                    </Typography>


                    {/*-----------------Vehicle Details----------------*/}
                    <Grid width={'60%'} display={"flex"} flexWrap={'wrap'}>

                        <TextField
                            required
                            id="outlined-required"
                            label="vehicleId"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.vehicleId}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Registration number"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.registrationNo}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Brand "
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.brand}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Color"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.color}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="No Of Passengers"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.noOfPassengers}

                            validators={['required']}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Mileage"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.mileage}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Last Service Mileage"
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.lastServiceKm}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Price Per Extra KM "
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.pricePerExtraKm}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Damage Fee "
                            sx={{m: 1, width: '22.7ch'}}
                            value={this.state.vehicleBooking.damageFee}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Transmission Type "
                            sx={{m: 1, width: '35ch'}}
                            value={this.state.vehicleBooking.transmissionType}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Vehicle Type"
                            sx={{m: 1, width: '35ch'}}
                            value={this.state.vehicleBooking.vehicleType}

                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Fuel Type"
                            sx={{m: 1, width: '35ch'}}
                            value={this.state.vehicleBooking.fuelType}

                            validators={['required']}
                        />
                    </Grid>


                    <Button onClick={this.submitBooking} variant="contained" color="success" style={{margin: "1vh"}}>
                        Place Booking
                    </Button>

                </Grid>

            </Fragment>

        )
    }

}

export default withStyles(styleSheet)(PaymentPage)