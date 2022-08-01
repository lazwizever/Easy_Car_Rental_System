import {Component} from "react";
import customerServiceDashboard from "../../service/customerServiceDashboard";
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
import UploadButton from "../UploadBtn";
import {TextField} from "@mui/material";



class ManageCustomer extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData: {

                id: '',
                nic: '',

                name: {
                    firstName: '',
                    lastName: '',
                },

                licenseNo: '',
                address: '',
                contactNo: '',
                email: '',


            },

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }
    }


    loadCustomerData = (row) => {
        this.setState({
            formData: {

                id: row.id,
                nic: row.nic,

                name: {
                    firstName: row.name.firstName,
                    lastName: row.name.lastName,
                },

                licenseNo: row.licenseNo,
                address: row.address,
                contactNo: row.contactNo,
                email: row.email,


            },
        });

    }


    loadData = async () => {
        let res = await customerServiceDashboard.fetchCustomerDashboard();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

        this.exampleForMap()

    };

    exampleForMap = () => {
        this.state.data.map((value, index) => {
            console.log(value)   // access element one by one
        })
    };

    componentDidMount() {
        this.loadData();
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

                                       value={this.state.formData.name.firstName}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.name.firstName = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="First name" variant="outlined" size='small' style={{width: '20vw'}}

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
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" size='small' style={{width: '20vw'}}

                                       value={this.state.formData.address}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.address = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="Address" size='small' variant="outlined" style={{width: '20vw'}}

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
                            <TextField id="outlined-basic" label="Contact No" variant="outlined" size='small' style={{width: '20vw'}}

                                       value={this.state.formData.nic}
                                       onChange={(e) => {
                                           let formDataOb =this.state.formData
                                           formDataOb.nic = e.target.value
                                           this.setState(formDataOb)
                                       }}
                                       validators={['required']}

                            />
                            <TextField id="outlined-basic" label="E-mail" size='small' variant="outlined" style={{width: '20vw'}}

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
                                <TableCell>E-mail</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.data.map((row) => (
                                <TableRow>
                                    <TableCell align="left">{row.id}</TableCell>
                                    <TableCell align="left">{row.nic}</TableCell>
                                    <TableCell align="left">{row.name.firstName}</TableCell>
                                    <TableCell align="left">{row.name.lastName}</TableCell>
                                    <TableCell align="left">{row.licenseNo}</TableCell>
                                    <TableCell align="left">{row.address}</TableCell>
                                    <TableCell align="left">{row.contactNo}</TableCell>
                                    <TableCell align="left">{row.email}</TableCell>
                                    <TableCell align="left">
                                        <Tooltip title="Edit">
                                            <IconButton onClick={()=>{
                                            this.loadCustomerData(row);


                                            }}>
                                                <EditIcon color="primary" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                            <IconButton>
                                                <DeleteIcon color="error" />
                                            </IconButton>
                                        </Tooltip>
                                    </TableCell>
                                </TableRow>
                            ))}
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