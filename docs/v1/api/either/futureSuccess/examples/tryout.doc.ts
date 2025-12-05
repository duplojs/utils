import { E, type ExpectType } from "@duplojs/utils";

const future = E.futureSuccess("value");

type check = ExpectType<
	typeof future,
	E.EitherFutureSuccess<"value">,
	"strict"
>;
