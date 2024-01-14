import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import React, { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { getBuyerApi } from '../../api/Bill';
import { TBuyer } from '../../models/apis/Bill';
import { CHANGE_LINK } from '../../constants/screen';

interface Props {
    data?: TBuyer;
}

function NotifyBuyer({ data }: Props) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ position: 'relative' }}>
            <IconButton
                onClick={handleClick}
                size="small"
                color="info"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}>
                <NotificationsActiveIcon />
            </IconButton>
            <Typography component="p" color="red" sx={{ position: 'absolute', top: 0, right: 0, fontSize: '12px' }}>
                {data?.content ? data?.content.length : null}
            </Typography>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                        maxHeight: '400px',
                        overflowY: 'auto',
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                {data?.content ? (
                    data?.content.map((item) => (
                        <MenuItem key={item.id} sx={{ my: 1 }}>
                            {item.course.image && (
                                <img
                                    src={item.course.image.replace(CHANGE_LINK, '')}
                                    alt={item.course.name}
                                    style={{ width: '120px', borderRadius: '8px', marginRight: '8px' }}
                                />
                            )}
                            <Box>
                                <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>{item.course.name}</Typography>
                                <Typography sx={{ fontSize: '12px', color: item.status === 1 ? 'red' : 'green' }}>
                                    {item.status === 1 ? 'Chờ xác nhận' : 'Đăng ký thành công'}
                                </Typography>
                            </Box>
                        </MenuItem>
                    ))
                ) : (
                    <Typography sx={{ fontSize: '14px', fontWeight: 600 }}>Chưa có thông báo nào</Typography>
                )}
            </Menu>
        </Box>
    );
}

export default NotifyBuyer;
