import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from ".//style";
import Grid from "@mui/material/Grid";
import bookingBg from "../../assets/img/bookingBg.jpg";
import {Box, TextField} from "@mui/material";



class BookingPage extends Component{
    render() {
        const {classes} = this.props;
        return(


               <Grid className={classes.container}>

                   {/*-----------------Customer Details----------------*/}
                       <Box sx={{ width: '50%', flexGrow: 1}} style={{height:'70%',paddingTop:'12vh',
                           border:'2px solid black'}}>

                           <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>

                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="CustomerId*"  variant="outlined"/>
                               </Grid>
                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="Customer Name*"  variant="outlined"/>
                               </Grid>
                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="Customer NIC*"  variant="outlined"/>
                               </Grid>

                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="Driving License No *"  variant="outlined"/>
                               </Grid>

                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="Address"  variant="outlined"/>
                               </Grid>

                               <Grid item xs={4}>
                                   <TextField id="outlined-basic" label="Contact No"  variant="outlined"/>
                               </Grid>

                               <Grid item xs={4} md={4}>
                                   <TextField id="outlined-basic" label="E-mail"  variant="outlined"/>
                               </Grid>

                           </Grid>
                       </Box>




               </Grid>

        )
    }

}

export default withStyles(styleSheet)(BookingPage)