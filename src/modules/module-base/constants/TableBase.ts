import { SxProps, TableRowProps, Theme } from '@mui/material';
import type { UIEvent, ReactNode } from 'react';

type OrderType = 'asc' | 'desc';

interface TableBaseProps<T> {
    sx?: SxProps<Theme>;
    className?: string;

    data?: T[];
    onScroll?(event: UIEvent<HTMLDivElement>): void;
    onClickItem?(item: T): void;

    loading?: boolean;
    emptyText?: string;

    rows?: {
        id: string;
        label: ReactNode;
        disableSort?: boolean;
        render(item: T, indexRow: number, indexCell: number): ReactNode;
    }[];
    orderType?: OrderType;
    orderBy?: string;
    onRequestSort?: (property: string) => void;

    tableRowProps?: TableRowProps;
}

export type { OrderType, TableBaseProps };
