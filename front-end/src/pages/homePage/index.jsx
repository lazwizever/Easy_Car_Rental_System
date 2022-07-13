//import {styleSheet} from "./style";
import Grid from '@mui/material/Grid';
import {withStyles} from "@mui/styles";
import {Component} from "react";
import homeIcon from "../../assets/img/homeIcon.jpg";
import {Button, css, ImageList, ImageListItem, ImageListItemBar, Tab, Tabs, TextField, Typography} from "@mui/material";
import * as PropTypes from "prop-types";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import carsImage from '../../assets/img/carsTopic.png'
import {styleSheet as styles, styleSheet} from "./style";
import benz from '../../assets/img/mercedesbenz.jpg'
import bmw from '../../assets/img/bmw.jpg'
import toyotaAllion from '../../assets/img/ToyotaAllion.jpg'
import toyotaPremio from '../../assets/img/ToyotaPremio.jpg'



const itemData = [
    {
        img: 'https://c.ndtvimg.com/2020-09/12qb402s_2021-mercedesbenz-sclass-_625x300_02_September_20.jpg',
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
];


class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        /*const [value, setValue] = React.useState<Date | null>(null);*/

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



                <Typography style={{color:'white',fontSize:'55px',paddingTop:'33vh',paddingLeft:'30vw'}}>
                    Search for a vehicle rental
                </Typography>


                    <Typography style={{color:'white',fontSize:'15px',paddingTop:'-8vh',paddingLeft:'39vw'}}>
                        Practical & Convenient Auto Hire , As low As $15 / Day
                    </Typography>


                    <Grid style={{paddingTop:'13vh',paddingLeft:'70vw'}}>
                        <Button  style={{backgroundColor:'#FF9900',color:'black',fontWeight:'bold',width:'11vw'}}>Find My Car</Button>
                    </Grid>

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

                    <Grid style={{paddingLeft:'23vw',paddingTop:'6vh'}}>

                        <ImageList sx={{ width: 800, height: 450 }}>
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


            </Grid>


        )
    }
}


export default withStyles(styleSheet)(HomePage)