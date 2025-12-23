import { type ExpectType, C, DP } from "@duplojs/utils";

const Quantity = C.createNewType("quantity", DP.number(), C.Int);

const result = Quantity.createOrThrow(12);

type check = ExpectType<
	typeof result,
	C.NewType<"quantity", 12, "int">,
	"strict"
>;
