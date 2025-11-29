import { A, DString, pipe } from "@duplojs/utils";

const result = pipe(
	"duplojs trpc nestjs expressjs",
	DString.split(" "),
	A.map(DString.capitalize),
	A.join(" "),
);
