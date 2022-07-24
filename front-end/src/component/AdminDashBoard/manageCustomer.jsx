import {Component} from "react";
import Grid from "@mui/material/Grid";
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'Customer ID', width: 100 },
    { field: 'bookingId', headerName: 'Booking ID', width: 100 },
    { field: 'status', headerName: 'Status', width: 100 },
    { field: 'customerName', headerName: 'Customer Name', width: 180 },
    { field: 'NIC', headerName: 'NIC', width: 150 },
    { field: 'drivingLicenseNo', headerName: 'DrivingLicenseNo', width: 150 },
    { field: 'customerAddress', headerName: 'Customer Address', width: 250 },
    { field: 'contactNo', headerName: 'Contact No', width: 150 ,

    },

];

const rows = [
   { id: 'C001', bookingId: 'B001', status:"Approved",customerName: 'Lasan Kariyawasam', NIC: '2000702639',drivingLicenseNo:'D1254799584',customerAddress:'Galle',contactNo:'06789584' },
   { id: 'C001', bookingId: 'B001',  status:"Approved",customerName: 'Lasan Kariyawasam', NIC: '2000702639',drivingLicenseNo:'D1254799584',customerAddress:'Galle',contactNo:'06789584' },
   { id: 'C001', bookingId: 'B001', status:"Approved",customerName: 'Lasan Kariyawasam', NIC: '2000702639',drivingLicenseNo:'D1254799584',customerAddress:'Galle',contactNo:'06789584' },
   { id: 'C001', bookingId: 'B001', status:"Approved", customerName: 'Lasan Kariyawasam', NIC: '2000702639',drivingLicenseNo:'D1254799584',customerAddress:'Galle',contactNo:'06789584' },
   { id: 'C001', bookingId: 'B001', status:"Approved", customerName: 'Lasan Kariyawasam', NIC: '2000702639',drivingLicenseNo:'D1254799584',customerAddress:'Galle',contactNo:'06789584' },

];



class ManageCustomer extends Component{
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
export default ManageCustomer