import { DPE, type E, type ExpectType } from "@duplojs/utils";

const schema = DPE
	.tuple([
		DPE.string(),
		DPE.number(),
	])
	.rest(DPE.boolean())
	.min(3)
	.max(4)
	.refine(
		([label, priority]) => (
			label.startsWith("task-")
			&& priority > 0
		),
		{
			errorMessage: "tuple.invalid-task",
		},
	);

const result = schema.parse([
	"task-doc",
	2,
	true,
]);

type check = ExpectType<
	typeof result,
	E.Error<DPE.DataParserError> | E.Success<[string, number, ...boolean[]]>,
	"strict"
>;
