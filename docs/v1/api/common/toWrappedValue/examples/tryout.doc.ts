import { type ExpectType, toWrappedValue, type WrappedValue } from "@duplojs/utils";

const already = toWrappedValue({ id: 1 });

type check1 = ExpectType<
	typeof already,
	WrappedValue<{ id: number }>,
	"strict"
>;

const again = toWrappedValue(already);

type check2 = ExpectType<
	typeof again,
	WrappedValue<{ id: number }>,
	"strict"
>;
