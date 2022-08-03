import {Component} from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: 'Booking ID', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'bookingDate', headerName: 'Booking Date', width: 200 },
    { field: 'bookingTime', headerName: 'Booking Time', width: 200 },
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



class ManageBooking extends Component{

    render() {
        return(
            <Grid>
                <div style={{ height: 500, width: '100%' ,marginTop:'10vh',backgroundColor:'#eeeff1'}}>
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

export default ManageBooking