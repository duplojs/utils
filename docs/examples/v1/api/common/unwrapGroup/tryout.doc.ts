import { unwrapGroup, wrapValue } from "@duplojs/utils";

const group = {
	userId: wrapValue(42),
	role: "admin",
};

const result = unwrapGroup(group);
// { userId: 42, role: "admin" }

const stillWrapped = group.userId;
// WrappedValue<number>
