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
import DatePicker from "../../component/DatePicker";
import TimePicker from "../../component/TimePicker";
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {styleSheet} from "./style";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';




const vehicleType = [
    {label: 'General'},
    {label: 'Premium'},
    {label: 'Luxury'},
]


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};




class ReservationPage extends Component {
    constructor(props) {
        super(props);

        this.state = {

            open:false,
            pickUpDate: '2022-07-06',
            pickUpTime: '',
            returnDate: '2022-07-10',
            returnTime: '',

            vehicleList: []
        }


    }


    handleClickOpen = () => { this.setState({open:true}) };
    handleClose = () => { this.setState({open:false}) };

    loadAvailableVehicles = async () => {
        let params = {pickupDate: this.state.pickUpDate, returnDate: this.state.returnDate}
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
        this.loadAllVehicles();
    }




    render() {
        const {classes} = this.props;
        return (
            <>

                <Grid className={classes.reservationContainer}>

                    {/*-------------------------Logo--------------------------------*/}
                    <Grid style={{position: 'absolute', paddingLeft: '4vw', paddingTop: '1vh'}}>
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

                        <AccountCircleIcon
                            style={{fontSize: '25px', paddingTop: '10px', color: '#B5B5B5', fontFamily: 'Quicksand'}}/>

                    </Grid>


                    {/*-----------------------Search Bar--------------------------*/}

                    <Grid style={{display: 'flex', width: '100vw', justifyContent: 'center', paddingTop: '6vh'}}>
                        <Grid className={classes.dateTimeContainer}>

                            <DatePicker label="Pick-Up-Date"
                                /*expect(screen.getByDisplayValue('01/01/2022')).toBeInTheDocument();*/

                            />

                            <TimePicker label="Pick-Up-Time"/>

                            <DatePicker label="Drop-Off-Date"/>

                            <TimePicker label="Drop-Off-Time"/>


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
                                height: '9vh',
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
                        width: '100vw',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: "row",
                        flexWrap: 'wrap',
                        marginTop: '10vh'
                    }}>
                        {
                            this.state.vehicleList.map((vehicle) => (

                                <Card style={{width: '20vw', marginTop: '1vh'}}>
                                    <CardMedia
                                        component="img"
                                        alt="img"
                                        height="230"
                                        image={BMW}

                                    />
                                    <CardContent>
                                        <Typography variant="h6" textAlign={'center'}>
                                            {vehicle.brand}
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{display: 'flex', justifyContent: 'center'}}>

                                        <Button size="small" style={{backgroundColor: 'green', color: 'white'}}
                                                href='/vehicleDetailsPage'

                                                onClick={
                                                    this.handleClickOpen()
                                                }

                                        >View More</Button>
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


                <div><Button variant="outlined" onClick={this.handleClickOpen}> Open dialog </Button> <BootstrapDialog
                    onClose={this.handleClose()} aria-labelledby="customized-dialog-title" open={this.state.open}> <BootstrapDialogTitle
                    id="customized-dialog-title" onClose={this.handleClose}> Modal title </BootstrapDialogTitle>
                    <DialogContent dividers> <Typography gutterBottom> Cras mattis consectetur purus sit amet fermentum.
                        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros. </Typography> <Typography gutterBottom> Praesent commodo
                        cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor. </Typography> <Typography gutterBottom> Aenean lacinia bibendum
                        nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec
                        sed odio dui. Donec ullamcorper nulla non metus auctor fringilla. </Typography> </DialogContent>
                    <DialogActions>  <Button autoFocus onClick={this.handleClose}> Save changes </Button> </DialogActions>
                </BootstrapDialog></div>

            </>

        )
    }
}

export default withStyles(styleSheet)(ReservationPage)