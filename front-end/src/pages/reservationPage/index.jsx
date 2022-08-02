import {Component} from "react";
import Grid from "@mui/material/Grid";
import {
    Autocomplete,
    Button, CardActions, CardContent,
    CardMedia,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Tab,
    Tabs,
    TextField
} from "@mui/material";
import * as React from "react";
import {styleSheet} from ".//style";
import {withStyles} from "@mui/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "../../assets/img/logo.png";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import {Card} from "@material-ui/core";
import Typography from "@mui/material/Typography";
import BMW from "../../assets/img/bmw.jpg"
import VehicleService from "../../service/vehicleService";
import DatePicker from "../../component/DatePicker";
import TimePicker from "../../component/TimePicker";



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
        title: 'Toyota Allion NZT',
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

    {
        img: 'https://www.mobikeycarmarket.co.ke/fotos/12/produtos/imagens/13761/img_3084_3763475086095b6ec709c6.jpg',
        title: 'Toyota Corolla Axio',
    },


    {
        img: 'https://www.deshicar.com/images/users/2986/2012-Axio.jpg',
        title: 'Toyota Axio NKR 165',
    },


    {
        img: 'https://toyota-cms-media.s3.amazonaws.com/wp-content/uploads/2015/10/2016_Prius_c_005_759FED2E688D101C7A41EB5084DCD7654D3E387B-1500x900.jpg',
        title: 'Toyota Prius',
    },
];

const vehicleType = [
    { label: 'General'},
    { label: 'Premium'},
    { label: 'Luxury'},
]


class ReservationPage extends Component{
    constructor(props) {
        super(props);

        this.state = {

            formData:{
                pickUpDate:'',
                pickUpTime:'',
                returnDate:'',
            },


        vehicleList : []
        }


    }



    loadAllVehicles = async () => {
        let res = await VehicleService.fetchAvailableVehicle();

        if (res.status === 200) {
            this.setState({
                vehicleList: res.data.data
            });
        }
        console.log(this.state.vehicleList)    // print customers array

    };


    componentDidMount() {
        this.loadAllVehicles();
    }


    render() {
        const {classes} = this.props;
        return(

            <Grid className={classes.reservationContainer}>

                {/*-------------------------Logo--------------------------------*/}
                <Grid style={{position:'absolute',paddingLeft:'4vw',paddingTop:'1vh'}}>
                    <img src={logo} style={{position:'absolute',height:'7vh',width:'7vw'}}/>

                    <h3 style={{margin:'auto',color:'#B5B5B5',paddingLeft:'1.5vw',paddingTop:'3.5vh',fontWeight:'unset'}}>Easy Car</h3>
                    <h1 style={{color:'#B5B5B5',fontSize:'11px',margin:'auto',paddingLeft:'2.2vw',fontWeight:'unset'}}>rental pvt</h1>
                </Grid>


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


                {/*-----------------------Search Bar--------------------------*/}

                <Grid style={{display:'flex',width:'100vw',justifyContent:'center',paddingTop:'6vh'}}>
                    <Grid  className={classes.dateTimeContainer}>

                        {/*<DatePicker label ="Pick-Up-Date"/>

                        <TimePicker label ="Pick-Up-Time"/>

                        <DatePicker label ="Drop-Off-Date"/>

                        <TimePicker label ="Drop-Off-Time"/>*/}


                        <TextField
                            required
                            id="outlined-required"
                            label="Pick Up Date"
                            sx={{ m: 1, width: '22.7ch' }}
                            value={this.state.formData.pickUpDate}
                            onChange={(e) => {
                                let formDataOb =this.state.formData
                                formDataOb.pickUpDate = e.target.value
                                this.setState(formDataOb)
                            }}
                            validators={['required']}
                        />

                        <TextField
                            required
                            id="outlined-required"
                            label="Pick Up Time"
                            sx={{ m: 1, width: '22.7ch' }}
                            value={this.state.formData.pickUpTime}
                            onChange={(e) => {
                                let formDataOb =this.state.formData
                                formDataOb.pickUpTime = e.target.value
                                this.setState(formDataOb)
                            }}
                            validators={['required']}
                        />


                        <TextField
                            required
                            id="outlined-required"
                            label="drop Off Date"
                            sx={{ m: 1, width: '22.7ch' }}
                            value={this.state.formData.returnDate}
                            onChange={(e) => {
                                let formDataOb =this.state.formData
                                formDataOb.returnDate = e.target.value
                                this.setState(formDataOb)
                            }}
                            validators={['required']}
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
                {/*---------------------------------------------------*/}


                <Grid style={{width:'100vw',display:'flex',justifyContent:'space-between',flexDirection:"row",flexWrap:'wrap',marginTop:'10vh'}}>
                    {
                        this.state.vehicleList.map((vehicle) => (

                            <Card style={{width:'20vw',marginTop:'1vh'} }>
                                <CardMedia
                                    component="img"
                                    alt="img"
                                    height="230"
                                    image={BMW}

                                />
                                <CardContent>
                                    <Typography  variant="h6" textAlign={'center'}>
                                        {vehicle.brand}
                                    </Typography>
                                </CardContent>
                                <CardActions style={{display:'flex',justifyContent:'center'}}>

                                    <Button size="small"  style={{backgroundColor:'green',color:'white'}}>Book Now</Button>
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