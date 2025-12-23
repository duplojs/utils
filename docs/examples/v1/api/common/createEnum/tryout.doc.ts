import { createEnum, type ExpectType, type GetEnumValue } from "@duplojs/utils";

const enumValue = createEnum(["value1", "value2", "value3"]);

type EnumValue = GetEnumValue<typeof enumValue>;

const tuple = enumValue.toTuple();

type check = ExpectType<
	typeof tuple,
	["value1", "value2", "value3"],
	"strict"
>;

const maybe = true ? "value1" : "none";

if (enumValue.has(maybe)) {
	type check = ExpectType<
		typeof maybe,
		"value1",
		"strict"
	>;
} else {
	type check = ExpectType<
		typeof maybe,
		"none",
		"strict"
	>;
}
