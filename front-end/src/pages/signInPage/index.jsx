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
import {styleSheet} from "../signInPage/style";
import GDSESnackBar from "../../component/SnackBar";
import GDSEButton from "../../component/Button/button";
import logo from "../../assets/img/logo.png";



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
                    type: 'CUSTOMER'
                },

            ],


            alert: false,
            message: '',
            severity: '',


        }

    }


    submitUser = async () => {

        let formData = this.state.formData;
        console.log(formData)
        console.log(formData.user.role)
        if(formData.user.role == 'CUSTOMER'){
            console.log("hrii")
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

                   <Grid marginTop='3vh'>
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


                       <Grid item lg={6} md={6} sm={6} xm={6} style={{marginLeft:"10.3vw"}}>
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



                   <Grid style={{paddingTop:'4vh',paddingLeft:'15vw',marginLeft:"7vw"}}>
                       <GDSEButton color={"primary"} label={"Register"}  variant={'contained'} type={"submit"}/>
                   </Grid>

                   </ValidatorForm>

               </Grid>


            <Grid className={classes.signInBgContainer} style={{
                backgroundImage: `url(${signInBg})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <Typography color='white' style={{marginTop:"3vh",fontSize:"22px",marginLeft:'22vw'}}>
                    Welcome To
                </Typography>

                <Typography color='white' style={{marginTop:"1vh",fontSize:"38px",marginLeft:'14vw'}}>
                   Easy Car Private Limited
                </Typography>

                <Grid style={{position:'absolute',paddingLeft:'21vw',paddingTop:'65vh'}}>
                    <img src={logo} style={{position:'absolute',height:'9vh',width:'9vw'}}/>

                    <h3 style={{margin:'auto',color:'white',paddingLeft:'3vw',paddingTop:'4vh',fontSize:'21px',fontWeight:'unset'}}>Easy Car</h3>
                    <h1 style={{color:'white',fontSize:'11px',margin:'auto',paddingLeft:'3.5vw'}}>rental pvt</h1>
                </Grid>



            </Grid>

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