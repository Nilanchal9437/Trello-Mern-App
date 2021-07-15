import { Dialog, DialogContent, Paper, Grid, Input, TextField, Button, FormGroup, FormControl, FormHelperText, InputLabel, Hidden } from '@material-ui/core';
import './registration.css';
import registration_img from '../../Images/Registration.jpg'
import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

export default function RegisterComp(props) {
    if (props.state.ApiData.loginAccess === true) {
        return (
            <Redirect to='/LOGIN' />
        )
    }
    else if (props.state.ApiData.registrationAccess === false) {
        return (
            <Redirect to='/' />
        )
    }
    else {
        return (
            <Grid container justify="center" alignContent="center" >
                <Dialog
                    fullWidth={true}
                    maxWidth={'md'}
                    open={props.state.ApiData.registrationAccess}
                    id='main-form'
                    scroll='body'
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogContent dividers={true}>
                        <Grid container item xs={12} sm={12} md={12} xl={12} justify="center">
                            <Grid item xs={12} sm={6} md={6} xl={6}>
                                <Hidden xsDown>
                                    <Paper id='paper-design'>
                                        <img src={registration_img} alt='registarion' />
                                    </Paper>
                                </Hidden>
                            </Grid>
                            <Grid item xs={12} sm={6} md={6} xl={6} >
                                <Paper id='paper-design'>
                                    <FormGroup id='input-design'>
                                        <FormControl>
                                            <FormHelperText id='form-hedding'>
                                                Registration
                                                    </FormHelperText>
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor='name' >Enter your name</InputLabel>
                                            <Input
                                                id="name"
                                                fullWidth={true}
                                                value={props.state.ApiData.user_name}
                                                onChange={(event) => props.setName(event.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor='email' >Enter your email</InputLabel>
                                            <Input
                                                id="email"
                                                fullWidth={true}
                                                value={props.state.ApiData.user_email}
                                                onChange={(event) => props.setEmail(event.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <select value={props.state.ApiData.user_gender} onChange={(event) => props.setGender(event.target.value)}>
                                                <option value="">Select your gender</option>
                                                <option value={'Male'}>Male</option>
                                                <option value={'Female'}>Female</option>
                                                <option value={'Other'}>Other</option>
                                            </select>
                                        </FormControl>
                                        <FormControl>
                                            <TextField
                                                id="dob"
                                                label='Enter your DOB'
                                                type='date'
                                                fullWidth={true}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                value={props.state.ApiData.user_dob}
                                                onChange={(event) => props.setDob(event.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor='phone' >Enter your Phone no</InputLabel>
                                            <Input
                                                id="phone"
                                                fullWidth={true}
                                                type='number'
                                                value={props.state.ApiData.user_phone}
                                                onChange={(event) => props.setPhone(event.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <InputLabel htmlFor='password' >Enter your passwaord</InputLabel>
                                            <Input
                                                id="password"
                                                fullWidth={true}
                                                type='password'
                                                value={props.state.ApiData.user_pass}
                                                onChange={(event) => props.setPass(event.target.value)}
                                            />
                                        </FormControl>
                                        <FormControl style={{display:'inline', paddingTop: 10, paddingBottom: 4 }} >
                                            <Link to='/'
                                                onClick={() => {
                                                    props.setRegistrationAccess(false);
                                                }}
                                            > Home </Link>
                                            <Link to='/LOGIN'
                                                onClick={() => {
                                                    props.setUserLogin(true);
                                                    props.setRegistrationAccess(false);
                                                }}
                                            > Login </Link>
                                        </FormControl>
                                        <FormControl >
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                fullWidth
                                                onClick={() => {
                                                    props.setUserRegister(
                                                        props.state.ApiData.user_name,
                                                        props.state.ApiData.user_email,
                                                        props.state.ApiData.user_gender,
                                                        props.state.ApiData.user_dob,
                                                        props.state.ApiData.user_phone,
                                                        props.state.ApiData.user_pass
                                                    );
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </FormControl>
                                    </FormGroup>
                                </Paper>
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </Grid>
        )
    }
}