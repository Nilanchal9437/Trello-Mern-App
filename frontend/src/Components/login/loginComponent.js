import { Grid, Paper, InputLabel, Input, FormHelperText, Button, FormControl, FormGroup, Hidden } from "@material-ui/core";
import './login.css';
import Login from '../../Images/login.png';
import { Link, Redirect } from "react-router-dom";
import React from 'react';


export default function LoginComp(props) {
    if (props.state.ApiData.fullAccess === true) {
        return (
            <Redirect to='/HOME' />
        )
    }
    else if (props.state.ApiData.loginAccess === false) {
        return (
            <Redirect to='/' />
        )
    }
    else {
        return (
            <div id='login-main-form'>
                <Grid container justify='center' id="login-sub-form">
                    <Grid container item xs={12} sm={8} justify='center'>
                        <Grid item xs={11} sm={11} md={5} xl={5}>
                            <Paper id="paper-design" style={{ borderRadius: 'unset' }} elevation={0} >
                                <FormGroup id='login-input-design' >
                                    <FormControl>
                                        <FormHelperText id='login-hedding' >
                                            Login
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-email">Email address</InputLabel>
                                        <Input
                                            id="my-email"
                                            fullWidth={true}
                                            type='email'
                                            value={props.state.ApiData.user_login_email}
                                            onChange={(event) => props.setEmail(event.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="my-password">Password</InputLabel>
                                        <Input
                                            id="my-password"
                                            fullWidth={true}
                                            type='password'
                                            value={props.state.ApiData.user_login_password}
                                            onChange={(event) => props.setPass(event.target.value)}
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <FormHelperText style={{ 
                                            textAlign: 'center',
                                            fontSize: 15,
                                            paddingTop: 10
                                        }}>
                                            <Link to='/REGISTRATION' onClick={() => {
                                                props.setUserRegister(true);
                                                props.setUserLoginAccess(false);
                                            }} >
                                                to registration
                                            </Link>
                                        </FormHelperText>
                                    </FormControl>
                                    <FormControl>
                                        <Button
                                            variant='contained'
                                            color='primary'
                                            onClick={() => props.setUserLogin(
                                                props.state.ApiData.user_login_email,
                                                props.state.ApiData.user_login_password
                                            )}
                                        >
                                            Login
                                        </Button>
                                    </FormControl>
                                </FormGroup>
                            </Paper>
                        </Grid>
                        <Grid item xs={11} sm={4} md={7} xl={7}>
                            <Hidden smDown>
                                <Paper id="paper-design" style={{ borderRadius: 'unset' }} elevation={0}>
                                    <img src={Login} alt='login' />
                                </Paper>
                            </Hidden>                            
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

