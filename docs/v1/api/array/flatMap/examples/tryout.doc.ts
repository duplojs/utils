import { A, type ExpectType } from "@duplojs/utils";

const input = [
	{
		id: "C1",
		tags: ["web", "js"],
	},
	{
		id: "C2",
		tags: ["infra"],
	},
	{
		id: "C3",
		tags: ["api", "queue"],
	},
] as const;

const result = A.flatMap(
	input,
	(category) => A.map(
		category.tags,
		(tag) => ({
			id: category.id,
			tag,
		}),
	),
);

type check = ExpectType<
	typeof result,
	{
		id: "C1" | "C2" | "C3";
		tag: "api" | "queue" | "web" | "js" | "infra";
	}[],
	"strict"
>;
