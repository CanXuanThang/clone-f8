import * as React from 'react';
import { Snackbar, Alert, Typography } from '@mui/material';

import { ERROR_ACTION } from '@module-error/constants';

/** types */
import type { SnackbarProps } from '@mui/material/Snackbar/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '@module-global/redux';

type Props = SnackbarProps;
const NotifyBoundary = React.memo((props: Props) => {
    const { open, message, mode, close, duration = 2000 } = useSelector((state: AppState) => state.notify.notify);
    const dispatch = useDispatch();

    const closeSnackbar = React.useCallback(() => dispatch({ type: ERROR_ACTION.TOGGLE_NOTIFY }), []);

    return (
        <Snackbar
            key="NotifyBoundary"
            autoHideDuration={duration}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={open}
            onClose={closeSnackbar}
            {...props}>
            <Alert
                onClose={close ? closeSnackbar : undefined}
                severity={mode}
                sx={[
                    { width: '100%' },
                    !mode && { bgcolor: 'primary.main', color: 'common.white' },
                    !open && { display: 'none' },
                ]}
                elevation={6}
                variant="filled">
                <Typography variant="h6" fontFamily="Lato">
                    {message}
                </Typography>
            </Alert>
        </Snackbar>
    );
});

NotifyBoundary.displayName = 'NotifyBoundary';
export default NotifyBoundary;
