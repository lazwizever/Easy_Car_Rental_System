import {Component} from "react";
import {withStyles} from "@mui/styles";
import Grid from "@mui/material/Grid";
import signInBg from '../../assets/img/signInBg.jpg'
import {Button, TextField, Typography} from "@mui/material";
import * as React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import UploadButton from "../../component/UploadBtn";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import SignUpService from '../../service/signUpService'
import {styleSheet} from "./style";
import GDSESnackBar from "../../component/SnackBar";



class SignInPage extends Component{
    constructor(props) {
        super(props);

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
            btnLabel: 'Register',
            btnColor: 'primary'
        }

    }


    submitUser = async () => {
        let formData = this.state.formData;
        if(formData.user.role === 'CUSTOMER'){
            let formData = this.state.formData;
            let res = await SignUpService.postUserCustomer(formData);

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                //await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }

        }else if(formData.user.role === 'DRIVER'){
            let formData = this.state.formData;
            let res = await SignUpService.postUserDriver(formData);

            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                //await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };


    clearFields = () => {
        this.setState({
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
            }
        });
    };


    render() {

        const {classes} = this.props;
        return(
            <>
           <Grid className={classes.container}>

               <Grid className={classes.signUpForm} >

                   <Grid>
                       <h2 style={{color:"black",fontSize:'40px',fontWeight:'unset',paddingLeft:'6vw'}}>Create Account</h2>
                   </Grid>


                   <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitUser}>

                   <Grid container  className={classes.txtFieldContainer}>

                       <Grid style={{height:'2vh',marginTop:"-3vh"}}>
                           <TextField id="outlined-basic" label="User Id"  variant="outlined"

                                      value={this.state.formData.id}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.id = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6} style={{marginLeft:"7.5vw"}}>
                           <TextField id="outlined-basic" label="First Name"  variant="outlined"

                                      value={this.state.formData.name.firstName}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.name.firstName = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Last name"  variant="outlined"

                                      value={this.state.formData.name.lastName}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.name.lastName = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}
                           />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>

                           <Autocomplete
                               style={{ width: '220px' }}
                               onChange={(e, value, r) => {

                                   let formData = this.state.formData
                                   formData.user.role = value.type
                                   this.setState({ formData })

                               }}
                               getOptionLabel={
                                   (option) => option.type
                               }

                               id="controllable-states-demo"
                               options={this.state.role}
                               sx={{ width: 300 }}
                               renderInput={(params) => <TextField {...params} label="Role" />}
                           />



                       </Grid>



                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="NIC"  variant="outlined"

                                      value={this.state.formData.nic}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.nic = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>

                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Driving License No"  variant="outlined"

                                      value={this.state.formData.licenseNo}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.licenseNo = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>


                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Contact No"  variant="outlined"
                                      value={this.state.formData.contactNo}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.contactNo = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}


                           />
                       </Grid>

                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="UserName"  variant="outlined"

                                      value={this.state.formData.user.userName}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.user.userName = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>

                       <Grid item lg={6} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Password"  variant="outlined"

                                      value={this.state.formData.user.passWord}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.user.passWord = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>

                       <Grid item lg={12} md={6} sm={6} xm={6}>
                           <TextField id="outlined-basic"  label="Address"  variant="outlined" style={{width:'83%'}}

                                      value={this.state.formData.address}
                                      onChange={(e) => {
                                          let formData = this.state.formData
                                          formData.address = e.target.value
                                          this.setState({formData})
                                      }}
                                      validators={['required']}

                           />
                       </Grid>


                       <Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'4vh',marginLeft:"-0.5vw",width:"38vw"}}>
                           <Grid >
                               <div style={{width:'17.5vw',height:'18vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#eeeff1'}}>
                                   <UploadButton/>
                                   <Typography>
                                       Upload NIC
                                   </Typography>
                               </div>

                           </Grid>

                           <Grid>
                               <div style={{width:'17.5vw',height:'18vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'#eeeff1'}}>
                                   <UploadButton/>
                                   <Typography>
                                       Upload Driving License
                                   </Typography>
                               </div>
                           </Grid>
                       </Grid>



                   </Grid>


                   <Grid style={{paddingTop:'4vh',paddingLeft:'15vw'}}>
                       <Button style={{backgroundColor:'black',color:'white',fontWeight:'semi',height:'6vh',width:'17vw',
                           fontSize:'15px'}} type='submit'>Register</Button>
                   </Grid>
                   </ValidatorForm>

               </Grid>


            <Grid className={classes.signInBgContainer} style={{
                backgroundImage: `url(${signInBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}></Grid>

           </Grid>
                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({ alert: false })
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
export default withStyles(styleSheet)(SignInPage)