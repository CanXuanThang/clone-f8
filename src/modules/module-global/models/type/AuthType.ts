type CallApiResponse<Data> = {
    data: Data;
    code: string;
    desc?: number;
};

type CallApiDebounse = { timer?: number };

export type { CallApiDebounse, CallApiResponse };
