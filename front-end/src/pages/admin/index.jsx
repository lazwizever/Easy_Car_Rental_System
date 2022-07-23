import {Component} from "react";
import Drawer from '../../component/AdminDashBoard'
import Grid from "@mui/material/Grid";


class AdminDashBoard extends Component{

    render() {
        return(
            <Grid>
                <Drawer/>
            </Grid>
        )
    }
}

export default AdminDashBoard