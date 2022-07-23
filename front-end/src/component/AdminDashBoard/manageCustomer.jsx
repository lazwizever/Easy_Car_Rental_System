import {Component} from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'Customer Id', headerName: 'Booking ID', width: 150 },
    { field: 'Customer Name', headerName: 'Status', width: 150 },
    { field: 'NIC', headerName: 'Status', width: 150 },
    { field: 'Driving License No', headerName: 'Status', width: 150 },
    { field: 'Customer Address', headerName: 'Booking Date', width: 200 },
    { field: 'Contact No', headerName: 'Booking Time', width: 200 },
    {field: 'vehicleregNumber', headerName: 'Vehicle RegNumber', width: 200},
    {field: 'fullName', headerName: 'Full Name', width: 200,

    },

];

const rows = [
    { id: 'B001', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B002', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B003', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B004', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B005', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B006', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B007', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },
    { id: 'B008', status: 'Approved', bookingDate: '2022-7-22', bookingTime: '14.20pm',vehicleregNumber:'V1254799584',fullName:'Lasan Kariyawasam' },

];


class ManageCustomer extends Component{
    render() {
        return(

            <Grid>
                <div style={{ height: 500, width: '100%' ,marginTop:'10vh'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                    />
                </div>
            </Grid>

        )
    }


}
export default ManageCustomer