import { Palette } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { grey } from './colors';

function createGradient(color1: string, color2: string) {
    return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY = {
    ...grey,
    500_8: alpha('#C1C8CD', 0.08),
    500_12: alpha('#C1C8CD', 0.12),
    500_16: alpha('#C1C8CD', 0.16),
    500_24: alpha('#C1C8CD', 0.24),
    500_32: alpha('#C1C8CD', 0.32),
    500_48: alpha('#C1C8CD', 0.48),
    500_56: alpha('#C1C8CD', 0.56),
    500_80: alpha('#C1C8CD', 0.8),
    bgColor: alpha('#f9f8f9', 0.5),
};

const PRIMARY = {
    light_100: alpha('#141f49', 0.1),
    light: alpha('#141f49', 0.2),
    main: '#141f49',
    dark: '#141f49',
    contrastText: '#fff',
};

const SECONDARY = {
    light: '#FFB381',
    main: '#F76808',
    dark: '#ED5F00',
    contrastText: '#FFF1E7',
};

const INFO = {
    light: alpha('#56C1FF', 0.2),
    main: '#56C1FF',
    dark: '#33a6fb',
    contrastText: '#fff',
    ghostWhite: '#F6F9FB',
    aliceBlue: '#EEF9FF',
};

const SUCCESS = {
    light: alpha('#8BBF42', 0.2),
    main: '#8BBF42',
    dark: '#61852e',
    contrastText: '#fff',
    ghostWhite: '#f4f9ed',
};

const WARNING = {
    light: alpha('#F09E2E', 0.2),
    main: '#F09E2E',
    dark: '#e98514',
    contrastText: '#fff',
    ghostWhite: '#FEF6EB',
};

const ERROR = {
    light: alpha('#E86464', 0.2),
    main: '#E86464',
    dark: '#f2241e',
    contrastText: '#fff',
    ghostWhite: '#fdf0f0',
};

const GRADIENTS = {
    primary: createGradient(PRIMARY.light, PRIMARY.main),
    info: createGradient(INFO.light, INFO.main),
    success: createGradient(SUCCESS.light, SUCCESS.main),
    warning: createGradient(WARNING.light, WARNING.main),
    error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
    violet: ['#826AF9', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#2D99FF', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#2CD9C5', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    yellow: ['#FFE700', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
    red: ['#FF6C40', '#FF8F6D', '#FFBD98', '#FFF2D4'],
};

type IPalette = Omit<Palette, 'getContrastText' | 'augmentColor' | 'contrastThreshold' | 'tonalOffset'>;

export const paletteLight: IPalette = {
    mode: 'light',
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY as any,
    gradients: GRADIENTS as any,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    text: { primary: GREY[1100], secondary: GREY[1000], disabled: GREY[500] },
    background: { neutral: GREY[100] } as any,
    action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    } as any,
};

export const paletteDark: IPalette = {
    mode: 'dark',
    common: { black: '#000', white: '#fff' },
    primary: { ...PRIMARY },
    secondary: { ...SECONDARY },
    info: { ...INFO },
    success: { ...SUCCESS },
    warning: { ...WARNING },
    error: { ...ERROR },
    grey: GREY as any,
    gradients: GRADIENTS as any,
    chart: CHART_COLORS,
    divider: GREY[500_24],
    text: { primary: GREY[1100], secondary: GREY[1000], disabled: GREY[500] },
    background: { neutral: GREY[100] } as any,
    action: {
        active: GREY[600],
        hover: GREY[500_8],
        selected: GREY[500_16],
        disabled: GREY[500_80],
        disabledBackground: GREY[500_24],
        focus: GREY[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    } as any,
};
