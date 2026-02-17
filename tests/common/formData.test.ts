import { pipe, type ExpectType } from "@scripts";
import { createFormData, TheFormData } from "@scripts/common/formData";

describe("formData", () => {
	it("creates a TheFormData instance with flattened entries from nested values", () => {
		const avatar = new File(["avatar-content"], "avatar.txt", { type: "text/plain" });
		const theFormData = createFormData({
			name: "math",
			profile: {
				avatar,
				tags: ["core", undefined, "utils"],
			},
			empty: undefined,
		});

		expect(theFormData).toBeInstanceOf(TheFormData);
		expect(theFormData.inputValues).toStrictEqual({
			name: "math",
			profile: {
				avatar,
				tags: ["core", undefined, "utils"],
			},
			empty: undefined,
		});
		expect(Array.from(theFormData.entries())).toStrictEqual([
			["name", "math"],
			["profile/*\\avatar", avatar],
			["profile/*\\tags/*\\[0]", "core"],
			["profile/*\\tags/*\\[2]", "utils"],
		]);
	});

	it("keeps top-level arrays and nested arrays in toFlatEntries", () => {
		const avatar = new File(["x"], "x.txt", { type: "text/plain" });
		const entries = Array.from(
			TheFormData.toFlatEntries({
				list: ["a", undefined, "b"],
				files: [avatar],
				nested: [{ value: "ok" }],
			}),
		);

		expect(entries).toStrictEqual([
			["list/*\\[0]", "a"],
			["list/*\\[2]", "b"],
			["files/*\\[0]", avatar],
			["nested/*\\[0]/*\\value", "ok"],
		]);
	});

	it("supports root primitive values and root arrays in toFlatEntries", () => {
		const primitiveEntries = Array.from(TheFormData.toFlatEntries("root-value"));
		const rootArrayEntries = Array.from(TheFormData.toFlatEntries(["first", "second"]));

		expect(primitiveEntries).toStrictEqual([["", "root-value"]]);
		expect(rootArrayEntries).toStrictEqual([
			["[0]", "first"],
			["[1]", "second"],
		]);
	});

	it("ignores invalid prototype-pollution entries in fromEntries", () => {
		const result = TheFormData.fromEntries(
			[
				["__proto__/*\\polluted", "x"],
				["constructor/*\\prototype", "y"],
				["prototype", "z"],
			],
			20,
		);

		expect(result).toStrictEqual({});
	});

	it("reconstructs a deep object from flattened entries", () => {
		const result = TheFormData.fromEntries(
			[
				["user/*\\name", "math"],
				["user/*\\tags/*\\[0]", "core"],
				["user/*\\tags/*\\[1]", "utils"],
				["/*\\tags/*\\[10]", "utils"],
				["user/*\\tags/*\\[25]", "ignored"],
			],
			10,
		);

		const tags: string[] = [];
		tags[10] = "utils";

		expect(result).toStrictEqual({
			user: {
				name: "math",
				tags: [
					"core",
					"utils",
				],
			},
			"": { tags },
		});
	});

	it("can be used in pipe through createFormData", () => {
		const result = pipe(
			{
				name: "duplo",
			},
			createFormData,
		);

		expect(result.get("name")).toBe("duplo");

		type check = ExpectType<
			typeof result,
			TheFormData<{ name: string }>,
			"strict"
		>;
	});
});
