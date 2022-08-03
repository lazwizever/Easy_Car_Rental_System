import {Component} from "react";
import Grid from "@mui/material/Grid";
import {styleSheet} from "./bookingStyles";
import {withStyles} from "@mui/styles";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {Autocomplete, Button, ImageList, ImageListItem, ImageListItemBar, TextField} from "@mui/material";
import {TimePicker} from "@mui/x-date-pickers";
import * as React from "react";



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


class Booking extends Component{

    render() {

        const {classes} = this.props;

        return(
            <Grid className={classes.bookingContainer}>


                <Grid style={{display:'flex',width:'81vw',justifyContent:'center',paddingTop:'4vh'}}>
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
                        <Button style={{backgroundColor:'#FF9900',color:'black',fontWeight:'semi',height:'8vh',width:'8vw',
                            fontSize:'15px',opacity:'95%'}}
                        >Find My Car</Button>
                    </Grid>
                </Grid>

                <Grid style={{display:'flex',justifyContent:'center',paddingTop:'4vh'}}>

                    <ImageList sx={{ width: 900, height: 470, color: 'rgba(255, 255, 255, 0.54)',backgroundColor:'#121212'}} cols={3} gap ={12} >
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
                        ))}</ImageList>

                </Grid>



            </Grid>
        )
    }

}

export default withStyles(styleSheet) (Booking)