import { E, type ExpectType } from "@duplojs/utils";

const mayBeInput = true ? true : undefined;

const result = E.nullish(mayBeInput);

type check = ExpectType<
	typeof result,
	E.NullishEmpty<undefined> | E.NullishFilled<true>,
	"strict"
>;
