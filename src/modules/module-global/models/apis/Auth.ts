import { CallApiDebounse, CallApiResponse } from '../type/AuthType';

type SignIn = {
    access_token: string;
    refresh_token: string;
    roles: [string];
    username: string;
};

interface AuthApiProps {
    SignIn: {
        Payload: CallApiDebounse & { data: { username: string; password: string } };
        Response?: CallApiResponse<SignIn>;
    };
}

export type { AuthApiProps };
