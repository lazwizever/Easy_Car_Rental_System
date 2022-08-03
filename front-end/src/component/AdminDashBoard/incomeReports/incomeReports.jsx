import {Component} from "react";
import Grid from "@mui/material/Grid";
import { Tooltip,BarChart,XAxis,YAxis,Legend,CartesianGrid,Bar, PieChart,Pie} from "recharts";
import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import DatePicker from "../../DatePicker";
import {DataGrid} from "@mui/x-data-grid";


class IncomeReports extends Component{

    render() {

        const data = [
            {name:'General',Packages:'20'},
            {name:'Premium',Packages:'10'},
            {name:'Luxury',Packages:'15'},

        ];

       /* const columns = [
            { field: 'vehicleType', headerName: 'vehicle Type', width: 100 },
            { field: 'income', headerName: 'Income (Rs)', width: 100 ,
            },
        ];

        const rows = [
            { vehicleType: 'General', bookingId: '250000' },
            { vehicleType: 'Premium', bookingId: '150000' },
            { vehicleType: 'Luxury', bookingId: '550000' },
        ];*/


       /* const columns = [
            { field: 'id', headerName: 'Vehicle Type', width: 200 },
            { field: 'amount', headerName: 'Amount (Rs)', width: 200 ,

            },

        ];

        const rows = [
            { id: 'General', amount: '250000'},
            { id: 'Premium', amount: '350000'},
            { id: 'Luxury', amount: '550000'},

        ];*/

        return(

            <Grid>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 100,
                        left: 80,
                        bottom: 5,
                    }}
                    barSize={20}
                >
                    <XAxis
                        dataKey="name"
                        scale="point"
                        padding={{ left: 10, right: 10 }}
                    />

                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="Packages" fill="#8884d8" background={{ fill: "#eeeff1" }} />
                </BarChart>
            </Grid>

           /* <Grid>

                <Grid >
                    <DatePicker/>
                </Grid>


                <Grid >
                    <div style={{ height: 300, width: '37%' ,marginTop:'10vh',backgroundColor:'#eeeff1'}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </Grid>


            </Grid>*/

        )
    }


}
export default IncomeReports