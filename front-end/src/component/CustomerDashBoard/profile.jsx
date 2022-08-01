import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {styleSheet} from "./proSyles";
import {withStyles} from "@mui/styles";
import {Button, TextField} from "@mui/material";
import UploadButton from '../../component/UploadBtn'
import Typography from "@mui/material/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import CustomerService from "../../service/customerService";



class Profile extends Component {
    constructor(props) {
        super(props);

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
                    role: '',
                    userName: '',
                    passWord: '',
                },

                licenseNo: '',
                address: '',
                contactNo: '',
            },

            role: [
                {
                    type: 'DRIVER'
                },
                {
                    type: 'REGISTERED_USER'
                }
            ],


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


    loadData = async () => {
        let res = await CustomerService.fetchCustomer();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log('data tka'+this.state.data)

    };


    updateCustomerProfile = async () => {

            let formData = this.state.formData;

            let res = await CustomerService.putCustomer(formData);

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


    componentDidMount() {
        this.loadData();
    }

    render() {

        const {classes} = this.props;
        return (

            <>

            <Grid className={classes.container}>

                <ValidatorForm ref="form" className="pt-2" onSubmit={this.updateCustomerProfile}>

                <Grid className={classes.rightGrid} style={{marginLeft:"-34vw"}}>

                    <Grid className={classes.profileIcon}>
                        <AccountCircleIcon style={{ fontSize: '250px',color: '#040404'}}/>
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

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="NIC" variant="outlined" size='small' style={{width: '20vw'}}

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

    </>
        )
    }

}

export default withStyles(styleSheet)(Profile)