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
            {name:'General',Daily_Rented_Vehicles:'100000'},
            {name:'Premium',Daily_Rented_Vehicles:'200000'},
            {name:'Luxury',Daily_Rented_Vehicles:'300000'},

        ];


        const data1 = [
            {name:'General',Monthly_Rented_Vehicles:'1500000'},
            {name:'Premium',Monthly_Rented_Vehicles:'2500000'},
            {name:'Luxury',Monthly_Rented_Vehicles:'3500000'},

        ];


        const data2 = [
            {name:'General',Yearly_Rented_Vehicles:'180000000'},
            {name:'Premium',Yearly_Rented_Vehicles:'280000000'},
            {name:'Luxury',Yearly_Rented_Vehicles:'380000000'},

        ];


        return(

            <Grid style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>

                <Grid style={{marginTop:'15vh'}}>
                    <BarChart
                        width={500}
                        height={500}
                        data={data}
                        margin={{
                            top: 20,
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

                        <YAxis/>
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Daily_Rented_Vehicles" fill="#8884d8" background={{ fill: "#eeeff1" }} />
                    </BarChart>
                </Grid>

                <Grid style={{marginTop:'15vh'}}>
                    <BarChart
                        width={500}
                        height={500}
                        data={data1}
                        margin={{
                            top: 20,
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
                        <Bar dataKey="Monthly_Rented_Vehicles" fill="#8884d8" background={{ fill: "#eeeff1" }} />
                    </BarChart>
                </Grid>

                <Grid style={{marginTop:'15vh'}}>
                    <BarChart
                        width={500}
                        height={500}
                        data={data2}
                        margin={{
                            top: 20,
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
                        <Bar dataKey="Yearly_Rented_Vehicles" fill="#8884d8" background={{ fill: "#eeeff1" }} />
                    </BarChart>
                </Grid>

            </Grid>





        )
    }


}
export default IncomeReports