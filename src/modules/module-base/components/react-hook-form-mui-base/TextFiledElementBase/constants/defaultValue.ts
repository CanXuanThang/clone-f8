const emptyFunction = Object.freeze(() => {});

const emptyObject = Object.freeze<Record<string, undefined>>({});

const emptyArray = Object.freeze([]) as [];

const TIMING_SEARCHING = 300;

const TIMING_API_PENDING = 600;

const TIMING_NOTIFY_DURATION = 2000;

const BASE_API_PATH = (root: string, arrPath?: Array<string | number>) =>
    `/${root}${arrPath ? `/${arrPath?.join('/')}` : ''}`;

export {
    emptyFunction,
    emptyObject,
    emptyArray,
    TIMING_SEARCHING,
    TIMING_API_PENDING,
    TIMING_NOTIFY_DURATION,
    BASE_API_PATH,
};
