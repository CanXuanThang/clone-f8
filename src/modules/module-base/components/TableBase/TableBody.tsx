import * as React from 'react';
import { Box, TableBody as TableBodyElem, TableCell, TableRow } from '@mui/material';
import classNames from 'classnames';

/** constants */

/** styles */
import useStyles from '@module-base/components/TableBase/styles';
import { TableBaseProps } from '../../constants';
import { Typography } from '@mui/material';

/** types */

function TableBody<T>(props: Pick<TableBaseProps<T>, 'data' | 'onClickItem' | 'rows' | 'tableRowProps'>) {
    const { onClickItem, data, rows, tableRowProps } = props;
    const { hover, className, onClick, ...other } = tableRowProps ?? {};

    const classes = useStyles();

    const isHover = hover || !!onClickItem;

    return (
        <TableBodyElem>
            {data?.map((item, indexRow) => {
                // @ts-ignore
                const key = item?.key || item?.id || `${indexRow}-${Date.now()}`;

                return (
                    <TableRow
                        className={classNames(classes.tableRow, { [classes.tableRowHover]: isHover }, className)}
                        key={`${key}`}
                        onClick={(event: any) => {
                            onClick?.(event);
                            onClickItem?.(item);
                        }}
                        hover={isHover}
                        {...other}>
                        {rows?.map((cell, indexCell) => (
                            <TableCell key={`${key}-${cell.id}`}>{cell.render(item, indexRow, indexCell)}</TableCell>
                        ))}
                    </TableRow>
                );
            })}
            {data?.length === 0 && (
                <Typography
                    variant="h6"
                    sx={{ display: 'flex', justifyContent: 'center', position: 'absolute', left: '40%', mt: 5 }}>
                    Chưa có dữ liệu
                </Typography>
            )}
        </TableBodyElem>
    );
}

export default React.memo(TableBody);
