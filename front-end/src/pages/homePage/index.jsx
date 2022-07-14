//import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import {withStyles} from "@mui/styles";
import {Component} from "react";
import homeIcon from "../../assets/img/homeIcon.jpg";
import {
    Box,
    Button,
    css,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Tab,
    Tabs,
    TextField,
    Typography
} from "@mui/material";
import * as PropTypes from "prop-types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import carsImage from '../../assets/img/carsTopic.png';
import {styleSheet as styles, styleSheet} from "./style";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import {TimePicker} from "@mui/x-date-pickers";
import contactUsImg from '../../assets/img/contactusimg1.jpg';
import logo from '../../assets/img/logo.png';
import PinDropIcon from '@mui/icons-material/PinDrop';
import HistoryIcon from '@mui/icons-material/History';
import CallIcon from '@mui/icons-material/Call';
import FaxIcon from '@mui/icons-material/Fax';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import ShopTwoIcon from '@mui/icons-material/ShopTwo';



const itemData = [
    {
        img: 'https://di-uploads-pod7.dealerinspire.com/mercedesbenztorontoregionalgroup/uploads/2019/04/CLAcoupeSmallPlate.jpg',
        title: 'Mercedes-Benz',
    },
    {
        img: 'https://pictures.topspeed.com/IMG/crop_webp/201709/bmw-i8-driven-79_1920x1080.webp',
        title: 'BMW-i8',
    },
    {
        img: 'https://senda.us/autocraft/avisnew/images/veh_images/1595305281_image47793.jpg',
        title: 'Toyota Allion',
    },
    {
        img: 'https://blog.japanesecartrade.com/wp-content/uploads/2020/01/Toyota-Premio.jpg',
        title: 'Toyota-Premio',
    },
    {
        img: 'https://media.ed.edmunds-media.com/toyota/prius/2019/oem/2019_toyota_prius_4dr-hatchback_xle-awd-e_fq_oem_2_1600.jpg',
        title: 'Toyota Prius',
    },
    {
        img: 'https://img.philkotse.com/2021/12/03/WFFKkBCT/celerio-retro-1-332c_wm.jpg',
        title: 'Suzuki Celerio',
    },

];


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        //const [value, setValue] = React.useState<Date | null>(null);

        const {classes} = this.props;
        return (

            <Grid style={{overflowX:'hidden'}}>

               {/* ---------------------------Home Section-----------------------*/}

                <Grid className={classes.container} style={{
                    backgroundImage: `url(${homeIcon})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>

                    <Grid className={classes.navTabs}>
                        <Tabs centered>
                            <Tab label="Home" style={{color: 'white'}}/>
                            <Tab label="Reservation" style={{color: 'white'}}/>
                            <Tab label="About Us" style={{color: 'white'}}/>
                            <Tab label="Contact Us" style={{color: 'white'}}/>
                            <Tab label="Sign Up" style={{color: 'white'}}/>
                        </Tabs>

                        <AccountCircleIcon style={{fontSize:'25px',paddingTop:'10px',color:'white',fontFamily:'Quicksand'}}/>

                    </Grid>


                    <Grid style={{position:'absolute',paddingLeft:'5vw',paddingTop:'1vh'}}>
                        <img src={logo} style={{position:'absolute',height:'7vh',width:'7vw'}}/>

                        <h3 style={{margin:'auto',color:'white',paddingLeft:'1.5vw',paddingTop:'4vh'}}>Easy Car</h3>
                        <h1 style={{color:'white',fontSize:'11px',margin:'auto',paddingLeft:'2.2vw'}}>rental pvt</h1>
                    </Grid>






                <Typography style={{color:'white',fontSize:'55px',paddingTop:'33vh',paddingLeft:'30vw'}}>
                    Search for a vehicle rental
                </Typography>


                    <Typography style={{color:'white',fontSize:'15px',paddingTop:'-8vh',paddingLeft:'39vw'}}>
                        Practical & Convenient Auto Hire , As low As $15 / Day
                    </Typography>


                    <Grid style={{paddingTop:'9.5vh',paddingLeft:'76vw'}}>
                        <Button style={{backgroundColor:'#FF9900',color:'black',fontWeight:'semi',height:'10vh',width:'18vw',
                            fontSize:'25px',opacity:'95%'}}
                        >Find My Car</Button>
                    </Grid>


                    {/*------------------Date time fields--------------------------*/}

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

                    </Grid>
                    {/*------------------------------------------------------------*/}


                </Grid>

                {/* ---------------------------------------------------------------------------*/}






                {/* ---------------------------About Us Section-----------------------*/}
                <Grid className={classes.aboutUs} style={{display:'flex',justifyContent:'space-between',overflowY:'hidden'}}>


                    {/*------------------------Description area--------------------------*/}
                    <Grid>
                        <Grid style={{paddingLeft:'3vw',paddingTop:'12vh'}}>
                            <Typography style={{color:'white',fontSize:'28px'}}>
                                EASY CAR RENTAL SERVICE
                            </Typography>
                        </Grid>


                        <Grid style={{paddingLeft:'3vw',paddingTop:'13vh'}}>
                            <Typography style={{color:'white',fontSize:'16px'}}>
                                Easy car rental private limited is a car rental service<br/>
                                with 5 years of history.<br/>
                                This company has about 50 cars and 40 drivers working for them.<br/>
                                This company is located at No. 200, Galle Road, Panadura,<br/>
                                and well known for their services.
                            </Typography>

                        </Grid>

                        <Grid style={{paddingLeft:'3vw',paddingTop:'10vh'}}>
                            <Typography style={{color:'white',fontSize:'16px'}}>
                                Usually, people who don’t own a car,<br/>
                                people who are waiting for their<br/>
                                car to be repaired and,<br/>
                                travelers or tourists seek their services.
                            </Typography>

                        </Grid>


                        <Grid style={{paddingLeft:'18vw',paddingTop:'14vh'}}>
                           <Typography style={{color:'white',fontSize:'16px'}}>
                               Lasan Kariyawasam
                           </Typography>

                        </Grid>

                    </Grid>


                    {/*------------------------Image area--------------------------*/}
                    <Grid style={{}}>

                        <svg height="100vh" width="65vw">
                            <polygon
                                points="1000,0 1000,800 350,800 30,430 450,0"
                                fill='#242424'
                                style={{stroke:'#242424',strokeWidth:60,strokeLinejoin:'round'}}
                            />

                        </svg>

                        <img src={carsImage} style={{position:'absolute',top:'138vh',right:'30px'}}/>

                    </Grid>

                </Grid>

                {/* ---------------------------------------------------------------------*/}



                {/*-----------------------Vehicle list area--------------------------*/}

                <Grid className={classes.vehicleList}>

                    <Grid style={{paddingLeft:'38vw',paddingTop:'6vh'}}>
                        <Typography style={{color:'white',fontSize:'40px'}}>
                            MEET THE FLEET
                        </Typography>

                    </Grid>


                    <Grid>
                        <Typography style={{color:'white',fontSize:'13px',paddingLeft:'36vw'}}>
                            From Premium to pickup Luxury, wherever you go, we’ve got your ride.
                        </Typography>
                    </Grid>


                    <Grid>

                    <Grid style={{paddingLeft:'17vw',paddingTop:'6vh'}}>

                        <ImageList sx={{ width: 1000, height: 450, color: 'rgba(255, 255, 255, 0.54)'}} cols={3} >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=248&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                    <ImageListItemBar
                                        title={item.title}
                                        position="below"
                                    />

                                </ImageListItem>
                            ))}
                        </ImageList>

                    </Grid>


                        <Grid style={{paddingTop:'2vh',paddingLeft:'44vw'}}>
                            <Button  style={{backgroundColor:'#FF9900',color:'black',width:'11vw'}}>View All Vehicles</Button>
                        </Grid>


                    </Grid>


                </Grid>

                {/*----------------------------------------------------------------*/}



                {/*-----------------------------Contact Us--------------------------------*/}

                <Grid className={classes.contactUs} style={{
                    backgroundImage: `url(${contactUsImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>


                    <Grid>
                        <Typography style={{color:'white',fontSize:'35px',paddingTop:'6vh',paddingLeft:'42vw'}}>
                            Touch With us
                        </Typography>
                    </Grid>



                    {/*-----------------------Logo--------------------------*/}
                            <Grid style={{paddingLeft:'45.3vw'}}>
                                <img src={logo} style={{position:'absolute',height:'7vh',width:'7vw',paddingTop:'1vh'}}/>

                                <h3 style={{margin:'auto',color:'white',paddingLeft:'1.5vw',paddingTop:'4vh'}}>Easy Car</h3>
                                <h1 style={{color:'white',fontSize:'11px',margin:'auto',paddingLeft:'2.2vw'}}>rental pvt</h1>
                            </Grid>

                    {/*-----------------------------------------------------*/}


                    <Grid style={{display:'flex',justifyContent:'space-evenly',paddingTop:'8vh',paddingLeft:'8vw',width:'90vw'}}>
                        <h2 style={{color:'white',fontSize:'20px'}}>Address</h2>
                        <h2 style={{color:'white',fontSize:'20px'}}>Hours</h2>
                        <h2 style={{color:'white',fontSize:'20px'}}>Phone</h2>
                        <h2 style={{color:'white',fontSize:'20px'}}>Whatsapp</h2>
                        <h2 style={{color:'white',fontSize:'20px'}}>Fax</h2>
                    </Grid>


                    <Grid style={{display:'flex',justifyContent:'space-evenly',paddingLeft:'8vw',width:'92vw'}}>
                        <PinDropIcon  style={{color:'white',fontSize:'55px'}}/>
                        <HistoryIcon style={{color:'white',fontSize:'55px'}}/>
                        <CallIcon style={{color:'white',fontSize:'55px'}}/>
                        <WhatsAppIcon style={{color:'white',fontSize:'55px'}}/>
                        <FaxIcon style={{color:'white',fontSize:'55px'}}/>
                    </Grid>


                    <Grid style={{display:'flex',justifyContent:'space-evenly',paddingLeft:'9vw',width:'87vw'}}>
                        <h4 style={{color:'white',fontFamily:'Quicksand'}}>No. 200, Galle Road,<br/>Panadura.</h4>
                        <h4 style={{color:'white'}}>7.00 am - 7.00 pm</h4>
                        <h4 style={{color:'white'}}>+91 221 222<br/></h4>
                        <h4 style={{color:'white'}}>+76 755 41 12</h4>
                        <h4 style={{color:'white'}}>+855 24 74</h4>
                    </Grid>


                    <Grid style={{display:'flex',justifyContent:'space-evenly',paddingLeft:'36vw',width:'62vw',paddingTop:'4vh'}}>
                        <FacebookIcon style={{color:'white',fontSize:'35px'}}/>
                        <YouTubeIcon style={{color:'white',fontSize:'35px'}}/>
                        <TwitterIcon style={{color:'white',fontSize:'35px'}}/>
                        <EmailIcon style={{color:'white',fontSize:'35px'}}/>
                        <ShopTwoIcon style={{color:'white',fontSize:'35px'}}/>
                    </Grid>


                    <h4 style={{color:'white',fontSize:'12px',paddingTop:'6vh',paddingLeft:'38vw'}}>
                        Copyright © 2021 Easy Car rental pvt Inc. All rights reserved.
                    </h4>


                </Grid>


            </Grid>


        )
    }
}


export default withStyles(styleSheet)(HomePage)