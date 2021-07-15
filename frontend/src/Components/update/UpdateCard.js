import { Button, Dialog, DialogContent, DialogActions, DialogTitle, TextField } from '@material-ui/core';
import { Redirect } from 'react-router';
import '../../Style/style.css';

export default function CardUpdate(props) {
    if (props.state.DilogBox.cardUpdateAccess === false) {
        return (
            <Redirect to='/LISTITEMS'></Redirect>
        )
    }
    else {
        return (
            <div>
                <Dialog
                    open={props.state.DilogBox.cardUpdateAccess}
                    onClose={() => {
                        props.cardUpdateClose(false);
                        props.titleCard('');
                        props.bodyCard('');
                        props.colorCard('');
                        props.imageCard('');
                    }}
                    fullWidth={true}
                >
                    <DialogTitle id="max-width-dialog-title">UPDATE CARD</DialogTitle>
                    <DialogContent>
                        <TextField
                            variant='standard'
                            margin='dense'
                            label='Enter your card title'
                            fullWidth={true}
                            value={props.state.CreateTemplates.cardTitlte}
                            onChange={(event) => props.titleCard(event.target.value)}
                        />
                        <TextField
                            variant='standard'
                            margin='dense'
                            label='Enter your card text'
                            fullWidth={true}
                            value={props.state.CreateTemplates.cardBody}
                            onChange={(event) => props.bodyCard(event.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{ backgroundColor: props.state.CreateTemplates.cardColor, margin: 5 }}
                            onClick={() => props.colorCard(props.state.CreateTemplates.cardColor)}
                        >
                        </Button>
                    </DialogActions>
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
                            fullWidth={true}
                            style={{ height: 100, margin: 10 }}
                            onClick={() => props.imageCard('Office')}
                        >
                            1
                            </Button>

                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            id='card-img2'
                            style={{ height: 100, margin: 10 }}
                            onClick={() => props.imageCard('Work')}
                        >
                            2
                            </Button>

                        <Button
                            variant='outlined'
                            margin='dense'
                            size='small'
                            fullWidth={true}
                            style={{height: 100, margin: 10, color: '#000' }}
                            onClick={() => props.imageCard('')}
                        >
                            No Image
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
                                props.cardUpdate();
                                props.titleCard('');
                                props.bodyCard('');
                                props.colorCard('');
                                props.imageCard('');
                                props.cardUpdateClose(false);
                            }}
                            disabled={props.state.CreateTemplates.cardTitlte === '' ? true : false}
                        >
                            UPDATE
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}