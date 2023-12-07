type CallApiResponse<Data> = {
    data: Data;
    message: string;
    status?: number;
};

type CallApiDebounse = { timer?: number };

export type { CallApiDebounse, CallApiResponse };
