import { G, pipe } from "@scripts";

G.groupOutput(
	"even",
	2,
); // { group: "even", value: 2 }

pipe(
	"alpha",
	G.groupOutput("word"),
); // { group: "word", value: "alpha" }

G.groupOutput(
	"status",
	{
		ok: true,
	},
); // { group: "status", value: { ok: true } }
