import { E, type ExpectType } from "@duplojs/utils";

const future = E.futureError("error");

type check = ExpectType<
	typeof future,
	E.EitherFutureError,
	"strict"
>;
