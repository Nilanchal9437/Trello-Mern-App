import { Card, Menu, MenuItem, CardContent, TextField, Button, Typography, Grid, CardHeader, CardActions, Paper, Hidden } from '@material-ui/core';
import React from 'react';
import '../../Style/Animation.css';
import '../../Style/style.css';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import CreateIcon from '@material-ui/icons/Create';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Redirect } from 'react-router';
import HomeIcon from '@material-ui/icons/Home';
import trello_logo from '../../Images/trello-logo.png';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';


let data = '';
let classKey = '';
let backColorKey = '';
let CreateListKey = '';
let fontKey = '';

export default class CreateList extends React.Component {
    componentDidMount() {
        this.props.localAccess(localStorage.getItem('token'));
        this.props.indexTemp(parseInt(localStorage.getItem('frameIndex')));
        this.props.dispTemp(true);
        this.props.fullAccessSet(false);
        this.props.hideApp(false);
        this.props.templateClose(false);
        this.props.cardClose(false);
        this.props.cardUpdateClose(false);
    }

    handelDragEnd = (result) => {
        if (!result.destination) return;
        this.props.dragList(parseInt(result.source.droppableId));
        this.props.dropList(parseInt(result.destination.droppableId));
        this.props.dragCard(result.source.index);
        this.props.dropCard(result.destination.index);
        this.props.setTempoList(this.props.store.CreateTemplates.tempList);
        this.props.dndRestore();
        this.props.setRestoreData();
        this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList)
    }

    render() {
        if (this.props.store.CreateTemplates.displayTemplate === false) {
            return (
                <Redirect to='/HOME'></Redirect>
            )
        } else {
            data = this.props.store.CreateTemplates.tempList[this.props.store.CreateTemplates.frameIndex];
            if (data.ID === 1) { classKey = "main1"; backColorKey = "#f0f8ff38"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 2) { classKey = "main2"; backColorKey = "#f0f8ff38"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 3) { classKey = "fog"; backColorKey = "#7b7f828c"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 4) { classKey = "ship"; backColorKey = "#f0f8ff38"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 5) { classKey = "Desert"; backColorKey = "#f0f8ff38"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 6) { classKey = "Lamp"; backColorKey = "#7b7f828c"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else if (data.ID === 7) { classKey = "Ocen"; backColorKey = "#7b7f828c"; CreateListKey = "#fbfbfbd4"; fontKey = "#fff"; }
            else { classKey = "main0"; backColorKey = "#7b7f828c"; CreateListKey = "#7b7f828c"; fontKey = "#fff"; }
            return (
                <Grid container id={classKey} disabled={this.props.store.CreateTemplates.listTitle === '' ? true : false} onDoubleClickCapture={() => { this.props.updateListAccess(false); this.props.titleList(''); }}>
                    <Grid container item className='grid-hedding'>
                        <Grid item xs={2} sm={1} md={1} xl={2}><Paper style={{ margin: 3, backgroundColor: backColorKey, borderRadius: 3, textAlign: 'center' }} ><Button onClick={() => { this.props.hideApp(true); this.props.dispTemp(false) }} fullWidth={true}><HomeIcon style={{ color: fontKey, fontSize: 25 }} /></Button></Paper></Grid>
                        <Grid item xs={8} sm={10} md={10} xl={8}><Paper style={{ margin: 3, fontSize: 32, color: fontKey, backgroundColor: backColorKey, borderRadius: 3, textAlign: 'center' }}><img src={trello_logo} alt='trello' style={{ width: 20, fontSize: 35 }} /> Trello </Paper></Grid>
                        <Grid item xs={2} sm={1} md={1} xl={2}><Paper style={{ margin: 3, backgroundColor: backColorKey, borderRadius: 3, textAlign: 'center' }}><Button onClick={() => this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList)} style={{ color: fontKey }} fullWidth={true}><PresentToAllIcon /></Button></Paper></Grid>
                        <Grid item xs={6} sm={6} md={6} xl={6}><Hidden smDown><Paper style={{ margin: 3, borderRadius: 3, backgroundColor: backColorKey, color: fontKey, padding: 4 }}><Typography>TEMPLATE NAME :  {data.TEMPLATE}</Typography></Paper></Hidden></Grid>
                        <Grid item xs={6} sm={6} md={6} xl={6}><Hidden smDown><Paper style={{ margin: 3, borderRadius: 3, backgroundColor: backColorKey, color: fontKey, padding: 4 }}><Typography>USER :  {this.props.store.LoginReducer.user_name}</Typography></Paper></Hidden></Grid>
                    </Grid>
                    <Grid container item className='title'>
                        <DragDropContext onDragEnd={this.handelDragEnd} >
                            <Grid style={{ display: 'flex' }} >
                                {data.LIST.map((temp3, index3) => (
                                    <Grid key={index3}>
                                        <Droppable droppableId={'' + (index3) + ''}>
                                            {(Provided) => (
                                                <Card {...Provided.droppableProps} ref={Provided.innerRef} style={{ width: 280, height: 'fit-content', margin: 3, backgroundColor: CreateListKey }}>
                                                    <CardContent style={{ display: 'flex', margin: 0 }} >
                                                        {this.props.store.CreateTemplates.listUpdateAccess === true && this.props.store.CreateTemplates.ListIndex === index3 ? <TextField style={{ float: 'left', backgroundColor: fontKey }} value={this.props.store.CreateTemplates.listTitle} onChange={(event) => { this.props.titleList(event.target.value); this.props.setTempoList(this.props.store.CreateTemplates.tempList); this.props.listUpdate(); this.props.setRestoreData(); }} variant='outlined' size="small" margin='dense' ></TextField> : <Button style={{ float: 'left', textTransform: 'none' }} onClick={() => { this.props.updateListAccess(true); this.props.titleList(temp3.LISTNAME); this.props.indexList(index3) }} fullWidth={true} >{temp3.LISTNAME}</Button>}<Typography style={{ float: 'right' }}><PopupState variant="popover" popupId={"demo-popup-popover" + index3 + "" + this.props.store.CreateTemplates.frameIndex}>{(popupState) => (<React.Fragment><Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}>...</Button><Menu {...bindMenu(popupState)}><MenuItem onClick={() => { this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList); this.props.setTempoList(this.props.store.CreateTemplates.tempList); this.props.indexList(index3); this.props.listDelete(); this.props.setRestoreData(); popupState.close() }}>drop</MenuItem><MenuItem onClick={() => { this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList); this.props.updateListAccess(true); this.props.titleList(temp3.LISTNAME); this.props.indexList(index3); popupState.close() }}>edit</MenuItem></Menu></React.Fragment>)}</PopupState></Typography>
                                                    </CardContent>
                                                    <CardContent id='card-list-item' onClick={() => { this.props.updateListAccess(false); this.props.titleList(''); }} >
                                                        {data.LIST[index3].CARDITEMS.map((temp4, index4) => (
                                                            <Draggable key={temp4.CARDID} draggableId={temp4.CARDID} index={index4}>
                                                                {(provided) => (
                                                                    <Card id="Card-full-design" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                                        <CardHeader id='card-header-design' style={{ backgroundColor: temp4.CARDCOLOR }} subheader={temp4.CARDTITLE} action={<PopupState variant="popover" popupId={"demo-popup-popover" + index4 + "" + index3 + "" + this.props.store.CreateTemplates.frameIndex} >{(popupState) => (<React.Fragment><Button variant="text" margin='dense' size='small' style={{ float: 'right', color: '#000' }} {...bindTrigger(popupState)}><CreateIcon style={{ fontSize: 15, paddingTop: 8, paddingLeft: 15, color: '#0d0d0d' }} /></Button><Menu {...bindMenu(popupState)} ><MenuItem onClick={() => { this.props.setTempoList(this.props.store.CreateTemplates.tempList); this.props.indexList(index3); this.props.cardItemDeleteIndex(index4); this.props.cardDelete(); this.props.setRestoreData(); this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList); popupState.close() }}>drop</MenuItem><MenuItem onClick={() => { this.props.cardItemDeleteIndex(index4); this.props.indexList(index3); this.props.setTempoList(this.props.store.CreateTemplates.tempList); this.props.titleCard(temp4.CARDTITLE); this.props.bodyCard(temp4.CARDBODY); this.props.colorCard(temp4.CARDCOLOR); this.props.imageCard(temp4.CARDIMAGE); this.props.cardUpdateOpen(true); this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList); popupState.close() }} >edit</MenuItem></Menu></React.Fragment>)}</PopupState>} />
                                                                        {temp4.CARDIMAGE === '' ? "" : <CardActions id="card-body-design">{temp4.CARDIMAGE === 'Office' && <CardContent id='card-img1' style={{ height: 40, width: 225 }}></CardContent>}{temp4.CARDIMAGE === 'Work' && <CardContent id='card-img2' style={{ height: 40, width: 225 }}></CardContent>}</CardActions>}
                                                                        {temp4.CARDBODY === '' ? "" : <CardContent id='design-card'>{temp4.CARDBODY}</CardContent>}
                                                                    </Card>
                                                                )}
                                                            </Draggable>
                                                        ))}
                                                        {Provided.placeholder}
                                                    </CardContent>
                                                    <CardActions>
                                                        <Button variant='text' margin='dense' color='primary' size='small' fullWidth={true} onClick={() => { this.props.cardOpen(true); this.props.indexList(index3); this.props.updateListAccess(false); this.props.cardUpdateOpen(false); this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList); }}><ControlPointIcon /></Button>
                                                    </CardActions>
                                                </Card>
                                            )}
                                        </Droppable>
                                    </Grid>
                                ))}

                                <Card style={{ display: 'flex', width: 280, height: 50, margin: 3, backgroundColor: CreateListKey, }} >
                                    <TextField
                                        variant="outlined"
                                        margin="dense"
                                        style={{ marginTop: 5, marginLeft: 5, marginBottom: 5 }}
                                        label="Enter List title"
                                        value={this.props.store.CreateTemplates.listTitle}
                                        onChange={(event) => this.props.titleList(event.target.value)}
                                    />
                                    <Button
                                        variant='text'
                                        margin='dense'
                                        color='primary'
                                        size='small'
                                        disabled={this.props.store.CreateTemplates.listTitle === '' ? true : false}
                                        style={{ marginTop: 5, marginRight: 5, marginBottom: 5 }}
                                        onClick={() => { this.props.listCreate(); this.props.updateTrello(this.props.store.LoginReducer.user_email, this.props.store.ApiData.trelloID, this.props.store.ApiData.token, this.props.store.CreateTemplates.tempList) }}
                                    ><ControlPointIcon fontSize='large' /></Button>
                                </Card>
                            </Grid>
                        </DragDropContext>
                    </Grid>
                    {data.ID === 0 ? "" : <Grid>{data.ID === 2 ? <Grid><Grid className={data.DESIGN[1]}></Grid><Grid className={data.DESIGN[2]}></Grid><Grid className={data.DESIGN[3]}></Grid><Grid className={data.DESIGN[4]}></Grid><Grid className={data.DESIGN[5]}></Grid></Grid> : <Grid><Grid id={data.DESIGN[0]}></Grid><Grid id={data.DESIGN[1]}></Grid><Grid id={data.DESIGN[2]}></Grid></Grid>}</Grid>}
                </Grid>
            )
        }
    }
}