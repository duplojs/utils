import { DArray, DString, pipe } from "@duplojs/utils";

const email = "ZeRiix@Example.COM";
const username = pipe(
	email,
	DString.toLowerCase,
	DString.split("@"),
	DArray.first,
);
// username: zeriix
