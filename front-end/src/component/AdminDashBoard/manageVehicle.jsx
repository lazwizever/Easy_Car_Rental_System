import {Component} from "react";
import Grid from "@mui/material/Grid";
import UploadButton from "../UploadBtn";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./adminManageVehicle";
import {Button, TextField} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";


class ManageVehicle extends Component{
    render() {

        const columns = [
            { field: 'id', headerName: 'Reg No', width: 100 },
            { field: 'Brand', headerName: 'Brand', width: 100 },
            { field: 'fuelType', headerName: 'Fuel Type', width: 150 },
            { field: 'transmissionType', headerName: 'Transmission Type', width: 150 },
            { field: 'color', headerName: 'Color', width: 100 },
            { field: 'vehicleType', headerName: 'Vehicle Type', width: 150 },
            { field: 'noOfPassengers', headerName: 'No Of Passengers', width: 150 },
            { field: 'vehicleTypes', headerName: 'Vehicle Type', width: 100 ,

            },

        ];

        const rows = [
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },
            { id: 'Rg12345', Brand: 'BMW-i8', fuelType:"Diesel",transmissionType: 'Manual', color: 'black',vehicleType:'Luxury',noOfPassengers:'5',vehicleTypes:'Luxury' },

        ];




        const {classes} = this.props;
        return(

            <Grid className={classes.container}>

                <Grid style={{ height: '60vh',marginLeft:'-44vw',display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', marginTop: '3vh',width: '30vw',flexWrap:'wrap'}}>

                    <Grid>
                        <div style={{width:'15vw',height:'30vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <UploadButton/>
                            <Typography>
                                Front Image
                            </Typography>
                        </div>
                    </Grid>

                    <Grid>
                        <div style={{width:'15vw',height:'30vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <UploadButton/>
                            <Typography>
                                Side Image
                            </Typography>
                        </div>
                    </Grid>

                    <Grid>
                        <div style={{width:'15vw',height:'30vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <UploadButton/>
                            <Typography>
                                Back Side Image
                            </Typography>
                        </div>
                    </Grid>

                    <Grid>
                        <div style={{width:'15vw',height:'30vh',border:'1px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            <UploadButton/>
                            <Typography>
                                Interior Image
                            </Typography>
                        </div>
                    </Grid>

                </Grid>


                <Grid className={classes.txtFieldContainer} >

                    <Grid display='flex' justifyContent='space-evenly' margin='2vh' >
                        <TextField id="outlined-basic" label="Registration No"  variant="outlined" width='25vw' />
                        <TextField id="outlined-basic"  label="Brand"  variant="outlined" width='25vw'/>
                    </Grid>


                    <Grid display='flex' justifyContent='space-evenly' margin='1vh' >
                        <TextField id="outlined-basic"  label="Fuel Type"  variant="outlined" width='25vw'/>
                        <TextField id="outlined-basic"  label="Transmission Type"  variant="outlined" width='25vw'/>
                    </Grid>

                    <Grid display='flex' justifyContent='space-evenly' margin='1vh'>
                        <TextField id="outlined-basic" label="Color"  variant="outlined" width='25vw'/>
                        <TextField id="outlined-basic" label="Vehicle Type"  variant="outlined" width='25vw'/>
                    </Grid>


                    <Grid display='flex' justifyContent='space-evenly' margin='1vh' >
                        <TextField id="outlined-basic"  label="No Of Passengers"  variant="outlined" width='25vw'/>
                        <TextField id="outlined-basic"  label="Vehicle Type"  variant="outlined" width='25vw'/>
                    </Grid>

                </Grid>


                <Grid>
                    <Button style={{backgroundColor:'green',color:'white',fontWeight:'semi',height:'6vh',width:'10vw',
                        fontSize:'15px',marginLeft:'46vw',marginTop:'10vh'}}>Add</Button>
                </Grid>



                <Grid width='95%'>
                    <div style={{ height: 400, width: '95%' ,marginTop:'10vh',marginLeft:'1vw'}}>
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
export default withStyles(styleSheet)(ManageVehicle)