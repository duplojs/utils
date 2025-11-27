import { DString, A, pipe, when, innerPipe } from "@duplojs/utils";

const urls = [
	"https://api.example.com/users/   ",
	"https://example.com/products/\t\t",
	"https://example.com/blog/   \n",
];

const result = pipe(
	urls,
	A.map(
		innerPipe(
			DString.trimEnd,
			when(
				DString.endsWith("/"),
				DString.slice(0, -1),
			),
		),
	),
);

// result: ["https://api.example.com/users", "https://example.com/products", "https://example.com/blog"]
