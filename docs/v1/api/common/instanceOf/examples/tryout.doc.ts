import { instanceOf } from "@duplojs/utils";

class HttpError extends Error {
	status: number;
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

const isHttpError = instanceOf<unknown, typeof HttpError>(HttpError);

const errors: unknown[] = [new Error("oops"), new HttpError(404, "not found")];
const onlyHttpErrors = errors.filter(isHttpError);
// onlyHttpErrors: HttpError[]
