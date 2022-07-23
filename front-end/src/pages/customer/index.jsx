import {Component} from "react";
import Drawer from '../../component/CustomerDashBoard'
import Grid from "@mui/material/Grid";


class CustomerDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}


export default CustomerDashBoard