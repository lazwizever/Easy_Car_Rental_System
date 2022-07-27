import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Component} from "react";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./adminDashBoardStyle";



class AdminDashBoard extends Component{

    render() {

        const {classes} = this.props;
        return(

<Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',width:'81vw',height:'84vh'}}>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Registered Users
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>250</h1>
        </Grid>


    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>52</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Available Cars
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>11</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Registered Cars
        </Typography>
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>21</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Active Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>15</h1>
        </Grid>

    </Grid>


    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Available Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>10</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Occupied Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>18</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            To Be Repaired
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>8</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph style={{fontSize:'21px'}}>
            Under Maintenance
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#40739e',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>12</h1>
        </Grid>

    </Grid>


</Grid>
        )
    }
}
export default withStyles(styleSheet)(AdminDashBoard)





