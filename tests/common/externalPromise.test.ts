import { createExternalPromise } from "@scripts/common/externalPromise";

describe("externalPromise", () => {
	it("resolve", async() => {
		const { resolve, promise } = createExternalPromise<number>();

		resolve(2);

		await expect(promise).resolves.toBe(2);
	});

	it("reject", async() => {
		const error = new Error();

		const { reject, promise } = createExternalPromise();

		reject(error);

		await expect(promise).rejects.toBe(error);
	});
});
