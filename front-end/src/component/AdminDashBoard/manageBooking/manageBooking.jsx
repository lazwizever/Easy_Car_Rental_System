import {Component} from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Typography from "@mui/material/Typography";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import VehicleService from "../../../service/vehicleService";



class ManageBooking extends Component{

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };



    render() {


        function createData(id, customerId, fullName, nic, licenNo, contact, address) {
            return { id, customerId, fullName, nic, licenNo, contact,address};
        }

        const rows = [
            createData('B001','C001','Lasan Kariyawasam','20007414784', 'D2423452','0762514785','Galle'),
            createData('B001','C001','Lasan Kariyawasam','20007414784', 'D2423452','0762514785','Galle'),
            createData('B001','C001','Lasan Kariyawasam','20007414784', 'D2423452','0762514785','Galle'),
            createData('B001','C001','Lasan Kariyawasam','20007414784', 'D2423452','0762514785','Galle'),
            createData('B001','C001','Lasan Kariyawasam','20007414784', 'D2423452','0762514785','Galle'),

        ];


        return(

            <Grid>

                {/*-----------------------Pending Booking Request-------------*/}
                <Grid>


                    <Grid style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Typography style={{fontSize:'22px'}}>
                            Change The Driver
                        </Typography>


                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>

                            <TextField id="outlined-basic" label="Driver Id" variant="outlined" style={{width: '20vw'}}/>
                            <TextField id="outlined-basic" label="First name" variant="outlined" style={{width: '20vw'}}/>
                            <TextField id="outlined-basic" label="Last Name" variant="outlined" style={{width: '20vw'}}/>
                        </Grid>

                        <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                            <TextField id="outlined-basic" label="NIC" variant="outlined" style={{width: '20vw'}}/>
                            <TextField id="outlined-basic" label="License No" variant="outlined" style={{width: '20vw'}}/>
                            <TextField id="outlined-basic" label="Contact No" variant="outlined" style={{width: '20vw'}}/>
                        </Grid>

                        <Grid>

                            <Button style={{backgroundColor:'green',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                                fontSize:'15px',marginLeft:'70vw',marginTop:'10vh'}}>Add</Button>
                        </Grid>

                    </Grid>


                    <Grid>
                        <Typography style={{fontSize:'30px',paddingLeft:'28vw'}}>
                            Pending Booking Request
                        </Typography>
                    </Grid>

                    <Grid>
                        <TableContainer component={Paper} style={{ height: '70vh',width:'80vw',backgroundColor:'#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Full Name</TableCell>
                                        <TableCell align="left">NIC</TableCell>
                                        <TableCell align="left">License No</TableCell>
                                        <TableCell align="left">Contact No</TableCell>
                                        <TableCell align="left">Address</TableCell>
                                        <TableCell align="left">Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.customerId}</TableCell>
                                            <TableCell align="left">{row.fullName}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.licenNo}</TableCell>
                                            <TableCell align="left">{row.contact}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>
                                            <TableCell align="left">
                                                <Tooltip title="Accept">
                                                    <IconButton
                                                        onClick={() => {
                                                            // this.updateCustomer(row);
                                                        }}
                                                    >
                                                        <EditIcon color="primary" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Deny">
                                                    <IconButton
                                                        onClick={() => {
                                                            // this.deleteCustomer(row.id)
                                                        }}
                                                    >
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
                </Grid>


                {/*-----------------------Confirmed Booking Request-------------*/}
                <Grid marginTop='10vh'>

                    <Grid>
                        <Typography style={{fontSize:'30px',paddingLeft:'28vw'}}>
                            Confirmed Booking Request
                        </Typography>
                    </Grid>

                    <Grid>
                        <TableContainer component={Paper} style={{ height: '60vh',width:'80vw',backgroundColor:'#eeeff1'}}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Booking Id</TableCell>
                                        <TableCell align="left">Customer Id</TableCell>
                                        <TableCell align="left">Full Name</TableCell>
                                        <TableCell align="left">NIC</TableCell>
                                        <TableCell align="left">License No</TableCell>
                                        <TableCell align="left">Contact No</TableCell>
                                        <TableCell align="left">Address</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">{row.id}</TableCell>
                                            <TableCell align="left">{row.customerId}</TableCell>
                                            <TableCell align="left">{row.fullName}</TableCell>
                                            <TableCell align="left">{row.nic}</TableCell>
                                            <TableCell align="left">{row.licenNo}</TableCell>
                                            <TableCell align="left">{row.contact}</TableCell>
                                            <TableCell align="left">{row.address}</TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                </Grid>


            </Grid>


        )
    }


}
export default ManageBooking