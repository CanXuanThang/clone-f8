type CallApiResponse<Data> = {
    data: Data;
    message: string;
    status?: number;
};

type CallApiResponseData<Data> = {
    data: Data;
    code: string;
    desc?: string;
};

type CallApiDebounse = { timer?: number };

export type { CallApiDebounse, CallApiResponse, CallApiResponseData };
