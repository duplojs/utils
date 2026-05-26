import { E, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const singleInformationResult = E.unwrapByInformation(
	payment,
	"payment.accepted",
);

type singleInformationResultCheck = ExpectType<
	typeof singleInformationResult,
	120 | E.Left<"payment.rejected", "insufficient funds">,
	"strict"
>;

const multipleInformationsResult = E.unwrapByInformation(
	payment,
	["payment.accepted", "payment.rejected"],
);

type multipleInformationsResultCheck = ExpectType<
	typeof multipleInformationsResult,
	120 | "insufficient funds",
	"strict"
>;
