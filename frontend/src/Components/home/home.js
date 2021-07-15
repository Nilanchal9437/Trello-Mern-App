import { Box, Button, Grid, Hidden, Paper, Typography } from "@material-ui/core";
import hero from '../../Images/hero.png';
import './home.css';
import board from '../../Images/board.png';
import sub1 from '../../Images/view.svg';
import sub2 from '../../Images/card-back.svg';
import sub3 from '../../Images/automation.png'
import sub4 from '../../Images/power-ups.png';
import google from '../../Images/google.svg';
import apple from '../../Images/apple.svg';
import { Redirect } from "react-router-dom";
import React from "react";

class homePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            subhedding_one: { fontSize: 22, color: 'darkslategrey' },
            hedding_One: { fontSize: 40, color: 'darkslategrey', fontFamily: "ui-monospace" },
            footer: { fontSize: 25, fontWeight: 400, fontFamily: " 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif " }
        }
    }

    componentDidMount = () => {
        this.props.showApp(true);
    }
    render() {
        if (this.props.store.CreateTemplates.displayTemplate === true) {
            return (
                <Redirect to='/LISTITEMS' />
            )
        } else if (this.props.store.ApiData.fullAccess === true) {
            return (
                <Redirect to='/HOME' />
            )
        } else if (this.props.store.ApiData.loginAccess === true) {
            return (
                <Redirect to='/LOGIN' />
            )
        } else {
            return (
                <Grid container justify="center" id="home-bg" >
                    <Grid item xs={12} sm={12} md={7} xl={7} id="grid-Color">
                        <Box mx="auto" my={20} id="grid-one" >
                            <Box mx={5} my={2}>
                                <Typography style={this.state.hedding_One}>
                                    Trello helps teams move work forward.
                                    </Typography>
                            </Box>
                            <Box mx={5} my={2}>
                                <Typography style={this.state.subhedding_one}>
                                    Collaborate, manage projects, and reach new productivity peaks.
                                    From high rises to the home office, the way your team works is
                                    unique accomplish it all with Trello.
                                    </Typography>
                            </Box>
                            <Box mx={5} my={2}>
                                <Button variant='contained'
                                    size='large'
                                    color='primary'
                                    onClick={() => this.props.setUserLogin(true)}
                                >
                                    Start
                                    </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} xl={5} id="grid-Color">
                        <Box mx="auto" mt={3} >
                            <Hidden smDown>
                                <img src={hero} alt='hero' />
                            </Hidden>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} xl={10}>
                        <Box my={4}>
                            <Box mx="auto" my={2} px={4} align="center">
                                <Typography style={this.state.hedding_One} >
                                    It’s more than work. It’s a way of working together.
                                    </Typography>
                            </Box>
                            <Box mx="auto" my={2} px={2}>
                                <Hidden smDown>
                                    <Typography style={this.state.subhedding_one} >
                                        Start with a Trello board, lists, and cards.
                                        Customize and expand with more features as
                                        your teamwork grows. Manage projects, organize
                                        tasks, and build team spirit all in one place.
                                        </Typography>
                                </Hidden>
                            </Box>
                            <Box mx="auto" my={2} align="center">
                                <Button variant='outlined' color='primary' size='large' onClick={() => this.props.setUserLogin(true)} >
                                    Start doing
                                    </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} xl={10}>
                        <Box mx="auto">
                            <Box mx="auto" px={4}>
                                <img src={board} alt='board' />
                            </Box>
                            <Box mx="auto" px={4} align="center">
                                <Typography style={this.state.subhedding_one}>
                                    Join over 1,000,000 teams worldwide that are using Trello to get more done.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={10} xl={10}>
                        <Box mx="auto" my={4}>
                            <Box mx="auto" my={2} px={2} align="center">
                                <Typography style={this.state.hedding_One} >
                                    Features to help your team succeed
                                    </Typography>
                            </Box>
                            <Box mx="auto" px={2} my={2}>
                                <Typography style={this.state.subhedding_one} >
                                    Powering a productive team means using a powerful tool
                                    (and plenty of snacks). From meetings and projects to
                                    events and goal setting, Trello’s intuitive features
                                    give any team the ability to quickly set up and customize
                                    workflows for just about anything.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} xl={5}>
                        <Box mx={2} my={2} px={3}>
                            <img src={sub1} alt='hedding' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} xl={7}>
                        <Box mx={2} my={2}>
                            <Box mx="auto" my={2} px={3} pb={2}>
                                <Typography style={this.state.hedding_One}>
                                    The board is just the beginning
                                    </Typography>
                            </Box>
                            <Box mx="auto" my={2} px={3}>
                                <Typography style={this.state.subhedding_one}>
                                    Lists and cards are the building blocks of organizing
                                    work on a Trello board. Grow from there with task
                                    assignments, timelines, productivity metrics, calendars,
                                    and more.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} xl={7}>
                        <Box mx={2} my={2}>
                            <Box mx="auto" my={2} px={3} pb={2}>
                                <Typography style={this.state.hedding_One}>
                                    Cards contain everything you need
                                    </Typography>
                            </Box>
                            <Box mx="auto" my={2} px={3}>
                                <Typography style={this.state.subhedding_one} >
                                    Trello cards are your portal to more organized work—where
                                    every single part of your task can be managed, tracked,
                                    and shared with teammates. Open any card to uncover an
                                    ecosystem of checklists, due dates, attachments, conversations,
                                    and more.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} xl={5}>
                        <Box mx={2} my={2} px={3}>
                            <img src={sub2} alt='hedding' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} xl={5}>
                        <Box mx={2} my={2} px={3}>
                            <img src={sub3} alt='hedding' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} xl={7}>
                        <Box mx={2} my={2}>
                            <Box my={2} px={3} pb={2}>
                                <Typography style={this.state.hedding_One}>
                                    No-code automation
                                    </Typography>
                            </Box>
                            <Box my={2} px={3}>
                                <Typography style={this.state.subhedding_one}>
                                    Let the robots do the work—so your team can focus on work
                                    that matters. With Trello’s built-in automation, Butler,
                                    reduce the number of tedious tasks (and clicks) on your
                                    project board by harnessing the power of automation across
                                    your entire team.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} xl={7}>
                        <Box mx={2} my={2}>
                            <Box my={2} px={3} pb={3}>
                                <Typography style={this.state.hedding_One} >
                                    Integrate top work tools
                                    </Typography >
                            </Box>
                            <Box my={2} px={3}>
                                <Typography style={this.state.subhedding_one}>
                                    Easily connect the apps your team already uses into your Trello
                                    workflow, or add a Power-Up that helps fine-tune one specific need.
                                    With hundreds of Power-Ups available, your team’s workflow wishes are
                                    covered.
                                    </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} xl={5}>
                        <Box mx={2} my={2}>
                            <img src={sub4} alt='hedding' />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12} id="grid-Footer">
                        <Box mx="auto" my={3} align="center" >
                            <Box my={1} px={1}>
                                <Typography style={this.state.footer}>
                                    Trello also works great on your smaller screen
                                    </Typography>
                            </Box>
                            <Box mx="auto" my={1} align="center">
                                <img src={google} alt='logo-google' />
                                <img src={apple} alt='logo-apple' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <Box id='trello-footer' >
                            <Typography>
                                NULLTREE
                                </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} xl={12}>
                        <Paper elevation={0} id='footer-text' >
                            <Typography>
                                © Copyright 2021. All rights reserved.
                                </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            )
        }
    }
}
export default homePage;