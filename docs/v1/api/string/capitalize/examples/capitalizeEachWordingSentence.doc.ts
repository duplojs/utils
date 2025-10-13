import { DArray, DString, pipe } from "@duplojs/utils";

const result = pipe(
	"duplojs trpc nestjs expressjs",
	DString.split(" "),
	DArray.map(DString.capitalize),
	DArray.join(" "),
);
