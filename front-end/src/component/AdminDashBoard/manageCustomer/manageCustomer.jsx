import {Component} from "react";
import customerServiceDashboard from "../../../service/customerServiceDashboard";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ValidatorForm} from "react-material-ui-form-validator";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import UploadButton from "../../UploadBtn";
import {TextField} from "@mui/material";
import manageCustomerService from "../../../service/adminDashBoardService/manageCustomerService";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from "@mui/material/Button";


class ManageCustomer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            customer: {

                id: '',
                nic: '',

                name: {
                    firstName: '',
                    lastName: '',
                },

                licenseNo: '',
                address: '',
                contactNo: '',

            },

            alert: false,
            message: '',
            severity: '',

            userRequest: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }


    loadCustomerData = (row) => {
        this.setState({
            customer: {

                id: row.id,
                nic: row.nic,

                name: {
                    firstName: row.name.firstName,
                    lastName: row.name.lastName,
                },

                licenseNo: row.licenseNo,
                address: row.address,
                contactNo: row.contactNo,

            },
        });

    }


    loadUserRequests = async () => {
        let res = await manageCustomerService.fetchUserRequest();

        if (res.status == 200) {
            this.setState({
                userRequest: res.data.data
            });
        }
        console.log(this.state.userRequest)    // print customers array

    };


    acceptCustomer = async () => {
        let customerData = this.state.customer;
        console.log(customerData)
        let res = await manageCustomerService.acceptCustomer(customerData);


        if (res.status == 200) {
            console.log("gff"+customerData)
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
            });

            await this.loadUserRequests();
        }


    };


    denyCustomer = async () => {
        let params  = {denyCustomerId:this.state.customer.id}
        let res = await manageCustomerService.denyCustomer(params);

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success',
            });
        }

        await this.loadUserRequests();

    };





    /*exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };*/

    componentDidMount() {
        this.loadUserRequests();
    };

    render() {


        return(
            <>

                <Grid style={{overflowX:"hidden",width:"86vw",height:"88vh"}}>


                <ValidatorForm ref="form" className="pt-2">

                    <Grid style={{marginTop:"6vh"}}>
                        <Typography fontSize="30px">Manage Customer</Typography>
                    </Grid>


                    <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="Customer Id" size='small' variant="outlined" style={{width: '20vw'}}

                                       value={this.state.customer.id}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.id = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="First name" variant="outlined" size='small' style={{width: '20vw'}}

                                       value={this.state.customer.name.firstName}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.name.firstName = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                        </Grid>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small' style={{width: '20vw'}}

                                       value={this.state.customer.name.lastName}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.name.lastName = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="Address" size='small' variant="outlined" style={{width: '20vw'}}

                                       value={this.state.customer.address}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.address = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}
                            />
                        </Grid>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="Contact No" variant="outlined" size='small' style={{width: '20vw'}}

                                       value={this.state.customer.contactNo}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.contactNo = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="E-mail" size='small' variant="outlined" style={{width: '20vw'}}

                                       value={this.state.customer.email}
                                       onChange={(e) => {
                                           let formDataOb =this.state.customer
                                           formDataOb.email = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                        </Grid>


                    </Grid>

                    <Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:'5vh'}}>
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

                    <Grid display={'flex'} justifyContent={'center'} marginTop={'2vh'}>
                        <Button variant="contained" color="error" style={{margin: "1vh"}} onClick={this.denyCustomer}>
                            Deny
                        </Button>
                        <Button variant="contained" color="success" style={{margin: "1vh"}} onClick={this.acceptCustomer}>
                            Accept
                        </Button>
                    </Grid>

            <Grid style={{width:"84vw",height:"85vh",marginTop:"8vh",marginLeft:'0.5vw'}}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{backgroundColor:"#eeeff1"}}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Customer Id</TableCell>
                                <TableCell>Customer NIC</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>License No</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Contact No</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                this.state.userRequest.map((row) => (
                                    <TableRow onClick={() => {
                                        this.loadCustomerData(row);
                                    }}>
                                        <TableCell align="left">{row.id}</TableCell>
                                        <TableCell align="left">{row.nic}</TableCell>
                                        <TableCell align="left">{row.name.firstName}</TableCell>
                                        <TableCell align="left">{row.name.lastName}</TableCell>
                                        <TableCell align="left">{row.licenseNo}</TableCell>
                                        <TableCell align="left">{row.address}</TableCell>
                                        <TableCell align="left">{row.contactNo}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>

            </Grid>

                </ValidatorForm>

                </Grid>
            </>
        )
    }



}
export default (ManageCustomer)