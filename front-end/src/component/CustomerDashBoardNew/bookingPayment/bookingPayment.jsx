import React, {Component, Fragment} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./bookingPaymentStyle";
import Grid from "@mui/material/Grid";
import {
    Autocomplete,
    Button,
    CardActions,
    CardContent,
    CardMedia,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
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
import {Card} from "@material-ui/core";
import BMW from "../../../assets/img/bmw.jpg";
import {Link} from "react-router-dom";
import GDSESnackBar from "../../SnackBar";
import GDESButton from '../../Button/button';


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


            alert: false,
            message: '',
            severity: '',

            btnLabel: 'PlaceBooking',

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
                        bookingStatus:'UNDER_REVIEW',
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
                                    bookingStatus:'UNDER_REVIEW',
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
            bookingStatus:'UNDER_REVIEW',
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
                        bookingStatus:'UNDER_REVIEW',
                        driverRequestType: this.state.needDriver,

                        customer: this.state.customer,

                        driverScheduleDTOList: [],

                    },
                }

            ],
        }


        let res = await BookingService.postBooking(booking);

        if (res.status === 200) {
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

        let params = {
            pickUpDate:format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd"),
            returnDate:format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd"),
        }

        let res = await DriverService.fetchAvailableDriver(params);

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

                <Grid className={classes.container} style={{overflow:'hidden'}}>


                    {/*------------------Nav Tabs----------------------*/}
                    <Grid className={classes.navTabs}>
                        <Tabs centered>
                            {/*<Tab label="Home" href="/" style={{color: 'black'}}/>*/}
                           {/* <Tab label="Reservation" href="ReservationPage" style={{color: 'black'}}/>
                            <Tab label="About Us" style={{color: 'black'}}/>
                            <Tab label="Contact Us" style={{color: 'black'}}/>
                            <Tab label="Sign In" style={{color: 'black'}}/>
                            <Tab label="Sign Up" style={{color: 'black'}}/>*/}
                        </Tabs>

                    </Grid>


                    <Typography style={{color: 'black', marginTop: '-8vh', fontSize: '36px', paddingLeft: '35vw'}}>
                        Make Your Booking
                    </Typography>



                    {/*--------------------Customer Details Title------*/}
                    <Typography style={{color: 'black', marginTop: '4vh', fontSize: '26px', paddingLeft: '2vw'}}>
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
                    <Typography style={{color: 'black', marginTop: '-26.5vh', fontSize: '26px', marginLeft: '50vw'}}>
                        Bookings Details
                    </Typography>


                    {/*-----------------date picker,time picker---------*/}
                    <Grid style={{
                        display: 'flex',
                        width: '96vw',
                        justifyContent: 'center',
                        flexDirection:'column',
                        paddingTop: '4vh',
                        marginLeft: '50vw'
                    }}>
                        <Grid className={classes.dateTimeContainer}>

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Date"
                                       variant="outlined" size="small" style={{width: '10vw'}}

                                       value={format(new Date(localStorage.getItem("pickUpDate")), "yyyy-MM-dd")}
                                       onChange={(e) => {
                                           let formDataOb = this.state.formData
                                           formDataOb.customer.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Pick Up Time"
                                       variant="outlined" size="small" style={{width: '10vw'}}
                                       value={format(new Date(localStorage.getItem("pickUpTime")), "HH:mm a")}


                            />


                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Date"
                                       variant="outlined" size="small" style={{width: '10vw'}}

                                       value={format(new Date(localStorage.getItem("returnDate")), "yyyy-MM-dd")}
                                       onChange={(e) => {
                                           let formDataOb = this.state.formData
                                           formDataOb.customer.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />

                            <TextField id="outlined-basic" placeHolder="Customer Id*" label="Return Time*"
                                       variant="outlined" size="small" style={{width: '10vw'}}
                                       value={format(new Date(localStorage.getItem("returnTime")), "HH:mm a")}

                            />


                        </Grid>


                        <Grid marginTop='1vh'  item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic" placeHolder="Booking Id*" label="Booking Id*"
                                       variant="outlined" size="small" style={{width: '10vw'}}/>
                        </Grid>

                        <Grid marginTop='-5vh' marginLeft='11vw' item lg={4} md={6} sm={6} xm={6}>
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


                        <Grid marginTop='-6vh' marginLeft='22vw' item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"  label="Driver Id"
                                       variant="outlined" size="small" style={{width: '10vw'}}
                            //value={this.state.driver.id}

                            />
                        </Grid>

                        <Grid marginTop='-4vh' marginLeft='33vw' item lg={4} md={6} sm={6} xm={6}>
                            <TextField id="outlined-basic"  label="Driver Name"
                                       variant="outlined" size="small" style={{width: '10vw'}}/>
                        </Grid>


                    </Grid>


                    <Typography style={{color: 'black',fontSize:"26px",marginTop:"15vh",width:'15vw',marginLeft:'50vw'}}>Payment Details</Typography>


                    <Grid style={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'32vw',marginLeft:'50vw',marginTop:'2vh'}}>

                        <TextField id="outlined-basic" placeHolder="Amount" label="Amount (Rs)"
                                   variant="outlined"  style={{width: '10vw'}}/>

                        <TextField id="outlined-basic" placeHolder="Cash" label="Cash (Rs)"
                                   variant="outlined"  style={{width: '10vw'}}/>

                        <TextField id="outlined-basic" placeHolder="Amount" label="Total (Rs)"
                                   variant="outlined"  style={{width: '10vw'}}/>

                    </Grid>



<Typography style={{color: 'black',fontSize:"26px",marginTop:"-10vh",width:'10vw',marginLeft:'2vw'}}>Vehicle Details</Typography>

                    <Card style={{width: '31vw', marginTop: '2vh', height: "35vh",marginLeft:'2vw',backgroundColor:"#eeeff1"}}>
                        <CardContent>

                            <Grid style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                <Grid >
                                    {"Brand - " + this.state.vehicleBooking.brand}<br/><br/>
                                    {"Registration No - " + this.state.vehicleBooking.registrationNo}<br/><br/>
                                    {"Color - " +this.state.vehicleBooking.color}<br/><br/>
                                    {"Vehicle Type - " + this.state.vehicleBooking.vehicleType}<br/><br/>
                                    {"Transmission  Type - " + this.state.vehicleBooking.transmissionType}<br/><br/>
                                    {"Damage Fee - " + this.state.vehicleBooking.damageFee}<br/><br/>
                                </Grid>


                                <Grid >
                                    {"Price Per Extra KM - " + this.state.vehicleBooking.pricePerExtraKm}<br/><br/>
                                    {"Last Service Mileage - " + this.state.vehicleBooking.lastServiceKm}<br/><br/>
                                    {"No of Passengers - " + this.state.vehicleBooking.noOfPassengers}<br/><br/>
                                    {"Fuel Type - " + this.state.vehicleBooking.fuelType}<br/><br/>
                                    {"Mileage - " + this.state.vehicleBooking.mileage}<br/><br/>
                                   {/* {"Prices for the rent durations "}<br/>
                                    {"- Daily Price Rate(Rs) - "+this.state.vehicleBooking.vehiclePriceRate.dailyRate}<br/>
                                    {"- Monthly Price Rate(Rs) - "+this.state.vehicleBooking.vehiclePriceRate.monthlyRate}<br/><br/>*/}
                                   {/* {"Free mileage for the price and duration "}<br/>
                                    {"- Free Km for a Day - "+this.state.vehicleBooking.vehiclePriceRate.freeMileAge.dailyMileage}<br/>
                                    {"- Free Km for a month) - "+this.state.vehicleBooking.freeMileAge.monthlyMileage}<br/>*/}
                                </Grid>
                            </Grid>




                        </CardContent>
                        <CardActions style={{display: 'flex', justifyContent: 'center'}}>
                        </CardActions>
                    </Card>


                    <GDESButton onClick={this.submitBooking} variant="contained" label='PlaceBooking' color="success" style={{marginTop: "-25vh",marginLeft:'63vw'}}/>


                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </Fragment>

        )
    }

}

export default withStyles(styleSheet)(PaymentPage)