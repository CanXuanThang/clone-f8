import { Box, InputBase, Menu, MenuItem, Typography, alpha, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { searchCourseApi } from '../../api/Course';
import { debounce } from '@src/modules/module-base/hooks';
import CardBase from '@src/modules/module-base/components/CardBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(1),
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        border: '1px solid #ccc',
        width: '100%',
        borderRadius: '99px',
        '&:focus-visible': {
            outline: '-webkit-focus-ring-color auto 1px',
        },
    },
}));

function SearchComponent() {
    const [open, setOpen] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');
    const handleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const mutation = useMutation({
        mutationFn: searchCourseApi,
    });

    useEffect(() => {
        if (value !== '') {
            const callApi = setTimeout(() => {
                mutation.mutate({ data: { textSearch: value, pageIndex: 1, pageSize: 10 } });
            }, 2000);

            return () => clearTimeout(callApi);
        }
    }, [value]);

    useEffect(() => {
        mutation.isLoading && setOpen(true);
    }, [mutation]);

    return (
        <Box position="relative" width="35%">
            <Search>
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Tìm kiếm khóa học"
                    inputProps={{ 'aria-label': 'search' }}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onClick={handleClick}
                />
            </Search>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                {mutation.data?.content.map((item) => (
                    <MenuItem key={item.id} onClick={() => setOpen(false)}>
                        <CardBase item={item} isHome={false} />
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default SearchComponent;
