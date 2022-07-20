import {Component} from "react";
import {styleSheet} from ".//style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import {Box, Button, Card, CardActionArea, CardContent, CardMedia, Tab, Tabs, Typography} from "@mui/material";
import benzImage from "../../assets/vehiclePhotos/Mercedes-Benz.jpg"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import * as React from "react";
import logo from "../../assets/img/logo.png";
import {Link} from "@mui/icons-material";



class VehiclePage extends Component{

    render() {

        const {classes} = this.props;

        return(
           <Grid className={classes.vehiclePage}>

               {/*------------------------Nav Tabs-----------------------------*/}
               <Grid className={classes.navTabs}>
                   <Tabs centered>
                       <Tab label="Home" href="/" style={{color: '#B5B5B5'}}/>
                       <Tab label="Reservation" href="Reservation" style={{color: '#B5B5B5'}}/>
                       <Tab label="About Us" style={{color: '#B5B5B5'}}/>
                       <Tab label="Contact Us" style={{color: '#B5B5B5'}}/>
                       <Tab label="Sign In" style={{color: '#B5B5B5'}}/>
                       <Tab label="Sign Up" style={{color: '#B5B5B5'}}/>
                   </Tabs>

                   <AccountCircleIcon style={{fontSize:'25px',paddingTop:'10px',color:'#B5B5B5',fontFamily:'Quicksand'}}/>

               </Grid>


               {/*-------------------------Logo--------------------------------*/}
               <Grid style={{position:'absolute',paddingLeft:'4vw',paddingTop:'0vh'}}>
                   <img src={logo} style={{position:'absolute',height:'7vh',width:'7vw'}}/>

                   <h3 style={{margin:'auto',color:'#B5B5B5',paddingLeft:'1.5vw',paddingTop:'3.5vh',fontWeight:'unset'}}>Easy Car</h3>
                   <h1 style={{color:'#B5B5B5',fontSize:'11px',margin:'auto',paddingLeft:'2.2vw',fontWeight:'unset'}}>rental pvt</h1>
               </Grid>



               {/*------------------------Vehicle info-----------------------------*/}
               <Grid style={{paddingTop:'7vh',paddingLeft:'4vw',width:'96vw'}}>

                   <Card sx={{ display: 'flex'}}>

                       <CardMedia
                           component="img"
                           sx={{ width: 750 }}
                           image={benzImage}
                           alt="Live from space album cover"
                       />


                       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                           <CardContent sx={{ flex: '1 0 auto' }}>
                               <Typography component="div" variant="h4">
                                   Mercedes-Benz
                               </Typography>
                               <Typography variant="subtitle1" color="text.secondary" component="div">


                                   <Grid style={{display:'flex',justifyContent:'space-between',paddingTop:'6vh',width:'38vw'}}>

                                       <Grid>
                                           Color - Black<br/><br/>
                                           Type - Luxury<br/><br/>
                                           No of passengers - 5<br/><br/>
                                           Transmission type - Manual<br/><br/>
                                           Fuel Type - Diesel<br/><br/>
                                           Registration number - 4506584798463

                                       </Grid>

                                       <Grid>
                                           Prices for the rent durations.<br/>
                                             - Daily rate (Rs) - 18,000<br/>
                                             - Monthly rate (Rs) - 300,000.00<br/><br/>
                                           Free mileage for the price and duration<br/>
                                             - Free Km for a Day - 100<br/>
                                             - Free Km for a month - 2400<br/><br/>
                                           Price for extra km (Rs)-  100.00

                                       </Grid>

                                   </Grid>

                               </Typography>
                           </CardContent>

                       </Box>

                   </Card>


               </Grid>


               <Grid paddingLeft='88vw' paddingTop='2vh'>
                       <Button style={{backgroundColor:'#FF9900',color:'black',fontWeight:'semi',height:'6vh',width:'8vw',
                           fontSize:'15px',opacity:'95%'}}
                       href="BookingPage"

                       >Book Now</Button>
               </Grid>


           </Grid>
        )
    }

}
export default withStyles(styleSheet)(VehiclePage)