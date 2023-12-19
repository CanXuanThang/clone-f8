import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Stack, Typography, CircularProgress } from '@mui/material';

/** utils */

/** styles */
import useStyles from './styles';
import { TableBaseProps } from '../../constants';

/** types */

function TableLoading<T>(props: Pick<TableBaseProps<T>, 'loading' | 'emptyText'> & { empty?: boolean }) {
    const { loading, empty, emptyText } = props;

    const classes = useStyles();

    return (
        <Stack className={classes.tableLoading} display={loading || empty ? 'flex' : 'none'}>
            {loading ? <CircularProgress color="primary" /> : <Typography>{emptyText || ''}</Typography>}
        </Stack>
    );
}

export default React.memo(TableLoading);
