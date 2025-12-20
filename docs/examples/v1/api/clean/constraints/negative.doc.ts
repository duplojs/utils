import { type ExpectType, C, DP } from "@duplojs/utils";

const Debt = C.createNewType("debt", DP.number(), C.Negative);

const debt = Debt.createOrThrow(-50);

type check = ExpectType<
	typeof debt,
	C.NewType<"debt", -50, "negative">,
	"strict"
>;
