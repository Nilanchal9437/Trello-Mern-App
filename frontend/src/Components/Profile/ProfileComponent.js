import React from 'react';
import ProfileImage from '../../Images/profile.png'
import '../registration/registration.css';
import { Paper, Grid, TextField, Typography, Button } from '@material-ui/core';
import { Redirect } from 'react-router';

const UserProfile = (props) => {
    if (props.state.userProfile.profileAccess === false) {
        return (
            <Redirect to='/LOGIN' />
        )
    }
    else if (props.state.userProfile.profileDisplay === false) {
        return (
            <Redirect to='/HOME' />
        )
    }
    else {
        return (
            <div id='main-form'>
                <Grid container justify="center" id='sub-form'>
                    <Grid container item xs={12} sm={8}>
                        <Grid item xs={12} sm={7}>
                            <Paper id='paper-design' style={{ borderBottomRightRadius: 'unset' }}>
                                <img src={ProfileImage} alt='profile' />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Paper id='paper-design' style={{ borderTopLeftRadius: 'unset', borderBottomLeftRadius: 'unset' }}>
                                <Typography id='form-hedding'>
                                    Profile
                                </Typography>
                                <Typography id='input-design'>
                                    <TextField
                                        type='text'
                                        label="Your name"
                                        margin='dense'
                                        size='small'
                                        variant='standard'
                                        value={props.state.userProfile.name}
                                        onChange={(event) => props.setName(event.target.value)}
                                        fullWidth
                                    />
                                </Typography>
                                <Typography id='input-design'>
                                    <TextField
                                        type='email'
                                        label="Your email"
                                        margin='dense'
                                        size='small'
                                        variant='standard'
                                        value={props.state.userProfile.email}
                                        onChange={(event) => props.setEmail(event.target.value)}
                                        fullWidth
                                    />
                                </Typography>
                                <Typography id='input-design' >


                                    <select
                                        value={props.state.userProfile.gender}
                                        onChange={(event) => props.setGender(event.target.value)}

                                    >
                                        <option value="">
                                            Your gender
                                        </option>
                                        <option value={'Male'}>Male</option>
                                        <option value={'Female'}>Female</option>
                                        <option value={'Other'}>Other</option>
                                    </select>

                                </Typography>
                                <Typography id='input-design'>
                                    <TextField
                                        id='date'
                                        type='date'
                                        label='Your Date Of Birth'
                                        margin='dense'
                                        size='small'
                                        variant='standard'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={props.state.userProfile.dob}
                                        onChange={(event) => props.setDob(event.target.value)}
                                        fullWidth
                                    />
                                </Typography>
                                <Typography id='input-design'>
                                    <TextField
                                        label="Your Phone no"
                                        margin='dense'
                                        size='small'
                                        variant='standard'
                                        type='number'
                                        value={props.state.userProfile.phone}
                                        onChange={(event) => props.setPhone(event.target.value)}
                                        fullWidth
                                    />
                                </Typography>
                                <Typography id='input-design' style={{ marginTop: 4, marginBottom: 15 }}>
                                    <Button
                                        variant='contained'
                                        type='submit'
                                        color='primary'
                                        fullWidth
                                        onClick={() => {
                                            props.updateProfile(
                                                props.state.ApiData.trelloID, 
                                                props.state.ApiData.token, 
                                                props.state.userProfile.name, 
                                                props.state.userProfile.email, 
                                                props.state.userProfile.dob, 
                                                props.state.userProfile.gender, 
                                                props.state.userProfile.phone
                                            );

                                        }}
                                    >
                                        UPDATE
                                    </Button>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default UserProfile;