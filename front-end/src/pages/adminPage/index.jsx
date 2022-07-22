import {Component} from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {Link} from "react-router-dom"
import Grid from "@mui/material/Grid";
import {styleSheet} from "./style";
import {withStyles} from "@mui/styles";

const drawerWidth = 240;


class AdminPage extends Component{
    render() {
        const {classes} = this.props;
        return(

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            Clipped drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {['Dashboard', 'My Profile'].map((text, index) => (
                                <Link to ='/ReservationPage' >
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                {index % 2 === 0 ? <InboxIcon  /> : <MailIcon />}
                                            </ListItemIcon>
                                            <ListItemText primary={text} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>

                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Manage Customer', 'Manage Vehicle','Manage Booking','Manage Driver','Income Report','Log out'].map((text, index) => (
                                <ListItem key={text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                        </ListItemIcon>
                                        <ListItemText primary={text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />

                    <Grid style={{display:'flex',justifyContent:'space-evenly',alignItems:'center',flexWrap:'wrap',width:'81vw',height:'84vh'}}>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Registered Users
                            </Typography>

                            <Grid style={{display:'flex',justifyContent:'center',alignItems:'center',width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}>
                                <h1 style={{fontSize:'30px'}}>250</h1>
                            </Grid>


                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Bookings
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Available Cars
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>
                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Registered Cars
                            </Typography>
                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Active Bookings
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>


                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Available Drivers
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>
                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Occupied Drivers
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                To Be Repaired
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>

                        <Grid className={classes.topics}>
                            <Typography paragraph>
                                Under Maintenance
                            </Typography>

                            <Grid style={{width:'8vw',height:'8vw',borderRadius:'100%',backgroundColor:'green'}}></Grid>

                        </Grid>


                    </Grid>

                </Box>
            </Box>


        )
    }
}
export default withStyles(styleSheet)(AdminPage)