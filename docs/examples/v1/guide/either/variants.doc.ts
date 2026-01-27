import { E, unwrap, type ExpectType } from "@duplojs/utils";

const rawFlag = "" as string;
const boolResult = E.bool(rawFlag);

type CheckBoolResult = ExpectType<
	typeof boolResult,
	E.BoolTruthy<string> | E.BoolFalsy<"">,
	"strict"
>;

const maybeToken = undefined as string | undefined;
const tokenEither = E.optional(maybeToken);

const tokenValue = E.isOptionalFilled(tokenEither)
	? unwrap(tokenEither)
	: null;

type CheckTokenValue = ExpectType<
	typeof tokenValue,
	string | null,
	"strict"
>;

const maybeEmail = null as string | null;
const emailEither = E.nullable(maybeEmail);

const emailValue = E.isNullableFilled(emailEither)
	? unwrap(emailEither)
	: null;

type CheckEmailValue = ExpectType<
	typeof emailValue,
	string | null,
	"strict"
>;

const maybePort = undefined as number | undefined;
const portEither = E.nullish(maybePort);

const portValue = E.isNullishFilled(portEither)
	? unwrap(portEither)
	: 3000;

type CheckPortValue = ExpectType<
	typeof portValue,
	number,
	"strict"
>;

const future = E.future(
	Promise.resolve(
		E.success(42),
	),
);

void future.then((either) => either);

