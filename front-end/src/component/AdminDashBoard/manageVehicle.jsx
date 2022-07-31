import * as React from "react";
import {Component} from "react";
import Grid from "@mui/material/Grid";
import UploadButton from "../UploadBtn";
import Typography from "@mui/material/Typography";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./adminManageVehicle";
import {Button, TextField} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import Autocomplete from "@mui/material/Autocomplete";
import {ValidatorForm} from "react-material-ui-form-validator";
import GDSESnackBar from "../SnackBar";
import VehicleService from '../../service/vehicleService'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import EditIcon from '@mui/icons-material/Edit';
import Paper from '@mui/material/Paper';
import GDSEButton from "../Button/button";



class ManageVehicle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                vehicleId: '',
                registrationNo: '',
                fuelType: '',
                vehicleType: '',
                noOfPassengers: '',
                brand: '',
                pricePerExtraKm: '',

                vehiclePriceRate: {
                    dailyRate: '',
                    monthlyRate: '',
                },

                freeMileAge: {
                    dailyMileage: '',
                    monthlyMileage: '',

                },

                transmissionType: '',

                vehicleAvailability: '',

                damageFee: '',
                color: '',
                lastServiceKm: '',
                mileage: '',

            },

            fuelTypes: [
                {type: 'DIESEL'},
                {type: 'PETROL'}
            ],

            vehicleTypes: [
                {type: 'GENERAL'},
                {type: 'PREMIUM'},
                {type: 'LUXURY'},
            ],

            vehicleAvailabilityTypes: [
                {type: 'AVAILABLE'},
                {type: 'NOT_AVAILABLE'},

            ],

            transmissionTypes: [
                {type: 'AUTO'},
                {type: 'MANUAL'},
            ],

            alert: false,
            message: '',
            severity: '',

            data: [],
            btnLabel: 'save',
            btnColor: 'primary'
        }

    }

    loadData = async () => {
        let res = await VehicleService.fetchVehicle();

        if (res.status === 200) {
            this.setState({
                data: res.data.data
            });
        }
        console.log(this.state.data)    // print customers array

    };

    submitVehicle = async () => {
        let formData = this.state.formData;

        console.log(formData)


        if (this.state.btnLabel === "save") {
            let res = await VehicleService.postVehicle(formData);


            if (res.status === 201) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                });
                this.clearFields();
                await this.loadData();

            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }


        if (this.state.btnLabel === "Update") {
            let res = await VehicleService.putVehicle(formData);
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                //this.clearFields();
                await this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }

    };

    clearFields = () => {
        this.setState({

            formData: {
                vehicleId: '',
                registrationNo: '',
                fuelType: '',
                vehicleType: '',
                noOfPassengers: '',
                brand: '',
                pricePerExtraKm: '',

                vehiclePriceRate: {
                    dailyRate: '',
                    monthlyRate: '',
                },

                freeMileAge: {
                    dailyMileage: '',
                    monthlyMileage: '',

                },

                transmissionType: '',

                vehicleAvailability: '',

                damageFee: '',
                color: '',
                lastServiceKm: '',
                mileage: '',

            },

        });
    };



    updateVehicle = (data) => {
        console.log(data)

        this.setState({
            btnLabel: 'Update',
            btnColor: 'secondary',
            formData: {
                vehicleId: data.vehicleId,
                registrationNo: data.registrationNo,
                fuelType: data.fuelType,
                vehicleType: data.vehicleType,
                noOfPassengers: data.noOfPassengers,
                brand: data.brand,
                pricePerExtraKm: data.pricePerExtraKm,

                vehiclePriceRate: {
                    dailyRate: data.vehiclePriceRate.dailyRate,
                    monthlyRate: data.vehiclePriceRate.monthlyRate,
                },

                freeMileAge: {
                    dailyMileage: data.freeMileAge.dailyMileage,
                    monthlyMileage: data.freeMileAge.monthlyMileage,

                },

                transmissionType: data.transmissionType,

                vehicleAvailability: data.vehicleAvailability,

                damageFee: data.damageFee,
                color: data.color,
                lastServiceKm: data.lastServiceKm,
                mileage: data.mileage,

            },
        });
    };

    deleteVehicle = async (id) => {
        let params = {
            id: id
        }
        let res = await VehicleService.deleteVehicle(params);
        console.log(res)

        if (res.status === 200) {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            await this.loadData();
        } else {
            this.setState({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
        }
    };

    componentDidMount() {
        this.loadData();
    }

    render() {

        /*const columns = [
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

        ];*/


        const {classes} = this.props;
        return (

            <>

                <Grid className={classes.container}>

                    <Grid style={{
                        height: '60vh',
                        marginLeft: '-44vw',
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        marginTop: '3vh',
                        width: '30vw',
                        flexWrap: 'wrap'
                    }}>


                        <Grid>
                            <div style={{
                                width: '15vw',
                                height: '30vh',
                                border: '1px solid black',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <UploadButton/>
                                <Typography>
                                    Interior Image
                                </Typography>
                            </div>
                        </Grid>

                    </Grid>


                    <ValidatorForm ref="form" className="pt-2" onSubmit={this.submitVehicle}>

                        <Grid display={"flex"} height={'75vh'} marginTop={'8vh'}>
                            <Grid width={'60%'} display={"flex"} flexWrap={'wrap'}>

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="vehicleId"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.vehicleId}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.vehicleId = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Registration number"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.registrationNo}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.registrationNo = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Brand "
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.brand}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.brand = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Color"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.color}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.color = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="No Of Passengers"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.noOfPassengers}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.noOfPassengers = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Mileage"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.mileage}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.mileage = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Last Service Mileage"
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.lastServiceKm}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.lastServiceKm = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Price Per Extra KM "
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.pricePerExtraKm}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.pricePerExtraKm = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />

                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Damage Fee "
                                    sx={{ m: 1, width: '22.7ch' }}
                                    value={this.state.formData.damageFee}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.damageFee = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Daily Price"
                                    sx={{ m: 1, width: '35ch' }}
                                    value={this.state.formData.vehiclePriceRate.dailyRate}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.vehiclePriceRate.dailyRate = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Monthly Price"
                                    defaultValue=""
                                    sx={{ m: 1, width: '35ch' }}
                                    value={this.state.formData.vehiclePriceRate.monthlyRate}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.vehiclePriceRate.monthlyRate = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Daily Free Milage "
                                    sx={{ m: 1, width: '35ch' }}
                                    value={this.state.formData.freeMileAge.dailyMileage}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.freeMileAge.dailyMileage = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Monthly Free Milage "
                                    sx={{ m: 1, width: '35ch' }}
                                    value={this.state.formData.freeMileAge.monthlyMileage}
                                    onChange={(e) => {
                                        let formDataOb =this.state.formData
                                        formDataOb.freeMileAge.monthlyMileage = e.target.value
                                        this.setState(formDataOb)
                                    }}
                                    validators={['required']}
                                />


                                <Autocomplete

                                    onChange={(e, value, r) => {

                                        let formData = this.state.formData
                                        formData.vehicleType = value.type
                                        this.setState({ formData })

                                    }}
                                    getOptionLabel={
                                        (option) => option.type
                                    }
                                    id="controllable-states"
                                    options={this.state.vehicleTypes}
                                    sx={{m: 1, width: '35ch' }}
                                    renderInput={(params) => <TextField {...params} label="Vehicle Type" />}
                                />


                                <Autocomplete

                                    onChange={(e, value, r) => {

                                        let formData = this.state.formData
                                        formData.transmissionType = value.type

                                        this.setState({ formData })

                                    }}
                                    getOptionLabel={
                                        (option) => option.type
                                    }
                                    id="controllable-demo"
                                    options={this.state.transmissionTypes}
                                    sx={{ m: 1,width: '35ch' }}
                                    renderInput={(params) => <TextField {...params} label="Transmission Type" />}
                                />

                                <Autocomplete

                                    onChange={(e, value, r) => {

                                        let formData = this.state.formData

                                        formData.fuelType = value.type

                                        this.setState({ formData })

                                    }}
                                    getOptionLabel={
                                        (option) => option.type
                                    }
                                    id="controllable"
                                    options={this.state.fuelTypes}
                                    sx={{ m:1, width: '35ch' }}
                                    renderInput={(params) => <TextField {...params} label="Fuel Type" />}
                                />


                                <Autocomplete

                                    onChange={(e, value, r) => {

                                        let formData = this.state.formData

                                        formData.vehicleAvailability = value.type

                                        this.setState({ formData })

                                    }}
                                    getOptionLabel={
                                        (option) => option.type
                                    }
                                    id="controllable"
                                    options={this.state.vehicleAvailabilityTypes}
                                    sx={{ m:1, width: '35ch' }}
                                    renderInput={(params) => <TextField {...params} label="Availability" />}
                                />


                            </Grid>

                            <Grid width={'36%'}>

                                <Grid height={'80%'} display={'flex'} flexWrap={'wrap'} justifyContent={'space-evenly'}>
                                    <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                                        <img src="" alt=""/>
                                        <UploadButton/>
                                        <Typography>Front View</Typography>
                                    </Grid>

                                    <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                                        <img src="" alt=""/>
                                        <UploadButton/>
                                        <Typography>Back View</Typography>
                                    </Grid>

                                    <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                                        <img src="" alt=""/>
                                        <UploadButton/>
                                        <Typography>Side View</Typography>
                                    </Grid>

                                    <Grid width={'48%'} height={'48%'} border={'1px solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
                                        <img src="" alt=""/>
                                        <UploadButton/>
                                        <Typography>Interior</Typography>
                                    </Grid>
                                </Grid>

                                <Grid height={'10%'} display={'flex'} justifyContent={'flex-end'}>

                                    <Button variant="contained" sx={{m:0.5,mt:4,width:'12ch',height:'5ch'}}
                                            style={{color: "white", backgroundColor: '#c4c4c4'}} type={'submit'}>
                                        Cancel
                                    </Button>

                                    <GDSEButton  sx={{m:0.5,mt:4,width:'12ch',height:'5ch'}}
                                             style={{color: "white"}} variant="contained"
                                             label={this.state.btnLabel}
                                             type="submit" size="small"
                                             color={this.state.btnColor}/>

                                </Grid>
                            </Grid>
                        </Grid>

                    </ValidatorForm>




                    <Grid width='95%'>
                        <div style={{height: 400, width: '95%', marginTop: '10vh', marginLeft: '1vw'}}>
                            <TableContainer component={Paper} style={{ height: '45vh', width: '81vw', backgroundColor: '#eeeff1' }}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="left">Vehicle Id</TableCell>
                                            <TableCell align="left">Registration No</TableCell>
                                            <TableCell align="left">Fuel Type</TableCell>
                                            <TableCell align="left">Vehicle Type</TableCell>
                                            <TableCell align="left">No Of Passengers</TableCell>
                                            <TableCell align="left">Brand</TableCell>
                                            <TableCell align="left">Price Per Extra Km</TableCell>
                                            <TableCell align="left">Vehicle Price  (Daily Rate)</TableCell>
                                            <TableCell align="left">Vehicle Price (Monthly Rate)</TableCell>
                                            <TableCell align="left">Free Mileage(Daily)</TableCell>
                                            <TableCell align="left">Free Mileage(Monthly)</TableCell>
                                            <TableCell align="left">Transmission Type</TableCell>
                                            <TableCell align="left">Vehicle Availability</TableCell>
                                            <TableCell align="left">DamageFee</TableCell>
                                            <TableCell align="left">Color</TableCell>
                                            <TableCell align="left">Last Service Km</TableCell>
                                            <TableCell align="left">Mileage</TableCell>
                                            <TableCell align="left">Action</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.state.data.map((row) => (
                                                <TableRow>
                                                    <TableCell align="left">{row.vehicleId}</TableCell>
                                                    <TableCell align="left">{row.registrationNo}</TableCell>
                                                    <TableCell align="left">{row.fuelType}</TableCell>
                                                    <TableCell align="left">{row. vehicleType}</TableCell>
                                                    <TableCell align="left">{row.noOfPassengers}</TableCell>
                                                    <TableCell align="left">{row.brand}</TableCell>
                                                    <TableCell align="left">{row.pricePerExtraKm}</TableCell>
                                                    <TableCell align="left">{row.vehiclePriceRate.dailyRate}</TableCell>
                                                    <TableCell align="left">{row.vehiclePriceRate.monthlyRate}</TableCell>
                                                    <TableCell align="left">{row.freeMileAge.dailyMileage}</TableCell>
                                                    <TableCell align="left">{row.freeMileAge.monthlyMileage}</TableCell>
                                                    <TableCell align="left">{row.transmissionType}</TableCell>
                                                    <TableCell align="left">{row.vehicleAvailability}</TableCell>
                                                    <TableCell align="left">{row.damageFee}</TableCell>
                                                    <TableCell align="left">{row.color}</TableCell>
                                                    <TableCell align="left">{row.lastServiceKm}</TableCell>
                                                    <TableCell align="left">{row.mileage}</TableCell>
                                                    <TableCell align="left">
                                                        <Tooltip title="Edit">
                                                            <IconButton
                                                                onClick={() => {
                                                                    this.updateVehicle(row);
                                                                }}
                                                            >
                                                                <EditIcon color="primary" />
                                                            </IconButton>
                                                        </Tooltip>
                                                        <Tooltip title="Delete">
                                                            <IconButton
                                                                onClick={() => {
                                                                    this.deleteVehicle(row.vehicleId)
                                                                }}
                                                            >
                                                                <DeleteIcon color="error" />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </Grid>


                </Grid>

                <GDSESnackBar
                    open={this.state.alert}
                    onClose={() => {
                        this.setState({alert: false})
                    }}
                    message={this.state.message}
                    autoHideDuration={3000}
                    severity={this.state.severity}
                    variant="filled"
                />

            </>
        )
    }


}

export default withStyles(styleSheet)(ManageVehicle)