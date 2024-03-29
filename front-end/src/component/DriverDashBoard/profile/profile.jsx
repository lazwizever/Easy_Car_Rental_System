import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {styleSheet} from "./driverProfileStyles";
import {withStyles} from "@mui/styles";
import {Button, TextField} from "@mui/material";
import UploadButton from '../../UploadBtn'
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CustomerService from "../../../service/customerService";
import DriverService from "../../../service/DriverService";
import GDSESnackBar from "../../SnackBar";
import GDSEButton from "../../Button/button";


class DriverProfile extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.user);
        /*this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);*/


        this.state = {
            formData: {
                id: '',
                nic: '',
                name: {
                    firstName: '',
                    lastName: ''
                },

                user: {
                    userId: '',
                    role: 'DRIVER',
                    userName: '',
                    passWord: '',
                },

                licenseNo: '',
                address: '',
                contactNo: '',
            },


            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Update',
            btnColor: 'primary'
        }

    }

    /* handleChange(event) {    this.setState({value: event.target.value});  }
     handleSubmit(event) {
         alert('A name was submitted: ' + this.state.value);
         event.preventDefault();
     }*/


    /*loadData = async () => {
        let params ={userName: this.props.user.userName}
        let res = await CustomerService.fetchCustomer(params);

        if (res.status === 200) {
            let cusData = res.data.data;

            console.log('customer data'+cusData);

            this.setState({

                formData: {
                    id: cusData.id,
                    nic: cusData.nic,
                    name: {
                        firstName: cusData.name.firstName,
                        lastName: cusData.name.lastName
                    },

                    user: {
                        userId: '',
                        role: '',
                        userName: cusData.user.userName,
                        passWord: cusData.user.passWord,
                    },

                    licenseNo: cusData.licenseNo,
                    address: cusData.address,
                    contactNo: cusData.contactNo,
                },
            });
        }
        console.log('data tka'+this.state.data)

    };*/


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


    /*componentDidMount() {
        this.loadData();
    }*/

    render() {

        const {classes} = this.props;
        return (

            <>

                <Grid className={classes.container}>

                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.updateDriverProfile}>

                        <Grid className={classes.rightGrid} style={{marginLeft:"-34vw"}}>

                            <Grid className={classes.profileIcon}>
                                <AccountCircleIcon style={{ fontSize: '250px',color: '#718093'}}/>
                            </Grid>

                            <Grid className={classes.proTxtFields}>
                                <TextField id="outlined-basic" label="User name" variant="outlined" size='small' style={{width: '20vw'}}

                                           value={this.state.formData.user.userName}
                                           onChange={(e) => {
                                               let formDataOb =this.state.formData
                                               formDataOb.user.userName = e.target.value
                                               this.setState(formDataOb)
                                           }}
                                           validators={['required']}
                                />

                                <TextField id="outlined-basic" label="Password" variant="outlined" size='small' style={{width: '20vw'}}

                                           value={this.state.formData.user.passWord}
                                           onChange={(e) => {
                                               let formDataOb =this.state.formData
                                               formDataOb.user.passWord = e.target.value
                                               this.setState(formDataOb)
                                           }}
                                           validators={['required']}

                                />
                                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" size='small' style={{width: '20vw'}}/>
                            </Grid>

                        </Grid>



                        <Grid className={classes.leftGrid} style={{marginTop:'-80vh',marginRight:'-34vw'}}>

                            <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>


                                <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                                    <TextField id="outlined-basic" label="Driver Id" size='small' variant="outlined" style={{width: '20vw'}}

                                               value={this.state.formData.id}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.id= e.target.value
                                                   this.setState(formDataOb)
                                               }}
                                               validators={['required']}

                                    />

                                    <TextField id="outlined-basic" label="Availability" size='small' variant="outlined" style={{width: '20vw'}}/>
                                </Grid>

                                <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                                    <TextField id="outlined-basic" label="First name" size='small' variant="outlined" style={{width: '20vw'}}

                                               value={this.state.formData.name.firstName}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.name.firstName = e.target.value
                                                   this.setState(formDataOb)
                                               }}
                                               validators={['required']}

                                    />
                                    <TextField id="outlined-basic" label="Last name" variant="outlined" size='small' style={{width: '20vw'}}

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
                                    <TextField id="outlined-basic" label="Address" variant="outlined" size='small' style={{width: '20vw'}}

                                               value={this.state.formData.address}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.address = e.target.value
                                                   this.setState(formDataOb)
                                               }}
                                               validators={['required']}

                                    />
                                    <TextField id="outlined-basic" label="Contact No" size='small' variant="outlined" style={{width: '20vw'}}

                                               value={this.state.formData.contactNo}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.contactNo = e.target.value
                                                   this.setState(formDataOb)
                                               }}
                                               validators={['required']}
                                    />
                                </Grid>

                                <Grid display='flex' justifyContent='space-evenly' margin='1vh' flexWrap='wrap'>
                                    <TextField id="outlined-basic" label="NIC" variant="outlined" size='small' style={{width: '20vw',margin:'1vh'}}

                                               value={this.state.formData.nic}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.nic = e.target.value
                                                   this.setState(formDataOb)
                                               }}
                                               validators={['required']}

                                    />
                                    <TextField id="outlined-basic" label="Driving License No" size='small' variant="outlined" style={{width: '20vw'}}

                                               value={this.state.formData.licenseNo}
                                               onChange={(e) => {
                                                   let formDataOb =this.state.formData
                                                   formDataOb.licenseNo = e.target.value
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
                                            Driving License Image
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'10vh'}}>
                                <Button type='submit' style={{backgroundColor:'green',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                                    fontSize:'15px',opacity:'95%',margin:'1vh'}}>Login</Button>

                                <Button type='submit' style={{backgroundColor:'#222f3e',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                                    fontSize:'15px',opacity:'95%',margin:'1vh'}}>Update</Button>

                                <Button type='submit' color='error' variant='contained' style={{color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                                    fontSize:'15px',opacity:'95%',margin:'1vh'}}>Cancel</Button>

                            </Grid>


                        </Grid>

                    </ValidatorForm>

                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />



            </>
        )
    }

}

export default withStyles(styleSheet)(DriverProfile)