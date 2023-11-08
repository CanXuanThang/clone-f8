import { TypographyOptions } from '@mui/material/styles/createTypography';

// function pxToRem(value: number) {
//     return `${value / 14}rem`;
// }

// function responsiveFontSizes(values: any) {
//     return {
//         '@media (min-width:600px)': {
//             fontSize: pxToRem(values?.sm),
//         },
//         '@media (min-width:900px)': {
//             fontSize: pxToRem(values?.md),
//         },
//         '@media (min-width:1200px)': {
//             fontSize: pxToRem(values?.lg),
//         },
//     };
// }

const FONT_PRIMARY_REGULAR = 'Lato';
const FONT_TITLE = 'Lato Medium';

export const typography: TypographyOptions = {
    fontFamily: FONT_PRIMARY_REGULAR,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontFamily: FONT_TITLE,
        fontWeight: 400,
        lineHeight: 1.25,
        fontSize: '3.786rem',
        letterSpacing: -0.02,
    },
    h2: {
        fontFamily: FONT_TITLE,
        fontWeight: 400,
        lineHeight: 1.25,
        fontSize: '3.071rem',
        letterSpacing: -0.02,
    },
    h3: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 700,
        lineHeight: 1.25,
        fontSize: '2.0rem',
        letterSpacing: -0.02,
    },
    h4: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 700,
        lineHeight: 1.25,
        fontSize: '1.3rem',
        letterSpacing: -0.02,
    },
    h5: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 800,
        lineHeight: 1.25,
        fontSize: '1.2rem',
        letterSpacing: -0.02,
    },
    h6: {
        fontFamily: FONT_TITLE,
        fontWeight: 400,
        lineHeight: 1.25,
        fontSize: '1.1rem',
        letterSpacing: -0.02,
    },
    subtitle1: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 400,
        lineHeight: 1.25,
        fontSize: '1.14286rem',
    },
    subtitle2: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 600,
        lineHeight: 1.25,
        fontSize: '0.9rem',
    },
    body1: {
        fontFamily: FONT_PRIMARY_REGULAR,
        lineHeight: 1.25,
        fontSize: '1rem',
        letterSpacing: '-0.01em',
    },
    body2: {
        fontFamily: FONT_PRIMARY_REGULAR,
        lineHeight: 1.25,
        fontSize: '0.8572rem',
    },
    caption: {
        fontFamily: FONT_PRIMARY_REGULAR,
        lineHeight: 1.25,
        fontSize: '0.786rem',
        letterSpacing: 0.05,
    },
    overline: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 700,
        lineHeight: 1.25,
        fontSize: '0.786rem',
        letterSpacing: 1.1,
        textTransform: 'uppercase',
    },
    button: {
        fontFamily: FONT_PRIMARY_REGULAR,
        fontWeight: 500,
        lineHeight: 1.25,
        fontSize: '1rem',
        textTransform: 'inherit',
    },
};
