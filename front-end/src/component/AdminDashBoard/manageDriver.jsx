import {Component} from "react";
import Grid from "@mui/material/Grid";
import {DataGrid} from "@mui/x-data-grid";
import {Button, TextField} from "@mui/material";
import * as React from "react";
import DatePicker from "../../component/DatePicker";
import TimePicker from "../../component/TimePicker";
import Typography from "@mui/material/Typography";



class ManageDriver extends Component{
    render() {

        const columns = [
            { field: 'id', headerName: 'Driver ID', width: 100 },
            { field: 'driverName', headerName: 'Driver Name', width: 150 },
            { field: 'monday', headerName: 'Monday', width: 150 },
            { field: 'tuesday', headerName: 'Tuesday', width: 150 },
            { field: 'wednesday', headerName: 'Wednesday', width: 150 },
            { field: 'thursday', headerName: 'Thursday', width: 150 },
            { field: 'friday', headerName: 'Friday', width: 150 },
            { field: 'saturday', headerName: 'Saturday', width: 150 ,

            },

        ];

        const rows = [
            { id: 'D001', driverName:"Kamal Nuwan",monday: '8.00 am-4.00 pm ', tuesday: '8.00 am-4.00 pm',wednesday:'8.00 am-4.00 pm ',thursday:'8.00 am-4.00 pm',friday:'8.00 am-4.00 pm ',saturday:'8.00 am-4.00 pm ' },
            { id: 'D001', driverName:"Kamal Nuwan",monday: '8.00 am-4.00 pm ', tuesday: '8.00 am-4.00 pm',wednesday:'8.00 am-4.00 pm ',thursday:'8.00 am-4.00 pm',friday:'8.00 am-4.00 pm ',saturday:'8.00 am-4.00 pm ' },
            { id: 'D001', driverName:"Kamal Nuwan",monday: '8.00 am-4.00 pm ', tuesday: '8.00 am-4.00 pm',wednesday:'8.00 am-4.00 pm ',thursday:'8.00 am-4.00 pm',friday:'8.00 am-4.00 pm ',saturday:'8.00 am-4.00 pm ' },
            { id: 'D001', driverName:"Kamal Nuwan",monday: '8.00 am-4.00 pm ', tuesday: '8.00 am-4.00 pm',wednesday:'8.00 am-4.00 pm ',thursday:'8.00 am-4.00 pm',friday:'8.00 am-4.00 pm ',saturday:'8.00 am-4.00 pm ' },

        ];


        return(

            <Grid>

                <Grid>
                    <div style={{ height: 400, width: '100%' ,marginTop:'20vh',backgroundColor:'#eeeff1'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </Grid>



            </Grid>

        )
    }


}
export default ManageDriver