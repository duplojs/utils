import { DPE, type E, A, N, innerPipe, O, type ExpectType } from "@duplojs/utils";

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

type check = ExpectType<
	typeof result,
	E.EitherError<DPE.DataParserError> | E.EitherSuccess<{
		name: string;
		tags: string[];
	}>,
	"strict"
>;
