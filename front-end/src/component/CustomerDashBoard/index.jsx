import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import LogoutIcon from '@mui/icons-material/Logout';
import {NavLink, Route, Routes} from "react-router-dom";
import Profile from "./profile";
import Booking from "./booking";
import ManageBooking from "./manageBooking";
import Grid from "@mui/material/Grid";
import logo from "../../assets/img/logo.png";
import { Link, Outlet } from "react-router-dom";



const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const {classes} = props;
    const {window} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const listItemData = [
        {label: "Profile", to: "profile", icon: <AccountCircleIcon style={{color: '#ffffff'}}/>},
        {label: "Booking", to: "booking", icon: <BookIcon style={{color: '#ffffff'}}/>},
        {label: "Manage Booking", to: "manageBooking", icon: <CollectionsBookmarkIcon style={{color: '#ffffff'}}/>},
        {label: "Log out", to: "logout", icon: <LogoutIcon style={{color: '#ffffff'}}/>},
    ]

    const drawer = (
        <div>
            <Toolbar/>

            <List style={{backgroundColor: "#101010", height: "91vh"}}>
                {listItemData.map((item, index) => (
                    <ListItem key={index} disablePadding
                              exact
                              component={Link}
                              to={item.to}

                        //className={classes.navLinks}
                        //activeClassName={classes.activeNavLinks}

                    >
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText style={{color: "white"}}>{item.label}</ListItemText>
                        </ListItemButton>

                    </ListItem>
                ))}
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    let user={
        userId:'10',
        userName: 'rashiLaassa',
        passWord: '0478521',
        role: 'CUSTOMER'
    }


    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                sx={{
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    ml: {sm: `${drawerWidth}px`},
                }}
                style={{backgroundColor: '#576574', height: "10vh"}}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography width={'100%'} variant="h5" noWrap component="div" marginTop='1vh' textAlign={'center'}
                                marginLeft='6vw' color='#ffffff'>
                        Make Your Dream Bigger
                    </Typography>

                    <Grid style={{position: 'absolute', paddingLeft: '24vw', paddingTop: '0vh'}}>
                        <img src={logo} style={{position: 'absolute', height: '7vh', width: '7vw'}}/>

                        <h3 style={{
                            margin: 'auto',
                            color: 'white',
                            fontFamily: 'unset',
                            paddingLeft: '1.5vw',
                            paddingTop: '4vh'
                        }}>Easy Car</h3>
                        <h1 style={{
                            color: 'white',
                            fontSize: '11px',
                            fontFamily: 'unset',
                            margin: 'auto',
                            paddingLeft: '2.2vw'
                        }}>rental pvt</h1>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
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
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{flexGrow: 1, p: 3, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
            >
                <Toolbar/>
                <Box>
                    {/*<Routes>
                        <Route exact path="/profile" element={<Profile user ={props.user}/>}/>
                        <Route exact path="/profile" element={<Profile user={user}/>}/>
                        <Route path="/booking" element={<Booking/>}/>
                        <Route path="/manageBooking" element={<ManageBooking/>}/>
                           <Route exact path="/logout" element={<LogOut/>}/>
                    </Routes>*/}
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