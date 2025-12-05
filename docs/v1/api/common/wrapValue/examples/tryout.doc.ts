import { wrapValue, type ExpectType, type WrappedValue } from "@duplojs/utils";

const result = wrapValue({ id: 1 });

type check = ExpectType<
	typeof result,
	WrappedValue<{ readonly id: 1 }>,
	"strict"
>;
