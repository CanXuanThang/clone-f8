import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Box, Typography, Button } from '@mui/material';

/** constants */
import { SECOND_COUNT_DOWN_ERROR } from '@module-error/constants';

/** utils */
import { errorMessage } from '@module-error/utils';
import Logo from '@module-error/assets/error.jpeg';

/** components lazy */

function FallbackDefault({ isAutoReload }: { isAutoReload: boolean }) {
    const reloadWindow = React.useCallback(() => window.location.reload(), []);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                bgcolor: 'background.neutral',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 999,
                    img: {
                        width: 'auto',
                        height: 150,
                        borderRadius: '50%',
                    },
                }}>
                <img src={Logo} alt="err" />
                <Typography
                    variant="h1"
                    letterSpacing={0.05}
                    fontWeight={600}
                    color="error.main"
                    sx={{
                        '&:hover': {
                            color: 'primary.main',
                        },
                    }}>
                    <FormattedMessage {...errorMessage['module.error.fallback.title']} />
                </Typography>

                <Typography
                    variant="h6"
                    letterSpacing={0.05}
                    fontWeight={600}
                    py={2}
                    color="error.main"
                    sx={{
                        '&:hover': {
                            color: 'primary.main',
                        },
                    }}>
                    <FormattedMessage {...errorMessage['module.error.fallback.content']} />
                </Typography>

                <Button
                    onClick={reloadWindow}
                    variant="outlined"
                    sx={{
                        mt: 4,
                        mb: 2,
                        px: 4,
                        bgcolor: 'primary.main',
                        color: 'common.white',
                        '&:hover': { bgcolor: 'error.main' },
                    }}>
                    <FormattedMessage {...errorMessage['module.error.fallback.retry']} />
                </Button>
            </Box>
        </Box>
    );
}

export default FallbackDefault;
