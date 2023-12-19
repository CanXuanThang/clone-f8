import * as React from 'react';
import classNames from 'classnames';
import { Table, TableContainer, Box } from '@mui/material';

/** components */
import TableLoading from './TableLoading';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

/** styles */
import useStyles from './styles';
import { TableBaseProps } from '../../constants';

/** types */

function TableBase<T>(props: TableBaseProps<T>) {
    const {
        sx,
        className,
        loading,
        emptyText,

        data,
        rows,
        orderBy,
        orderType,

        tableRowProps,

        onScroll,
        onClickItem,
        onRequestSort,
    } = props;

    const classes = useStyles();

    return (
        <Box className={classNames(classes.tableBox, className)} sx={sx}>
            <TableLoading loading={loading} empty={!data?.length} emptyText={emptyText} />
            <TableContainer onScroll={onScroll} className={classes.tableContainer}>
                <Table stickyHeader size="medium" className={classes.table}>
                    <TableHeader rows={rows} orderBy={orderBy} orderType={orderType} onRequestSort={onRequestSort} />
                    <TableBody data={data} rows={rows} onClickItem={onClickItem} tableRowProps={tableRowProps} />
                </Table>
            </TableContainer>
        </Box>
    );
}

export default React.memo(TableBase);
