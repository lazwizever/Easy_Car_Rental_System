import {Component} from "react";
import Grid from "@mui/material/Grid";
import {Button, ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import * as React from "react";
import {styleSheet} from "../reservation/style";
import {withStyles} from "@mui/styles";



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


//const [open, setOpen] = React.set(false);

const handleClickOpen = () => {
    //setOpen(true);
};

const handleClose = () => {
    //setOpen(false);
};


class Reservation extends Component{

    render() {
        const {classes} = this.props;
        return(

            <Grid className={classes.reservationContainer}>

                <Grid>
                    {/* <Grid style={{paddingLeft:'4vw',paddingTop:'6vh'}}>

                    <ImageList sx={{ width: 700, height: 600, color: 'rgba(255, 255, 255, 0.54)',backgroundColor:'#121212'}} cols={2} >
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

                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <Button  style={{backgroundColor:'#FF9900',color:'black',width:'10vw',height:'4vh',fontSize:'12px'}}
                                    >View Details</Button>
                                </div>


                            </ImageListItem>
                        ))}
                    </ImageList>

                </Grid>*/}
                </Grid>


            </Grid>

        )
    }
}





export default withStyles(styleSheet)(Reservation)