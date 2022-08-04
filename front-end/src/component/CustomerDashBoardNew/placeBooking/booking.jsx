import {Component} from "react";
import Grid from "@mui/material/Grid";
import {styleSheet} from "./bookingStyles";
import {withStyles} from "@mui/styles";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {Autocomplete, Button, ImageList, ImageListItem, ImageListItemBar, TextField} from "@mui/material";
import * as React from "react";
import BrowsePage from "../../../pages/reservationPage"



const vehicleType = [
    { label: 'General'},
    { label: 'Premium'},
    { label: 'Luxury'},
]


class Booking extends Component{

    render() {

        const {classes} = this.props;

        return(
            <Grid  width="81vw">


               <BrowsePage/>



            </Grid>
        )
    }

}

export default withStyles(styleSheet) (Booking)