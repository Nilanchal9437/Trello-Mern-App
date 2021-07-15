import { Button, Dialog, DialogContent, DialogTitle, TextField, DialogActions } from '@material-ui/core';
import { Redirect } from 'react-router';
import '../../Style/style.css';
export default function CardCreate(props) {
    if (props.state.DilogBox.cardAccess === false) {
        return (
            <Redirect to='/LISTITEMS'></Redirect>
        )
    }
    else {
        return (
            <div>
                <Dialog
                    open={props.state.DilogBox.cardAccess}
                    onClose={() => {
                        props.cardClose(false);
                    }}
                    maxWidth={'sm'}
                >
                    <DialogTitle id="alert-dialog-title">{"CREATE CARD"}</DialogTitle>
                    <DialogContent>
                        <TextField
                            variant='standard'
                            margin='dense'
                            label='Enter your card title'
                            fullWidth={true}
                            value={props.cardTitlte}
                            onChange={(event) => props.titleCard(event.target.value)}
                        />
                        <TextField
                            variant='standard'
                            margin='dense'
                            label='Enter your card text'
                            fullWidth={true}
                            value={props.cardBody}
                            onChange={(event) => props.bodyCard(event.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.ColorCode.redColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.ColorCode.redColor)}
                        >
                        </Button>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.ColorCode.blueColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.ColorCode.blueColor)}
                        >
                        </Button>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.ColorCode.greenColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.ColorCode.greenColor)}
                        >
                        </Button>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.ColorCode.yellowColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.ColorCode.yellowColor)}
                        >
                        </Button>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.ColorCode.whiteColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.ColorCode.whiteColor)}
                        >
                        </Button>
                    </DialogActions>
                    <DialogActions>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            id='card-img1'
                            style={{ width: 250, height: 100, margin: 10 }}
                            onClick={() => props.imageCard('Office')}
                        >
                            1
                        </Button>

                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            id='card-img2'
                            style={{ width: 250, height: 100, margin: 10 }}
                            onClick={() => props.imageCard('Work')}
                        >
                            2
                        </Button>
                    </DialogActions>
                    <DialogActions>
                        <Button
                            variant='contained'
                            color='primary'
                            size='small'
                            margin='dense'
                            fullWidth={true}
                            onClick={() => {
                                props.CardNewCreate();
                                props.cardClose(false);
                            }}
                            disabled={props.state.CreateTemplates.cardTitlte === '' ? true : false}
                        >
                            CREATE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}