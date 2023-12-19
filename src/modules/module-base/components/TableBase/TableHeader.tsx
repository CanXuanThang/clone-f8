import * as React from 'react';
import { TableHead, TableRow, TableCell, TableSortLabel, Box } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

/** styles */
import useStyles from './styles';
import { TableBaseProps } from '../../constants';

/** types */

function TableHeader<T>(props: Pick<TableBaseProps<T>, 'rows' | 'orderBy' | 'orderType' | 'onRequestSort'>) {
    const { rows, orderType, orderBy, onRequestSort } = props;

    const classes = useStyles();

    return (
        <TableHead className={classes.tableHead}>
            <TableRow>
                {rows?.map((cell) => (
                    <TableCell
                        key={cell.id}
                        align="left"
                        padding="normal"
                        sortDirection={orderBy === cell.id ? orderType : false}>
                        {cell.disableSort || !orderBy || !orderType ? (
                            cell.label
                        ) : (
                            <TableSortLabel
                                active={orderBy === cell.id}
                                direction={orderBy === cell.id ? orderType : 'asc'}
                                IconComponent={ArrowDropDownIcon}
                                onClick={() => onRequestSort?.(cell.id)}>
                                {cell.label}
                                {orderBy === cell.id ? (
                                    <Box component="span">
                                        {orderType === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                    </Box>
                                ) : null}
                            </TableSortLabel>
                        )}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default React.memo(TableHeader);
