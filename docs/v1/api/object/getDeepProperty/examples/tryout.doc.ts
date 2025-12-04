import { type ExpectType, O } from "@duplojs/utils";

const input = { user: { address: { city: "Paris" } } } as const;
const result = O.getDeepProperty(input, "user.address.city");

type check = ExpectType<
	typeof result,
	"Paris",
	"strict"
>;
