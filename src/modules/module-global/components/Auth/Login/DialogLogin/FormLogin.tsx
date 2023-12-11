import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/material';
import TexFieldElementBase from '@src/modules/module-base/components/react-hook-form-mui-base/TextFiledElementBase';
import { accessToken, username } from '@src/modules/module-base/constants';
import { loginApi } from '@src/modules/module-global/api/Auth';
import { setAuth, setToken } from '@src/modules/module-global/redux/selector';
import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import React from 'react';
import { FormContainer } from 'react-hook-form-mui';
import { useDispatch } from 'react-redux';

type FormLoginState = {
    username: string;
    password: string;
};

interface Props {
    setOpen: (value: boolean) => void;
}

function FormLogin({ setOpen }: Props) {
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (response) => {
            if (response?.status === 200) {
                const token = Cookies.set(accessToken, response.data.access_token, { expires: 1 });
                Cookies.set(username, response.data.username, { expires: 1 });
                setOpen(false);
                dispatch(setToken('login', token));
                return dispatch(setAuth(response.data));
            } else {
                dispatch({
                    type: 'notify',
                    payload: {
                        mode: 'error',
                        message: 'Sai tài khoản hoặc mật khẩu',
                    },
                });
            }
        },
    });

    const onSubmit = React.useCallback(
        (data: FormLoginState) => mutation.mutate({ data: { username: data.username, password: data.password } }),
        []
    );

    return (
        <Box width="100%" px={12}>
            <FormContainer
                defaultValues={{ username: '', password: '' }}
                onSuccess={onSubmit}
                mode="onChange"
                reValidateMode="onChange">
                <TexFieldElementBase
                    label="Tên đăng nhập"
                    textFieldProps={{
                        name: 'username',
                        spellCheck: false,
                        required: true,
                        autoFocus: true,
                        parseError: ({ type }) => (type === 'required' ? 'Bạn cần nhập tên để đăng nhập!' : ''),
                    }}
                />
                <TexFieldElementBase
                    label="Mật khẩu"
                    textFieldProps={{
                        type: 'password',
                        name: 'password',
                        spellCheck: false,
                        required: true,
                        parseError: ({ type }) => (type === 'required' ? 'Bạn cần nhập mật khẩu để đăng nhập!' : ''),
                    }}
                />
                <LoadingButton
                    fullWidth
                    type="submit"
                    loading={mutation.isLoading}
                    sx={{
                        mt: 3,
                        p: '8px 16px',
                        bgcolor: '#1dbfaf',
                        backgroundImage: 'linear-gradient(70.06deg, #2cccff -5%, #22dfbf 106%)',
                        borderRadius: '44px',
                        color: '#fff',
                    }}>
                    Đăng nhập
                </LoadingButton>
            </FormContainer>
        </Box>
    );
}

export default FormLogin;
