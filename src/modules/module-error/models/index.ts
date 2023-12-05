/** types */
import type { ReactNode } from 'react';
import type { AlertColor } from '@mui/material/Alert/Alert';

type StoreErrorType = {
    notify: {
        open?: boolean;
        message?: ReactNode;
        mode?: AlertColor;
        close?: boolean;
        duration?: number;
    };
};

export type { StoreErrorType };
