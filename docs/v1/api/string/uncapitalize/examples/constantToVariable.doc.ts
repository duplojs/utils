import { A, DString, innerPipe, pipe } from "@duplojs/utils";

const result = pipe(
	"USER_NAME API_KEY DATABASE_URL",
	DString.split(" "),
	A.map(
		innerPipe(
			DString.toLowerCase,
			DString.split("_"),
			A.map(
				(word, { index }) => index === 0
					? word
					: DString.capitalize(word),
			),
			A.join(""),
		),
	),
);
// result: ["userName", "apiKey", "databaseUrl"]
