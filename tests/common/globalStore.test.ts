import { createGlobalStore, type ExpectType } from "@scripts";

declare module "@scripts" {
	interface GlobalStore {
		testStore: "test" | "toto";
	}
}

it("globalStore", () => {
	const myStore = createGlobalStore("testStore", "test");

	expect(myStore.value).toBe("test");

	type Check = ExpectType<
		typeof myStore.value,
		"test" | "toto",
		"strict"
	>;

	myStore.set("toto");

	expect(myStore.value).toBe("toto");
	expect((Object as any)[Symbol.for("@duplojs/utils/global-store")].testStore).toBe("toto");

	const myCloneStore = createGlobalStore("testStore", "test");

	expect(myCloneStore.value).toBe("toto");
});
