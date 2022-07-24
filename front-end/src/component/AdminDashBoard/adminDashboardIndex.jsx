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
        <Typography paragraph>
            Registered Users
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>250</h1>
        </Grid>


    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>52</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Available Cars
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>11</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Registered Cars
        </Typography>
        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>21</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Active Bookings
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>15</h1>
        </Grid>

    </Grid>


    <Grid className={classes.topics}>
        <Typography paragraph>
            Available Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>10</h1>
        </Grid>
    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Occupied Drivers
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>18</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            To Be Repaired
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>8</h1>
        </Grid>

    </Grid>

    <Grid className={classes.topics}>
        <Typography paragraph>
            Under Maintenance
        </Typography>

        <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'#636e72',color:'white'}}>
            <h1 style={{fontSize:'30px'}}>12</h1>
        </Grid>

    </Grid>


</Grid>
        )
    }
}
export default withStyles(styleSheet)(AdminDashBoard)





