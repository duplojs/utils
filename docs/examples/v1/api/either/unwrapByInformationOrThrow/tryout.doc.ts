import { E, type ExpectType } from "@duplojs/utils";

const payment = true
	? E.right("payment.accepted", 120)
	: E.left("payment.rejected", "insufficient funds");

const singleInformationPayload = E.unwrapByInformationOrThrow(
	payment,
	"payment.accepted",
);

type singleInformationPayloadCheck = ExpectType<
	typeof singleInformationPayload,
	120,
	"strict"
>;

const multipleInformationsPayload = E.unwrapByInformationOrThrow(
	payment,
	["payment.accepted", "payment.rejected"],
);

type multipleInformationsPayloadCheck = ExpectType<
	typeof multipleInformationsPayload,
	120 | "insufficient funds",
	"strict"
>;
