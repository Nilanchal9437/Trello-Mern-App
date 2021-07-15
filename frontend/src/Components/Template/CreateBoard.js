import { TextField, DialogActions, DialogTitle, DialogContent, Dialog, Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import '../../Style/style.css';


export default function CreateBoard(props) {
    if (props.state.DilogBox.tempAccess === false) {
        return (
            <Redirect to='/HOME'></Redirect>
        )
    }
    else {
        return (
            <div>
                <Dialog
                    open={props.state.DilogBox.tempAccess}
                    onClose={() => {
                        props.templateClose(false);
                    }}
                    maxWidth={'sm'}
                >
                    <DialogTitle id="form-dialog-title">CREATE TEMPLATE</DialogTitle>
                    <DialogContent>
                        <TextField
                            variant="standard"
                            label="Enter Template Name"
                            margin="dense"
                            fullWidth={true}
                            value={props.tempName}
                            onChange={(event) => props.setTempTitle(event.target.value)}
                        />                    
                    </DialogContent>
                    <DialogActions>
                        <Button
                            id='btn-style-one'
                            variant="contained"
                            onClick={() => props.setTempDesign(0)}

                        >1</Button>
                        <Button
                            id='btn-style-two'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(1)}
                        >2</Button>
                        <Button
                            id='btn-style-three'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(2)}
                        >3</Button>
                        <Button
                            id='btn-style-four'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(3)}
                        >4</Button>
                    </DialogActions>
                    <DialogActions>
                        <Button
                            id='btn-style-five'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(4)}
                        >5</Button>
                        <Button
                            id='btn-style-six'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(5)}
                        >6</Button>
                        <Button
                            id='btn-style-seven'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(6)}
                        >7</Button>
                        <Button
                            id='btn-style-eight'
                            style={{ color: '#fff' }}
                            variant="contained"
                            onClick={() => props.setTempDesign(7)}
                        >8</Button>
                    </DialogActions>
                    <DialogActions>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                                props.useTemp();
                                props.templateClose(false);
                                props.updateTrello(
                                    props.state.LoginReducer.user_email,
                                    props.state.ApiData.trelloID,
                                    props.state.ApiData.token,
                                    props.state.CreateTemplates.tempList
                                );
                            }}
                            fullWidth={true}
                            disabled={props.state.CreateTemplates.tempName === '' ? true : false}
                            style={{ margin: 3 }}
                        >CREATE</Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}