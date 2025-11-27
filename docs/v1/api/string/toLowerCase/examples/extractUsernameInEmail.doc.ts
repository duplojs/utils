import { A, DString, pipe } from "@duplojs/utils";

const email = "ZeRiix@Example.COM";
const username = pipe(
	email,
	DString.toLowerCase,
	DString.split("@"),
	A.first,
);
// username: zeriix
