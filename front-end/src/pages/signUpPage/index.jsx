import {Component} from "react";
import {styleSheet} from ".//style";
import {withStyles} from "@mui/styles";
import Grid from '@mui/material/Grid';
import carsImage from "../../assets/img/carsTopic.png";
import * as React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import loginBg from "../../assets/img/loginBg.jpg";
import loginBg1 from "../../assets/img/car123.jpg";
//import homeIcon from "../../assets/img/homeIcon.jpg";
import SignInService from '../../service/signInService'
import Profiles from '../../component/CustomerDashBoard/profile'
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import GDSESnackBar from "../../component/SnackBar";
import CustomerDashBoard from "../customer";
import DriverDashBoard from "../driver";



class SignUpPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginUserRole : '',
            formData: {

                userName: '',
                password: '',
                role: ''

            },
            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'Login',
            btnColor: 'primary'

        }
    }

    fetchUser = async () => {
        let formData = this.state.formData;
        const  params = {UserName:formData.userName,Password:formData.passWord}
        console.log(formData)

        let res = await SignInService.fetchUser(params);
        if (res.status === 201) {

            this.setState({
                loginUserRole:res.data.data.role,
                alert: true,
                message: res.data.message,
                severity: 'success'
            });


            //this.clearFields();

        } else {
            this.setState({
                alert: true,
                message: res.response.data.message,
                severity: 'error',

            });
        }

    };

    render() {
        const {classes} = this.props;
     return(
            (this.state.loginUserRole == "")?<>

                <Grid className={classes.container}  style={{
                    backgroundImage: `url(${loginBg1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}>


                    <Grid className={classes.loginContainer} >

                        <Grid style={{width:'65px',height:"0px"}}>
                            <AccountCircleIcon style={{fontSize:'110px',paddingLeft:'7.5vw',color:'black',opacity:"90%"}}/>
                        </Grid>

                        <ValidatorForm ref="form" className="pt-2" onSubmit={this.fetchUser()}>
                            <Grid container className={classes.loginForm}>

                                <Grid item lg={12} md={12} sm={6} xm={6}>
                                    <TextField id="outlined-basic" style={{width:'87%'}} label="User name"  variant="outlined"

                                               value={this.state.formData.userName}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.userName = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}
                                    />
                                </Grid>

                                <Grid item lg={12} md={12} sm={6} xm={6}>
                                    <TextField id="outlined-basic" style={{width:'87%'}} label="Password" type='password' variant="outlined"

                                               value={this.state.formData.passWord}
                                               onChange={(e) => {
                                                   let formData = this.state.formData
                                                   formData.passWord = e.target.value
                                                   this.setState({formData})
                                               }}
                                               validators={['required']}

                                    />
                                </Grid>

                            </Grid>


                            <Grid className={classes.btn_container}  paddingLeft='2.5vw' paddingTop='4vh'>
                                <Button style={{backgroundColor:'#040404',color:'white',fontWeight:'semi',height:'6vh',width:'17vw',
                                    fontSize:'15px',opacity:'95%'}}>Login



                                </Button>
                            </Grid>
                        </ValidatorForm>

                    </Grid>


                    {/*<Grid style={{width:'15vw',height:'16vh',backgroundColor:'#040404',marginTop:'-54vh',marginLeft: '45vw'}}>
             </Grid>*/}

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


            </>: (this.state.loginUserRole == "DRIVER")?<DriverDashBoard/>:
                    <CustomerDashBoard/>


     )
    }
}
export default withStyles(styleSheet)(SignUpPage)