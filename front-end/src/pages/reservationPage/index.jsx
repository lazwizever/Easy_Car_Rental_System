import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import {Autocomplete, Button, CardActions, CardContent, CardMedia, Tab, Tabs, TextField} from "@mui/material";
import {withStyles} from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/img/logo.png";
import {Card} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import BMW from "../../assets/img/bmw.jpg"
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



class ReservationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            vehicleList: []
        }


    }


    loadAvailableVehicles = async () => {

        let params = {
            pickupDate: format(new Date(localStorage.getItem("pickUpDate")),'yyyy-MM-dd') ,
            returnDate: format(new Date(localStorage.getItem("returnDate")),'yyyy-MM-dd')
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
                            <Tab label="Reservation" href="Reservation" style={{color: '#000000'}}/>
                            <Tab label="About Us" style={{color: '#000000'}}/>
                            <Tab label="Contact Us" style={{color: '#000000'}}/>
                            <Tab label="Sign In" style={{color: '#000000'}}/>
                            <Tab label="Sign Up" style={{color: '#000000'}}/>
                        </Tabs>

                        <AccountCircleIcon
                            style={{fontSize: '25px', paddingTop: '10px', color: '#000000', fontFamily: 'Quicksand'}}/>

                    </Grid>


                    {/*-----------------------Search Bar--------------------------*/}

                    <Grid style={{display: 'flex', width: '100vw', justifyContent: 'center', paddingTop: '6vh'}}>
                        <Grid className={classes.dateTimeContainer}>

                            <DatePickerBrwoser label="Pick-Up-Date"
                                /*expect(screen.getByDisplayValue('01/01/2022')).toBeInTheDocument();*/

                            />

                            <TimePickerBrowser label="Pick-Up-Time"/>

                            <DatePickerBrwoser label="Drop-Off-Date"/>

                            <TimePickerBrowser label="Drop-Off-Time"/>


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
                            <Button type='submit' style={{
                                backgroundColor: '#FF9900',
                                color: 'black',
                                fontWeight: 'semi',
                                marginTop:'0.6vh',
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


                    <Grid style={{
                        width: '96vw',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexDirection: "row",
                        flexWrap: 'wrap',
                        marginTop: '10vh',
                        marginLeft:'1.5vw'
                    }}>
                        {
                            this.state.vehicleList.map((vehicle) => (


                                <Card style={{width: '31vw', marginTop: '1vh',height:"60vh"}}>
                                    <CardMedia
                                        component="img"
                                        alt="img"
                                        height="320"
                                        image={BMW}

                                    />
                                    <CardContent>
                                        <Typography variant="h10" textAlign={'center'}>
                                            {"Brand - "+vehicle.brand}<br/>
                                            {"Registration No - "+vehicle.registrationNo}<br/>
                                            {"Color - "+vehicle.color}<br/>
                                            {"Vehicle Type - "+vehicle.vehicleType}<br/>
                                            {"Transmission  Type - "+vehicle.transmissionType}<br/>
                                            {"Fuel Type - "+vehicle.fuelType}<br/>
                                            {/*{"Daily Price Rate(Rs) - "+vehicle.transmissionTyp}<br/>*/}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{display: 'flex', justifyContent: 'center'}}>




                                        <Link to="payment"

                                              onClick={ ()=>{
                                                  localStorage.setItem("vehicle",vehicle.vehicleId)
                                              }}

                                              style={{ textDecoration: 'none', color: 'black' }}>
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


                    {/* <Grid style={{display:"flex",justifyContent:'space-evenly',alignItems:"center",width:"12vw",backgroundColor:"white",
                    marginLeft:'70vw',flexDirection:'column',marginTop:'-55vh',flexWrap:'wrap',height:'40vh'}}>
                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="No of passengers" />}
                    />

                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Transmission type" />}
                    />
                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Type" />}
                    />

                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Brand " />}
                    />

                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Price" />}
                    />

                    <Autocomplete
                        style={{width:'12vw'}}
                        disablePortal
                        id="combo-box-demo"
                        options={vehicleType}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Fuel type" />}
                    />

                </Grid>*/}


                </Grid>

        )
    }
}

export default withStyles(styleSheet)(ReservationPage)