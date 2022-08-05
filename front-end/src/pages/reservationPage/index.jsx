import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, CardActions, CardContent, CardMedia, Tab, Tabs, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Card} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import benz from "../../assets/vehiclePhotos/Mercedes-Benz.jpg"
import BrowserService from "../../service/browserService";
import DatePickerBrwoser from "../../component/DatePickerBrwoser";
import TimePickerBrowser from "../../component/TimePickerBrowser";
import {styleSheet} from "./style";
import {format} from "date-fns";
import {Link} from "react-router-dom";


const vehicleType = [
    {label: 'General'},
    {label: 'Premium'},
    {label: 'Luxury'},
]

const noOfPassengers = [
    {label: '4'},
    {label: '5'},
    {label: '6'},
    {label: '7'},
]

const transmissionType = [
    {label: 'MANUAL'},
    {label: 'AUTO'},


]

const brand = [
    {label: 'BMW-i8'},
    {label: 'Toyota Allion'},
    {label: 'Toyota Premio'},
    {label: 'Toyota Prius'},
    {label: 'Mercedes-Benz'},

]

const price = [
    {label: '10,000'},
    {label: '20,000'},
    {label: '30,000'},

]

const fuelType =[
    {label: 'DIESEL'},
    {label: 'PETROL'},

]

class ReservationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            vehicleList: []
        }


    }


    loadAvailableVehicles = async () => {

        let params = {
            pickupDate: format(new Date(localStorage.getItem("pickUpDate")), 'yyyy-MM-dd'),
            returnDate: format(new Date(localStorage.getItem("returnDate")), 'yyyy-MM-dd')
        }


        let res = await BrowserService.fetchAvailableVehicle(params);

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };


    loadAllVehicles = async () => {
        let res = await BrowserService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };


    componentDidMount() {
        this.loadAvailableVehicles();
    }


    render() {
        const {classes} = this.props;
        return (

            <Grid className={classes.reservationContainer}>

                {/*-------------------------Logo--------------------------------*/}
                {/*<Grid style={{position: 'absolute', paddingLeft: '4vw', paddingTop: '1vh'}}>
                        <img src={logo} style={{position: 'absolute', height: '7vh', width: '7vw'}}/>

                        <h3 style={{
                            margin: 'auto',
                            color: '#B5B5B5',
                            paddingLeft: '1.5vw',
                            paddingTop: '3.5vh',
                            fontWeight: 'unset'
                        }}>Easy Car</h3>
                        <h1 style={{
                            color: '#B5B5B5',
                            fontSize: '11px',
                            margin: 'auto',
                            paddingLeft: '2.2vw',
                            fontWeight: 'unset'
                        }}>rental pvt</h1>
                    </Grid>*/}


                {/*------------------------Nav Tabs-----------------------------*/}
                <Grid className={classes.navTabs}>
                    <Tabs centered>
                        <Tab label="Home" href="/" style={{color: '#000000'}}/>
                        {/*<Tab label="Reservation" href="Reservation" style={{color: '#000000'}}/>
                            <Tab label="About Us" style={{color: '#000000'}}/>
                            <Tab label="Contact Us" style={{color: '#000000'}}/>
                            <Tab label="Sign In" style={{color: '#000000'}}/>*/}
                        <Tab label="Sign Up" style={{color: '#000000'}}/>
                    </Tabs>

                    <AccountCircleIcon
                        style={{fontSize: '25px', paddingTop: '10px', color: '#000000', fontFamily: 'Quicksand'}}/>

                </Grid>


                <Typography  style={{fontSize:'32px',fontWeight:'bold',marginTop:'-6vh',marginLeft:'38vw',width:'40vw'}}>
                    Easy Car Rental Private Limited
                </Typography>


                {/*-----------------------Search Bar--------------------------*/}

                <Grid style={{display: 'flex', width: '65vw', justifyContent: 'center', paddingTop: '6vh',marginLeft:'18vw'}}>
                    <Grid className={classes.dateTimeContainer}>

                        <DatePickerBrwoser label="Pick-Up-Date"/>

                        <TimePickerBrowser label="Pick-Up-Time"/>

                        <DatePickerBrwoser label="Drop-Off-Date"/>

                        <TimePickerBrowser label="Drop-Off-Time"/>

                    </Grid>

                    <Grid paddingLeft='1vw'>
                        <Button type='submit' style={{
                            backgroundColor: '#FF9900',
                            color: 'black',
                            fontWeight: 'semi',
                            marginTop: '0.6vh',
                            height: '6vh',
                            width: '8vw',
                            fontSize: '15px',
                            opacity: '95%'
                        }}

                                onClick={
                                    this.loadAvailableVehicles
                                }

                        >Find My Car</Button>
                    </Grid>
                </Grid>
                {/*---------------------------------------------------*/}


                <Typography style={{fontSize: '15px', fontWeight: "bold", marginLeft: "10vw",marginTop:'6vh',width:'6vw'}}>
                    Sort By
                </Typography>


                {/*----------------------------------------------sorting area------------------------*/}
                <Grid style={{
                    display: "flex",
                    justifyContent: 'space-evenly',
                    alignItems: "center",
                    width: "73vw",
                    backgroundColor: "#eeeff1",
                    marginLeft: '15vw',
                    flexDirection: 'row',
                    marginTop: '-4vh',
                    flexWrap: 'wrap',
                    height:'6vh'
                }}>

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Vehicle Category"/>}
                    />

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={noOfPassengers}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="No of passengers"/>}
                    />

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={transmissionType}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Transmission type"/>}
                    />
                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Type"/>}
                    />

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={brand}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Brand "/>}
                    />

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={price}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Price (Rs)"/>}
                    />

                    <Autocomplete
                        size='small'
                        style={{width: '10vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={fuelType}
                        sx={{width: 300}}
                        renderInput={(params) => <TextField {...params} label="Fuel type"/>}
                    />

                </Grid>


                <Grid style={{
                    width: '94vw',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    flexDirection: "row",
                    flexWrap: 'wrap',
                    marginTop: '10vh',
                    marginLeft: '2.5vw',
                    backgroundColor:'#eeeff1',
                }}>
                    {
                        this.state.vehicleList.map((vehicle) => (


                            <Card style={{width: '31vw', marginTop: '1vh', height: "75vh"}}>
                                <CardMedia
                                    component="img"
                                    alt="img"
                                    height="380"
                                    image={benz}

                                />
                                <CardContent>

                                    <Grid style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                                        <Grid >
                                            {"Brand - " + vehicle.brand}<br/><br/>
                                            {"Registration No - " + vehicle.registrationNo}<br/><br/>
                                            {"Color - " + vehicle.color}<br/><br/>
                                            {"Vehicle Type - " + vehicle.vehicleType}<br/><br/>
                                            {"Transmission  Type - " + vehicle.transmissionType}<br/><br/>


                                        </Grid>


                                        <Grid >
                                            {"Fuel Type - " + vehicle.fuelType}<br/><br/>
                                            {"Prices for the rent durations "}<br/>
                                            {"- Daily Price Rate(Rs) - "+vehicle.vehiclePriceRate.dailyRate}<br/>
                                            {"- Monthly Price Rate(Rs) - "+vehicle.vehiclePriceRate.monthlyRate}<br/><br/>
                                            {"Free mileage for the price and duration "}<br/>
                                            {"- Free Km for a Day - "+vehicle.freeMileAge.dailyMileage}<br/>
                                            {"- Free Km for a month) - "+vehicle.freeMileAge.monthlyMileage}<br/>
                                        </Grid>
                                    </Grid>




                                </CardContent>
                                <CardActions style={{display: 'flex', justifyContent: 'center'}}>


                                    <Link to="payment"

                                          onClick={() => {
                                              localStorage.setItem("vehicle", vehicle.vehicleId)
                                          }}

                                          style={{textDecoration: 'none', color: 'black'}}>
                                        <Typography textAlign="center">Book Now</Typography>
                                    </Link>

                                    {/*<Button size="small" style={{backgroundColor: 'green', color: 'white'}}
                                                href='/vehicleDetailsPage'

                                        >View More</Button>*/}
                                </CardActions>
                            </Card>
                        ))
                    }
                </Grid>


            </Grid>

        )
    }
}

export default withStyles(styleSheet)(ReservationPage)