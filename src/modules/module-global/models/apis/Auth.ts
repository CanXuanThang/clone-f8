import { CallApiDebounse, CallApiResponse, CallApiResponseData } from '../type/AuthType';

type SignIn = {
    access_token: string;
    refresh_token: string;
    roles: [string];
    username: string;
};

type DataRegister = {
    id: string;
    username: string;
    oldPassword: string | null;
    password: string;
    confirmPassword: string;
    email: string;
    displayName: string;
    phoneNumber: string;
    wallet: {
        id: number;
        userId: number | null;
        user: string | null;
        balance: any;
        requestWithdrawals: [];
    };
    roles: [
        {
            id: number;
            name: string;
        },
    ];
};

type Register = {
    code: string;
    desc: string;
    data: DataRegister;
};

interface AuthApiProps {
    SignIn: {
        Payload: CallApiDebounse & { data: { username: string; password: string } };
        Response?: CallApiResponse<SignIn>;
    };
    Register: {
        Payload: CallApiDebounse & {
            data: {
                username: string;
                email: string;
                password: string;
                confirmPassword: string;
                displayName: string;
                phoneNumber?: string;
            };
        };
        Response?: CallApiResponseData<Register>;
    };
}

export type { AuthApiProps };
