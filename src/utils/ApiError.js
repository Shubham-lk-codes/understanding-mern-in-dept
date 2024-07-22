class ApiError extends Error {
    constructor(
        statusCode,
        message = "something went wrong",
        error = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.stack = stack || (new Error()).stack;
        this.data = null;
    }
}

export   {ApiError}