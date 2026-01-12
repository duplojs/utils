import { createEnum, type GetEnumValue } from "@scripts";

const enumValue = createEnum([
	"value1",
	"value2",
	"value3",
]);

type EnumValue = GetEnumValue<typeof enumValue>;

const tuple = enumValue.toTuple();

// type: ["value1", "value2", "value3"]

const maybe = true ? "value1" : "none";

if (enumValue.has(maybe)) {
	// type: "value1"
} else {
	// type: "none"
}
