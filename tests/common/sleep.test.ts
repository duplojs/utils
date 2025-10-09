import { sleep } from "@scripts/common/sleep";

it("sleep", async() => {
	await expect(sleep()).resolves.toBe(undefined);
});
