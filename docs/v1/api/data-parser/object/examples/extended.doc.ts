import { DPE, E, unwrap, A, N, innerPipe, O } from "@duplojs/utils";

const schema = DPE
	.object({
		name: DPE.string(),
		tags: DPE.string().array(),
	})
	.refine(
		innerPipe(
			O.getProperty("tags"),
			A.length,
			N.less(5),
		),
		{
			errorMessage: "tags.too-many",
		},
	);

const result = schema.parse({
	name: "Docs",
	tags: ["api", "parser"],
});

if (E.isRight(result)) {
	const value = unwrap(result);
} else {
	const error = unwrap(result);
}
