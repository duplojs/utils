import { DPE, E, pipe, when } from "@duplojs/utils";

const input = {
	name: "Bob",
	role: "admin",
};
const inputSchema = DPE.object({
	name: DPE.string(),
	role: DPE.union([
		DPE.literal("admin"),
		DPE.literal("client"),
		DPE.literal("manager"),
	]),
});

pipe(
	input,
	(value) => inputSchema.parse(value),
	E.whenHasInformation(
		"success",
		(value) => value,
	),
)