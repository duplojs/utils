import { type ExpectType, unwrap, type WrappedValue, wrapValue } from "@duplojs/utils";

const wrapped = wrapValue("value");

type check1 = ExpectType<
	typeof wrapped,
	WrappedValue<"value">,
	"strict"
>;

const value = unwrap(wrapped);

type check2 = ExpectType<
	typeof value,
	"value",
	"strict"
>;
