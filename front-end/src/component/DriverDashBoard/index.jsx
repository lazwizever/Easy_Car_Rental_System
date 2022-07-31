import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {NavLink, Route, Routes} from "react-router-dom";
/*import Profile from "./profile";*/
import DriverProfile from "./profile";
import DriverSchedule from "./driverSchedule";
/*import Booking from "./booking";
import ManageBooking from "./manageBooking";*/

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const {classes} = props;
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const listItemData = [
        {label: "Profile", link: "/driverProfile", icon: <AccountBoxIcon color={'primary'} /> },
        {label: "View Schedule", link: "/driverSchedule", icon: <AccountBoxIcon color={'primary'} /> },
        /*{label: "Booking", link: "/booking", icon: <BookIcon color={'success'} />},
        {label: "Manage Booking", link: "/manageBooking", icon: <CollectionsBookmarkIcon color={'warning'}/> },
        {label: "Log out", link: "/logout", icon: <LogoutIcon style={{color:'#000000'}}/>},*/
    ]

    const drawer = (
        <div>
            <Toolbar />

            <List>
                {listItemData.map((item, index) => (
                    <ListItem key={index} disablePadding
                              exact
                              component={NavLink}
                              to={item.link}

                        //className={classes.navLinks}
                        //activeClassName={classes.activeNavLinks}

                    >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.label}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
                style={{backgroundColor:'black'}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography width={'100%'} variant="h5" noWrap component="div" textAlign={'center'}>
                        Driver DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box >
                    <Routes>
                        <Route exact path="/driverProfile" element={<DriverProfile/>}/>
                        <Route exact path="/driverSchedule" element={<DriverSchedule/>}/>

                    </Routes>
                </Box>

            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;