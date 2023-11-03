import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, StyledEngineProvider, ThemeProvider as ThemeProviderMUI } from '@mui/material/styles';
import { componentsOverride } from '../componentsOverride';
import { breakpoints, paletteLight, typography, shadows } from '../../constants';

type Props = {
    children: React.ReactNode;
};

function ThemeProvider({ children }: Props) {
    const themeOptions = React.useMemo(
        () => ({
            typography,
            shadows,
            breakpoints,
            palette: paletteLight,
        }),
        []
    );

    const theme = createTheme(themeOptions);
    theme.components = componentsOverride(theme);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProviderMUI theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProviderMUI>
        </StyledEngineProvider>
    );
}

export default ThemeProvider;
