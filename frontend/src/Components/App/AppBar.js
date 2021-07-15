import React from 'react';
import { AppBar, Toolbar, IconButton, makeStyles, Badge, MenuItem, Menu } from '@material-ui/core';
import { AccountCircle, ExitToApp, PermMedia, Home } from '@material-ui/icons';
import MoreIcon from '@material-ui/icons/MoreVert';
import trello_logo from '../../Images/trello-logo.png';
import {Link} from 'react-router-dom';
import '../../Style/style.css';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    linkdesign: {
        fontSize: 16,
        textDecoration: 'none',
        color: '#5b5c5d',
        textTransform: 'uppercase',
        fontFamily: 'ui-monospace',
    },
    signuplinkdesign: {
        color: '#fdfeff',
        fontSize: 16,
        fontFamily: 'ui-monospace',
        textTransform: 'uppercase',
        textDecoration: 'none',
        border: '1px solid',
        backgroundColor: '#4f67db',
        padding: 10,
        borderRadius: 3
    }
}));

const AppBarComponent = (props) => {
    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setMobileMoreAnchorEl(null);
        handleMobileMenuClose();
    };

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <Home />
                    </Badge>
                </IconButton>
                <Link to='/' style={{ textDecoration: 'none' }} onClick={() => {props.fullAccessSet(false); handleMenuClose();}}>Home</Link>
            </MenuItem>
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <PermMedia />
                    </Badge>
                </IconButton>
                <Link to='/HOME' style={{ textDecoration: 'none' }}
                    onClick={() => {
                        handleMenuClose();
                        props.setUserLogin(true);
                    }}
                >Templates</Link>
            </MenuItem>
            {props.state.userProfile.profileAccess === true ? <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <AccountCircle />
                    </Badge>
                </IconButton>
                <Link to='/PROFILE' style={{ textDecoration: 'none' }}
                    onClick={() => {
                        props.setProfile(
                            props.state.ApiData.trelloID,
                            props.state.ApiData.token
                        );
                        props.dispProfile(true);
                        handleMenuClose();
                    }} >PROFILE</Link>
            </MenuItem> : <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <ExitToApp />
                    </Badge>
                </IconButton>
                <Link to='/REGISTRATION' style={{ textDecoration: 'none' }} onClick={() => {
                    props.setUserRegister(true);
                    props.setUserLogin(false);
                    handleMenuClose();
                }} >Registration</Link>
            </MenuItem>}
            <MenuItem>
                <IconButton color="inherit">
                    <Badge color="secondary">
                        <AccountCircle />
                    </Badge>
                </IconButton>
                {props.state.ApiData.fullAccess === true ? <Link to='/' style={{color: "#rgb(237, 241, 245)" , textDecoration: 'none' }} 
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            props.setUserLogout(
                            props.state.LoginReducer.user_email, props.state.ApiData.trelloID, props.state.ApiData.token, props.state.CreateTemplates.tempList
                            );
                            handleMenuClose();
                        }}
                    >
                        Logout
                </Link> : <Link to='/LOGIN' style={{ textDecoration: 'none' }} onClick={() => {
                    props.setUserLogin(true);
                    props.setUserRegister(false);
                    handleMenuClose();
                }} >Login</Link>
                }
            </MenuItem>
        </Menu>
    );
    return (
        <div className={classes.grow}>
            {props.state.AppBarReducer.AppBarAccess === true && <AppBar position="fixed" style={{ backgroundColor: "rgb(237, 241, 245)" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        style={{ color: "#rgb(237, 241, 245)", fontWeight: 600, fontSize: 35 }}
                    >
                        <img src={trello_logo} style={{ width: 35, marginRight: 5, color: "#000", fontSize: 35 }} alt='logo' /> Trello
                        </IconButton>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <Link to='/' onClick={() => {props.fullAccessSet(false); props.setUserLogin(false); props.setUserRegister(true);}} className={classes.linkdesign}>Home</Link>
                            </Badge>
                        </IconButton>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <Link to='/HOME' className={classes.linkdesign} onClick={() => props.setUserLogin(true)}> Template </Link>
                            </Badge>
                        </IconButton>
                        {props.state.userProfile.profileAccess === false ? <IconButton color="inherit" >
                            <Badge color="secondary">
                                <Link to='/REGISTRATION' className={classes.signuplinkdesign} 
                                     onClick={() => {
                                        props.setUserRegister(true);
                                        props.setUserLogin(false);
                                    }}>
                                Sign Up</Link>
                            </Badge>
                        </IconButton> : <IconButton color="inherit" >
                            <Badge color="secondary">
                                <Link to='/PROFILE' className={classes.linkdesign}
                                        onClick={() => {
                                            props.setProfile(
                                                props.state.ApiData.trelloID,
                                                props.state.ApiData.token
                                            );
                                            props.dispProfile(true);
                                            handleMenuClose();
                                        }}
                                    >
                                        profile
                                
                                </Link>
                            </Badge>
                        </IconButton>}
                        {props.state.ApiData.fullAccess === true ? <IconButton color="inherit" >
                            <Badge color="secondary">
                                <Link to='/' className={classes.linkdesign} 
                                        variant="contained"
                                        color="primary"
                                        onClick={() => props.setUserLogout(
                                            props.state.LoginReducer.user_email,
                                            props.state.ApiData.trelloID,
                                            props.state.ApiData.token,
                                            props.state.CreateTemplates.tempList
                                        )}
                                    >
                                        Logout
                                </Link>
                            </Badge>
                        </IconButton> : <IconButton color="inherit">
                            <Badge color="secondary">
                                <Link to='/LOGIN' className={classes.linkdesign}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => {
                                            props.setUserLogin(true);
                                            props.setUserRegister(false);
                                        }}
                                    >
                                        Sign in
                        
                                </Link>
                            </Badge>
                        </IconButton>}
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>}
            {renderMobileMenu}
        </div>
    )
}

export default AppBarComponent;