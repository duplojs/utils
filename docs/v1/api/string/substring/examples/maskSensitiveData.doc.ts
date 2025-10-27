import { DString, DArray, pipe } from "@duplojs/utils";

const creditCard = "1234-5678-9012-3456";

const result = pipe(
	creditCard,
	DString.split("-"),
	DArray.slice(0, -1),
	DArray.map(() => "****"),
	DArray.push(
		pipe(
			creditCard,
			DString.split("-"),
			DArray.last,
		),
	),
	DArray.join("-"),
);

// result: "****-****-****-3456"

// Alternative: Masquer une partie d'un numéro de téléphone
const phoneNumber = "+33612345678";
const maskedPhone = pipe(
	phoneNumber,
	(phone) => pipe(
		DString.substring(phone, 0, 6),
		DString.concat(DString.repeat("*", phone.length - 8)),
		DString.concat(DString.substring(phone, phone.length - 2)),
	),
);

// maskedPhone: "+33612****78"
