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
    password: string | null;
    confirmPassword: string | null;
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
        Response?: CallApiResponseData<DataRegister>;
    };
    GetCurrentUser: {
        Payload: CallApiDebounse;
        Response?: CallApiResponseData<DataRegister>;
    };
    ChangePassword: {
        Payload: CallApiDebounse & {
            data: {
                username: string | undefined;
                oldPassword: string;
                password: string;
                confirmPassword: string;
            };
        };
        Response?: CallApiResponseData<null>;
    };
}

export type { AuthApiProps, DataRegister };
