import {Component} from "react";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import carsImage from "../../assets/img/carsTopic.png";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {Visibility, VisibilityOff} from "@mui/icons-material";



class SignUpPage extends Component {

    render() {
        const {classes} = this.props;
     return(

         <Grid className={classes.container} >

             <Grid className={classes.login_cover}>


                 <Grid style={{width:'65px',height:"0px"}}>
                     <AccountCircleIcon style={{fontSize:'75px',paddingTop:'10vh',color:'#A0A0A0'}}/>
                 </Grid>


                 <Grid className={classes.loginForm}>

                     <TextField id="outlined-basic" label="User name"  variant="outlined"/>
                     <TextField id="outlined-basic" label="Password" type='password' variant="outlined"/>

                 </Grid>


                 {/*<Grid className={classes.form_container}>
                     <TextField id="outlined-basic" label="User name"  variant="outlined"/>
                     <TextField id="outlined-basic" label="Password" type='password' variant="outlined"/>

                 </Grid>


                 <Grid className={classes.btn_container}  paddingLeft='88vw' paddingTop='2vh'>
                         <Button style={{backgroundColor:'#FF9900',color:'black',fontWeight:'semi',height:'6vh',width:'8vw',
                             fontSize:'15px',opacity:'95%'}}>Login</Button>
                 </Grid>*/}


             </Grid>



             {/*<Grid style={{paddingLeft:'40vw'}}>

                 <svg height="100vh" width="65vw">
                     <polygon
                         points="1000,0 1000,800 350,800 30,400 450,0"
                         fill='black'
                         style={{stroke:'#A0A0A0',strokeWidth:2,strokeLinejoin:'round'}}
                     />

                 </svg>

                 <img src={carsImage} style={{position:'absolute',top:'138vh',right:'30px'}}/>

             </Grid>*/}


         </Grid>
     )
    }
}
export default withStyles(styleSheet)(SignUpPage)