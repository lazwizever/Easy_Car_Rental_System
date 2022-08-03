import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./adminDashBoardStyle";
import AdminDashboardService from '../../../service/adminDashBoardService/dashboardService'
import VehicleService from "../../../service/vehicleService";


class DashBoard extends Component{
    constructor(props) {
        super(props);

        this.state = {
            formData: {
                noOfRegisteredUsers: '',
                totalBookingsForTheDay: '',
                totalAvailableCars: '',
                totalReservedCars: '',
                activeBookings: '',
                availableDrivers: '',
                occupiedDrivers: '',
                toBeRepairedCars: '',
                underMaintenanceCars: '',

            },

            alert: false,
            message: '',
            severity: '',

        }
    }


    fetchAdminData = async () => {
        let res = await AdminDashboardService.fetchAdminDashBoardInfo();

        if (res.status === 200) {
            let summary = res.data.data;

            this.setState({
                formData: {
                    noOfRegisteredUsers: summary.noOfRegisteredUsers,
                    totalBookingsForTheDay: summary.totalBookingsForTheDay,
                    totalAvailableCars: summary.totalAvailableCars,
                    totalReservedCars: summary.totalReservedCars,
                    activeBookings: summary.activeBookings,
                    availableDrivers: summary.availableDrivers,
                    occupiedDrivers: summary.occupiedDrivers,
                    toBeRepairedCars: summary.toBeRepairedCars,
                    underMaintenanceCars: summary.underMaintenanceCars,

                }
            });
        }
        console.log(this.state.data)    // print customers array

    };

    componentDidMount() {
        this.fetchAdminData();
    }


    render() {

        const {classes} = this.props;
        return(

<Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',width:'81vw',height:'84vh'}}>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Registered Users
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.noOfRegisteredUsers}</h1>
        </Grid>


    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.totalBookingsForTheDay}</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Available Cars
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.totalAvailableCars}</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Reserved Cars
        </Typography>
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.totalReservedCars}</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Active Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.activeBookings}</h1>
        </Grid>

    </Grid>


    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Available Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.availableDrivers}</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Occupied Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.occupiedDrivers}</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            To Be Repaired
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.toBeRepairedCars}</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Under Maintenance
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>{this.state.formData.underMaintenanceCars}</h1>
        </Grid>

    </Grid>


</Grid>
        )
    }
}
export default withStyles(styleSheet)(DashBoard)





