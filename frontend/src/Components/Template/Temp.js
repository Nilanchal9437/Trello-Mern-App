import React from 'react';
import { Icon, Hidden, MenuItem, Menu, Button, Grid, GridList, Card, Paper, CardActions, GridListTile, Box, Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography, CardContent } from '@material-ui/core';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import '../../Style/Animation.css';
import '../../Style/style.css';
import { Redirect } from 'react-router-dom';


let classKey = '';
let ColorKey = '';


class CreateNewTemplate extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main: { flexGrow: 1, paddingTop: 80 },
            root: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', overflow: 'hidden' },
            gridList: { height: 230 },
            createbutton: { height: 95 },
            grid: { paddingLeft: 10, paddingRight: 10 },
            avtar: { backgroundColor: "orange", color: '#fff', textTransform: 'capitalize' },
            invisible: { height: 110, boxShadow: 'unset', width: 210 },
            recentList: { flexWrap: 'nowrap', transform: 'translateZ(0)' }
        }
    }
    componentDidMount() {
        this.props.localAccess(localStorage.getItem('token'));
        this.props.dispTemp(false);
        this.props.showApp(true);
        this.props.templateClose(false);
        this.props.cardClose(false);
        this.props.cardUpdateClose(false);
    }

    render() {
        if (this.props.store.ApiData.fullAccess === false) {
            return (
                <Redirect to='/LOGIN' />
            )
        } else if (this.props.store.CreateTemplates.displayTemplate === true) {
            return (
                <Redirect to='/LISTITEMS' />
            )
        } else {
            return (
                <div style={this.state.main}>
                    <Grid container justify="center" alignItems="center" >
                        <Grid item sm={2} md={4} xl={4} xs={12} style={this.state.grid} >
                            <Box mx={4} >
                                <Paper elevation={0}>
                                    <Hidden smDown>
                                        <List>
                                            <ListItem button>
                                                <ListItemAvatar>
                                                    <Avatar style={this.state.avtar}>
                                                        {this.props.store.LoginReducer.user_name[0]}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText primary="Personal Information" secondary={this.props.store.LoginReducer.user_name} />
                                            </ListItem>
                                            <Divider variant='fullWidth' />
                                        </List>
                                    </Hidden>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item sm={12} md={6} xl={6} xs={12} style={this.state.grid} >
                            <Paper elevation={0} >
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Icon>crop_original</Icon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Your work space board" />
                                    </ListItem>
                                    <Divider variant='fullWidth' />
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item md={2} xl={2} xs={12} style={this.state.grid} ></Grid>
                        <Grid item sm={2} md={4} xl={4} xs={12} style={this.state.grid} >
                            <Paper elevation={0} >
                                <Hidden smDown>
                                    <Box mx={4} >
                                        <Card style={this.state.root}>
                                            <GridList cellHeight={70} style={this.state.gridList} cols={1} >
                                                <GridListTile key={'one'} >
                                                    <CardActions>
                                                        <ListItem button>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <Icon>person</Icon>
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Profile" secondary={this.props.store.LoginReducer.user_name} />
                                                        </ListItem>
                                                    </CardActions>
                                                </GridListTile>
                                                <GridListTile key={'two'} >
                                                    <Divider />
                                                    <CardActions>
                                                        <ListItem button>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <Icon>crop_original</Icon>
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Clear Recent" secondary="clear your recent space" />
                                                        </ListItem>
                                                    </CardActions>
                                                </GridListTile>
                                                <GridListTile key={'three'} >
                                                    <Divider />
                                                    <CardActions>
                                                        <ListItem button onClick={() => { this.props.templateOpen(true); this.props.indexCardID(0) }}>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <Icon>add</Icon>
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Create new board" />
                                                        </ListItem>
                                                    </CardActions>
                                                </GridListTile>
                                                <GridListTile key={'four'} >
                                                    <Divider />
                                                    <CardActions>
                                                        <ListItem button>
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <Icon>admin_panel_settings</Icon>
                                                                </Avatar>
                                                            </ListItemAvatar>
                                                            <ListItemText primary="Privacy setting" secondary={this.props.store.LoginReducer.user_email} />
                                                        </ListItem>
                                                    </CardActions>
                                                    <Divider />
                                                </GridListTile>
                                            </GridList>
                                        </Card>
                                    </Box>
                                </Hidden>
                            </Paper>
                        </Grid>
                        <Grid item sm={12} md={6} xl={6} xs={12} style={this.state.root} >
                            <GridList cellHeight={111} style={this.state.gridList} id="my-grid" cols={3}>
                                {this.props.store.CreateTemplates.tempList.map((temp, index) => {
                                    if (temp.ID === 1) {
                                        classKey = "btn-data";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 2) {
                                        classKey = "btn-second";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 3) {
                                        classKey = "fog-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 4) {
                                        classKey = "ship-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 5) {
                                        classKey = "desert-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 6) {
                                        classKey = "lamp-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 7) {
                                        classKey = "ocen-btn-design";
                                        ColorKey = '#fff';
                                    } else {
                                        classKey = "default-btn";
                                        ColorKey = '#000';
                                    }
                                    return (
                                        <GridListTile key={index} >
                                            <Card className={classKey} id='my-card'  >
                                                <CardActions style={{ float: 'right' }}>
                                                    <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"} >
                                                        {(popupState) => (
                                                            <React.Fragment>
                                                                <Button style={{ color: ColorKey }} variant="text" margin='dense' size='small' {...bindTrigger(popupState)}>
                                                                    ...
                                                                </Button>
                                                                <Menu {...bindMenu(popupState)}>
                                                                    <MenuItem onClick={() => {
                                                                        this.props.setTempoList(this.props.store.CreateTemplates.tempList);
                                                                        this.props.indexTemp(index);
                                                                        this.props.templateDelete();
                                                                        this.props.setRestoreData();
                                                                        this.props.updateTrello(
                                                                            this.props.store.LoginReducer.user_email,
                                                                            this.props.store.ApiData.trelloID,
                                                                            this.props.store.ApiData.token,
                                                                            this.props.store.CreateTemplates.tempList);
                                                                        popupState.close();
                                                                        localStorage.setItem("frameIndex", index);
                                                                    }}>
                                                                        DROP
                                                                    </MenuItem>
                                                                </Menu>
                                                            </React.Fragment>
                                                        )}
                                                    </PopupState>
                                                </CardActions>
                                                <CardActions style={{ display: 'block' }}>
                                                    <Button
                                                        fullWidth={true}
                                                        variant="text"
                                                        style={{ color: ColorKey, height: 50 }}
                                                        onClick={() => {
                                                            this.props.dispTemp(true);
                                                            this.props.indexTemp(index);
                                                            this.props.recentSet(true);
                                                            this.props.titleList('');
                                                            this.props.showApp(false);
                                                            this.props.updateTrello(
                                                                this.props.store.LoginReducer.user_email,
                                                                this.props.store.ApiData.trelloID,
                                                                this.props.store.ApiData.token,
                                                                this.props.store.CreateTemplates.tempList);
                                                            localStorage.setItem("frameIndex", index);
                                                            this.props.indexCardID(this.props.store.CreateTemplates.tempList[index].CARD_ID);
                                                        }}
                                                    >
                                                        {temp.TEMPLATE}
                                                    </Button>
                                                </CardActions>
                                                {temp.ID === 0 || temp.ID === 7 ? "" : <Grid>{temp.ID === 2 ? <Grid className='sky-container2'><Grid className={temp.DESIGN[1]}></Grid><Grid className={temp.DESIGN[2]}></Grid><Grid className={temp.DESIGN[3]}></Grid><Grid className={temp.DESIGN[4]}></Grid><Grid className={temp.DESIGN[5]}></Grid></Grid> : <Grid><Grid id={temp.DESIGN[0]}></Grid><Grid id={temp.DESIGN[1]}></Grid><Grid id={temp.DESIGN[2]}></Grid></Grid>}</Grid>}
                                            </Card>
                                        </GridListTile>)
                                })}
                                <GridListTile key={'BoardCreate'} >
                                    <Card id='my-card'>
                                        <CardActions>
                                            <Button style={this.state.createbutton}
                                                fullWidth={true}
                                                variant="text"
                                                onClick={() => {
                                                    this.props.templateOpen(true);
                                                    this.props.indexCardID(0);
                                                }}
                                            >
                                                Create new board
                                                </Button>
                                        </CardActions>
                                    </Card>
                                </GridListTile>
                                <GridListTile key={'invisible'} >
                                    <Card style={this.state.invisible} >
                                        <CardContent>
                                            <Typography style={this.state.createbutton}
                                            >

                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </GridListTile>
                                <GridListTile key={'invisible2'} >
                                    <Card style={this.state.invisible} >
                                        <CardContent>
                                            <Typography style={this.state.createbutton}
                                            >
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </GridListTile>
                            </GridList>
                        </Grid>
                        <Grid item md={2} xl={2} xs={12} style={this.state.grid} ></Grid>
                        <Grid item md={4} xl={4} xs={12} style={this.state.grid}>

                        </Grid>
                        <Grid item sm={12} md={6} xl={6} xs={12} style={this.state.grid}>
                            <Paper elevation={0} >
                                <List>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Icon>crop_original</Icon>
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Your Recent Work" />
                                    </ListItem>
                                    <Divider variant='fullWidth' />
                                </List>
                            </Paper>
                        </Grid>
                        <Grid item md={2} xl={2} xs={12} style={this.state.grid}></Grid>
                        <Grid item md={4} xl={4} xs={12} style={this.state.grid}></Grid>
                        <Grid item sm={12} md={6} xl={6} xs={12} style={this.state.root}>
                            <GridList cellHeight={111} style={this.state.recentList} cols={3}>
                                {this.props.store.CreateTemplates.tempList.map((temp, index) => {
                                    if (temp.ID === 1) {
                                        classKey = "btn-data";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 2) {
                                        classKey = "btn-second";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 3) {
                                        classKey = "fog-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 4) {
                                        classKey = "ship-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 5) {
                                        classKey = "desert-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 6) {
                                        classKey = "lamp-btn-design";
                                        ColorKey = '#fff';
                                    } else if (temp.ID === 7) {
                                        classKey = "ocen-btn-design";
                                        ColorKey = '#fff';
                                    } else {
                                        classKey = "default-btn";
                                        ColorKey = '#000';
                                    }
                                    if (temp.RECENT === true) {
                                        return (
                                            <GridListTile key={index} >
                                                <Card className={classKey} id='my-card'>
                                                    <CardActions style={{ float: 'right' }}>
                                                        <PopupState variant="popover" popupId={"demo-popup-popover" + index + "1"} >
                                                            {(popupState) => (
                                                                <React.Fragment>
                                                                    <Button style={{ color: ColorKey }} variant="text" margin='dense' size='small' {...bindTrigger(popupState)}>
                                                                        ...
                                                                    </Button>
                                                                    <Menu {...bindMenu(popupState)}>
                                                                        <MenuItem onClick={() => {
                                                                            this.props.indexTemp(index);
                                                                            this.props.recentItemRemove(false);
                                                                            this.props.updateTrello(
                                                                                this.props.store.LoginReducer.user_email,
                                                                                this.props.store.ApiData.trelloID,
                                                                                this.props.store.ApiData.token,
                                                                                this.props.store.CreateTemplates.tempList);
                                                                            localStorage.removeItem("frameIndex", index);
                                                                        }}>
                                                                            Remove
                                                                            </MenuItem>
                                                                    </Menu>
                                                                </React.Fragment>
                                                            )}
                                                        </PopupState>
                                                    </CardActions>
                                                    <CardActions style={{ display: 'block' }}>
                                                        <Button
                                                            fullWidth={true}
                                                            variant="text"
                                                            style={{ color: ColorKey, height: 50 }}
                                                            onClick={() => {
                                                                this.props.dispTemp(true);
                                                                this.props.indexTemp(index);
                                                                this.props.titleList('');
                                                                this.props.showApp(false);
                                                                localStorage.setItem("frameIndex", index);
                                                                this.props.indexCardID(this.props.store.CreateTemplates.tempList[index].CARD_ID);
                                                            }}
                                                        >
                                                            {temp.TEMPLATE}
                                                        </Button>
                                                    </CardActions>
                                                    {temp.ID === 0 || temp.ID === 7 ? "" : <Grid>{temp.ID === 2 ? <Grid className='sky-container2'><Grid className={temp.DESIGN[1]}></Grid><Grid className={temp.DESIGN[2]}></Grid><Grid className={temp.DESIGN[3]}></Grid><Grid className={temp.DESIGN[4]}></Grid><Grid className={temp.DESIGN[5]}></Grid></Grid> : <Grid><Grid id={temp.DESIGN[0]}></Grid><Grid id={temp.DESIGN[1]}></Grid><Grid id={temp.DESIGN[2]}></Grid></Grid>}</Grid>}
                                                </Card>
                                            </GridListTile>
                                        )
                                    }
                                    else {
                                        return (false)
                                    }
                                })}
                                <GridListTile key={'BoardCreate'} >
                                    <Card style={this.state.invisible} >
                                        <CardContent>
                                            <Typography style={this.state.createbutton}
                                            >

                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </GridListTile>
                                <GridListTile key={'invisible'} >
                                    <Card style={this.state.invisible} >
                                        <CardContent>
                                            <Typography style={this.state.createbutton}
                                            >

                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </GridListTile>
                                <GridListTile key={'invisible2'} >
                                    <Card style={this.state.invisible} >
                                        <CardContent>
                                            <Typography style={this.state.createbutton}
                                            >
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </GridListTile>
                            </GridList>
                        </Grid>
                        <Grid item md={2} xl={2} xs={12} style={this.state.grid}></Grid>
                    </Grid>
                </div>

            )
        }
    }
}

export default CreateNewTemplate;