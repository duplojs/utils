import { DP } from "@duplojs/utils";
import { bench } from "vitest";
import zod from "zod";

describe("data parser", () => {
	describe("string", () => {
		const zodSchema = zod.string();
		const DPSchema = DP.string();

		bench("dataParser", () => {
			DPSchema.parse("test");
		});

		bench("zod", () => {
			zodSchema.parse("test");
		});
	});

	describe("object", () => {
		const zodSchema = zod.object({
			test: zod.string(),
		});
		const DPSchema = DP.object({
			test: DP.string(),
		});

		bench("dataParser", () => {
			DPSchema.parse({ test: "toto" });
		});

		bench("zod", () => {
			zodSchema.parse({ test: "toto" });
		});
	});
});
