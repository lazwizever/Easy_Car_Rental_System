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

                <ValidatorForm ref="form" className="pt-2">

            <Grid style={{width:"84vw",height:"85vh"}}>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                                            <IconButton>
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


            </>
        )
    }


}
export default (ManageCustomer)