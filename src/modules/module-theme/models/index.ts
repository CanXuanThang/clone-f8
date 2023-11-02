import { ColorType } from '@mui/material';

/** constants */

/** types */
import type { PaletteMode, Theme } from '@mui/material';
import { themeObject } from '../constants';

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        // neutral: true;
        // purple: true;
        // mint: true;
    }
}
declare module '@mui/material' {
    type ColorType =
        | '50'
        | '100'
        | '200'
        | '300'
        | '400'
        | '500'
        | '600'
        | '700'
        | '800'
        | '900'
        | '1000'
        | '1100'
        | 'A100'
        | 'A200'
        | 'A400'
        | 'A700'
        | 'bgColor';
    interface Color extends Record<ColorType, string> {}
}

declare module '@mui/material/styles' {
    interface Color extends Record<ColorType, string> {}

    interface PaletteColor {
        light: string;
        main: string;
        dark: string;
        contrastText: string;
    }

    interface Palette {
        gradients: any;
        chart: any;
    }

    // allow configuration using `createTheme`
    interface PaletteOptions {
        neutral?: PaletteOptions['primary'];
        purple?: PaletteOptions['primary'];
        mint?: PaletteOptions['primary'];
    }
}
type ThemeModeType = keyof typeof themeObject | PaletteMode;

type ThemeContextProps = {
    mode: ThemeModeType;
    toggleTheme: (value: ThemeModeType) => void;
};

export type { ThemeModeType, ThemeContextProps };
