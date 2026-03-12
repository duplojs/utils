import { createEnum, type GetEnumValue } from "@scripts";

const enumValue = createEnum([
	"value1",
	"value2",
	"value3",
]);

type EnumValue = GetEnumValue<typeof enumValue>;
// type EnumValue = "value1" | "value2" | "value3"

const tuple = enumValue.toTuple();
// type: ["value1", "value2", "value3"]

const maybe = true ? "value1" : "none";

if (enumValue.has(maybe)) {
	// type: "value1"
} else {
	// type: "none"
}

const contractedEnum = enumValue.contract<
	"value1" | "value2" | "value3"
>();
// contractedEnum.toTuple(): ["value1", "value2", "value3"]
