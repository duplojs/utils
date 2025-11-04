import { DArray, DString, innerPipe, pipe } from "@duplojs/utils";

const result = pipe(
	"USER_NAME API_KEY DATABASE_URL",
	DString.split(" "),
	DArray.map(
		innerPipe(
			DString.toLowerCase,
			DString.split("_"),
			DArray.map(
				(word, { index }) => index === 0
					? word
					: DString.capitalize(word),
			),
			DArray.join(""),
		),
	),
);
// result: ["userName", "apiKey", "databaseUrl"]
