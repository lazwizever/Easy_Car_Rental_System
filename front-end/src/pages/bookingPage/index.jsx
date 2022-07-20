import React, { Component, Fragment } from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from ".//style";
import Grid from "@mui/material/Grid";
import bookingBg from "../../assets/img/bookingBg.jpg";
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



const vehicleType = [
    { label: 'General'},
    { label: 'Premium'},
    { label: 'Luxury'},
]

class BookingPage extends Component{
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

                           <LocalizationProvider dateAdapter={AdapterDateFns}>
                               <DatePicker
                                   label="Pick-Up-Date"
                                   //value={value}
                                   onChange={(newValue) => {
                                       //setValue(newValue);
                                   }}
                                   renderInput={(params) => <TextField {...params} />}
                               />
                           </LocalizationProvider>

                           <LocalizationProvider dateAdapter={AdapterDateFns}>
                               <TimePicker
                                   label="Pick-Up-Time"
                                   //value={value}
                                   onChange={(newValue) => {
                                       //setValue(newValue);
                                   }}
                                   renderInput={(params) => <TextField {...params} />}
                               />
                           </LocalizationProvider>


                           <LocalizationProvider dateAdapter={AdapterDateFns}>
                               <DatePicker
                                   label="Drop-Off-Date"
                                   //value={value}
                                   onChange={(newValue) => {
                                       //setValue(newValue);
                                   }}
                                   renderInput={(params) => <TextField {...params} />}
                               />
                           </LocalizationProvider>

                           <LocalizationProvider dateAdapter={AdapterDateFns}>
                               <TimePicker
                                   label="Drop-Off-Time"
                                   //value={value}
                                   onChange={(newValue) => {
                                       //setValue(newValue);
                                   }}
                                   renderInput={(params) => <TextField {...params} />}
                               />
                           </LocalizationProvider>


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
                               <TextField id="outlined-basic" placeHolder="Customer Id*" label="Customer Id*" variant="outlined" size="small" style={{width: '80%'}}/>
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" placeHolder="Customer Name*" label="Customer Name*" variant="outlined" size="small" style={{width: '80%'}}/>
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" placeHolder="Customer NIC*" label="Customer NIC*" variant="outlined" size="small" style={{width: '80%'}}/>
                           </Grid>


                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Driving License No *" size="small" variant="outlined" style={{width: '80%'}}/>
                           </Grid>

                           <Grid item lg={8} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Address" size="small" variant="outlined" style={{width: '91%'}}/>
                           </Grid>

                           <Grid item lg={4} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="Contact No" size="small" style={{width: '80%'}} variant="outlined"/>
                           </Grid>

                           <Grid item lg={8} md={6} sm={6} xm={6}>
                               <TextField id="outlined-basic" label="E-mail" size="small" style={{width: '91%'}} variant="outlined"/>
                           </Grid>


                       </Grid>



                   {/*--------------------Booking Details Title------*/}
                   <Typography style={{color:'black',paddingTop: '8vh',fontSize:'26px',paddingLeft:'2vw'}}>
                       Bookings Details
                   </Typography>



                   {/*-----------------Driver Details----------------*/}
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




               </Grid>

            </Fragment>

        )
    }

}

export default withStyles(styleSheet)(BookingPage)