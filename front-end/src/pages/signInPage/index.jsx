import {Component} from "react";
import {styleSheet} from ".//style";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import signInBg from '../../assets/img/signInBg.jpg'
import {Button, TextField, Typography} from "@mui/material";
import * as React from "react";
import Autocomplete from '@mui/material/Autocomplete';


const role = [
    { label: 'Customer' },
    { label: 'Driver'},
]


class SignInPage extends Component{
    render() {

        const {classes} = this.props;
        return(
           <Grid className={classes.container}>


               <Grid className={classes.signUpForm} >

                   <Grid>
                       <h2 style={{color:"black",fontSize:'40px',fontWeight:'unset',paddingLeft:'6vw'}}>Create Account</h2>
                   </Grid>


                   <Grid container  className={classes.txtFieldContainer}>

                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic" label="First Name"  variant="outlined" />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Last name"  variant="outlined" />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>

                           <Autocomplete
                               disablePortal
                               id="combo-box-demo"
                               options={role}
                               sx={{ width: 220 }}
                               renderInput={(params) => <TextField {...params} label="Role" />}
                           />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="NIC or Driving License"  variant="outlined" />
                       </Grid>


                       <Grid item lg={12} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Contact No"  variant="outlined" />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Address"  variant="outlined" style={{width:'160%'}} />
                       </Grid>


                   </Grid>


                   <Grid style={{paddingTop:'10vh',paddingLeft:'15vw'}}>
                       <Button style={{backgroundColor:'black',color:'white',fontWeight:'semi',height:'6vh',width:'17vw',
                           fontSize:'15px'}}>Sign In</Button>
                   </Grid>


               </Grid>


            <Grid className={classes.signInBgContainer} style={{
                backgroundImage: `url(${signInBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></Grid>

           </Grid>
        )
    }
}
export default withStyles(styleSheet) (SignInPage)