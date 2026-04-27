import { type ExpectType, C, DP } from "@duplojs/utils";

const Debt = C.createNewType("debt", DP.number(), C.StrictNegativeInt);

const debt = Debt.createOrThrow(-1);

type check = ExpectType<
	typeof debt,
	C.NewType<"debt", -1, "strict-negative" | "int">,
	"strict"
>;
