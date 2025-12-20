import { type ExpectType, O } from "@duplojs/utils";

const result = O.values({
	name: "William",
	age: 24,
	city: "Normandie",
});

type check = ExpectType<
	typeof result,
	("William" | 24 | "Normandie")[],
	"strict"
>;
