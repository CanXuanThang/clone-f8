import SofiaProSoftRegular from '@module-theme/utils/fonts/SofiaProSoft/SofiaProSoft-Regular.otf';
import SofiaProSoftMedium from '@module-theme/utils/fonts/SofiaProSoft/SofiaProSoft-Medium.otf';
import LatoRegular from '@module-theme/utils/fonts/Lato/Lato-Regular.ttf';
import LatoMedium from '@module-theme/utils/fonts/Lato/Lato-Medium.ttf';

export const CssBaseline = () => {
    return {
        MuiCssBaseline: {
            styleOverrides: `
        @font-face {
          font-family: 'Sofia Pro Soft';
          font-style: normal;
          font-weight: 500;
          src: local('Sofia Pro Soft'), local('Sofia Pro Soft Regular'), url(${SofiaProSoftRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }

        @font-face {
          font-family: 'Sofia Pro Soft Medium';
          font-style: normal;
          font-weight: 600;
          src: local('Sofia Pro Soft Medium'), local('Sofia Pro Soft Medium'), url(${SofiaProSoftMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Lato';
          font-style: normal;
          font-weight: 400;
          src: local('Lato'), local('Lato Regular'), url(${LatoRegular}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        
        @font-face {
          font-family: 'Lato Medium';
          font-style: normal;
          font-weight: 600;
          src: local('Lato Medium'), local('Lato Medium'), url(${LatoMedium}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
        },
    };
};
