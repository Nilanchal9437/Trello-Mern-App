import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Snack = (props) => {
    return (
        <div>
            <Snackbar
                autoHideDuration={6000}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={props.state.SnackReducer.SnackAccess}
                onClose={() => props.snackClose(false)}
            >
                <MuiAlert
                    onClose={() => props.snackClose(false)}
                    severity={props.state.SnackReducer.SnackColor} 
                >
                  {props.state.SnackReducer.SnackMassage}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default Snack;