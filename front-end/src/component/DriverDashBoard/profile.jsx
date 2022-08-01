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
import DriverService from "../../service/DriverService";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";



class DriverProfile extends Component {
    constructor(props) {
        super(props);


        this.state = {
            formData: {

                id: '',
                licenseNo: '',
                nic:'',
                name: {
                    firstName: '',
                    lastName: ''
                },

                driverAvailability:'',
                address:'',
                contactNo:'',

                user: {
                    userId: '',
                    role: '',
                    userName: '',
                    passWord: '',
                },

            },


            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Update',
            btnColor: 'primary'
        }





    }

    updateDriverProfile = async () => {

        let formData = this.state.formData;

        let res = await DriverService.putDriver(formData);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            //this.clearFields();
            //await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error'
            });
        }
    };


    render() {

        const {classes} = this.props;
        return (
            <>
            <Grid className={classes.container}>

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.updateDriverProfile()}>

                <Grid className={classes.rightGrid}>

                    <Grid className={classes.profileIcon}>
                        <AccountCircleIcon style={{ fontSize: '250px',color: 'black'}}/>
                    </Grid>


                    <Grid className={classes.proTxtFields}>
                        <TextField id="outlined-basic" label="User name" variant="outlined" style={{width: '25vw'}}

                                   value={this.state.formData.id}
                                   onChange={(e) => {
                                       let formDataOb =this.state.formData
                                       formDataOb.id = e.target.value
                                       this.setState(formDataOb)
                                   }}
                                   validators={['required']}

                        />
                        <TextField id="outlined-basic" label="Password" variant="outlined" style={{width: '25vw'}}

                                   value={this.state.formData.licenseNo}
                                   onChange={(e) => {
                                       let formDataOb =this.state.formData
                                       formDataOb.licenseNo = e.target.value
                                       this.setState(formDataOb)
                                   }}
                                   validators={['required']}

                        />
                        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" style={{width: '25vw'}}

                                   value={this.state.formData.nic}
                                   onChange={(e) => {
                                       let formDataOb =this.state.formData
                                       formDataOb.nic = e.target.value
                                       this.setState(formDataOb)
                                   }}
                                   validators={['required']}

                        />
                    </Grid>

                </Grid>


                <Grid className={classes.leftGrid}>

                    <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="First name" variant="outlined" style={{width: '24vw'}}
                                       value={this.state.formData.name.firstName}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.name.firstName = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="Last name" variant="outlined" style={{width: '24vw'}}

                                       value={this.state.formData.name.lastName}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.name.lastName = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}
                            />
                        </Grid>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="Address" variant="outlined" style={{width: '24vw'}}

                                       value={this.state.formData.address}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.address = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}
                            />
                            <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{width: '24vw'}}
                                       value={this.state.formData.contactNo}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.contactNo = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}
                            />
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
                            fontSize:'15px',opacity:'95%',margin:'1vh'}}>Update</Button>

                        <Button style={{backgroundColor:'#040404',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                            fontSize:'15px',opacity:'95%',margin:'1vh'}}>Cancel</Button>
                    </Grid>


                </Grid>

                </ValidatorForm>

            </Grid>
            </>
        )
    }

}

export default withStyles(styleSheet)(DriverProfile)