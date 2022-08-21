export type ErrorItem = {
    location: string;
    msg: string;
    param: string;
    value: string;
};

export type ErrorDto = {
    status: 'error',
    message: string;
    errors: ErrorItem[];
};