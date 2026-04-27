import { type ExpectType, C, DP } from "@duplojs/utils";

const Quantity = C.createNewType("quantity", DP.number(), C.StrictPositiveInt);

const quantity = Quantity.createOrThrow(1);

type check = ExpectType<
	typeof quantity,
	C.NewType<"quantity", 1, "strict-positive" | "int">,
	"strict"
>;
