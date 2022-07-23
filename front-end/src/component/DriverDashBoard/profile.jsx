import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
/*import {styleSheet} from "./proSyles";
import {withStyles} from "@mui/styles";*/
import {Button, TextField} from "@mui/material";
import UploadButton from '../../component/UploadBtn'
import Typography from "@mui/material/Typography";
import {styleSheet} from "./driverProfileStyles";
import {withStyles} from "@mui/styles";



class DriverProfile extends Component {

    render() {

        const {classes} = this.props;
        return (
            <Grid className={classes.container}>


                <Grid className={classes.rightGrid}>

                    <Grid className={classes.profileIcon}>
                        <AccountCircleIcon style={{ fontSize: '250px',color: 'black'}}/>
                    </Grid>

                    <Grid className={classes.proTxtFields}>
                        <TextField id="outlined-basic" label="User name" variant="outlined" style={{width: '25vw'}}/>
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: '25vw'}}/>
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: '25vw'}}/>
                    </Grid>

                </Grid>




                <Grid className={classes.leftGrid}>

                    <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="First name" variant="outlined" style={{width: '24vw'}}/>
                            <TextField id="outlined-basic" label="Last name" variant="outlined" style={{width: '24vw'}}/>
                        </Grid>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="Address" variant="outlined" style={{width: '24vw'}}/>
                            <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{width: '24vw'}}/>
                        </Grid>

                    </Grid>


                    <Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'10vh'}}>
                        <Grid >
                            <div style={{width:'20vw',height:'20vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <UploadButton/>
                                <Typography>
                                    NIC Image
                                </Typography>
                            </div>

                        </Grid>

                        <Grid>
                            <div style={{width:'20vw',height:'20vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <UploadButton/>
                                <Typography>
                                    NIC Image
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>


                    <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                        <Button style={{backgroundColor:'#040404',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                            fontSize:'15px',opacity:'95%',margin:'1vh'}}>Login</Button>

                        <Button style={{backgroundColor:'#040404',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                            fontSize:'15px',opacity:'95%',margin:'1vh'}}>Login</Button>
                    </Grid>


                </Grid>

            </Grid>
        )
    }

}

export default withStyles(styleSheet)(DriverProfile)