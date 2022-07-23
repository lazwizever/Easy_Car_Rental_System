import {Component} from "react";
import Drawer from '../../component/DriverDashBoard'
import Grid from "@mui/material/Grid";


class DriverDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}


export default DriverDashBoard