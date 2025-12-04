import { addWrappedProperties, wrapValue } from "@duplojs/utils";

const wrappedUser = wrapValue({ id: 1, name: "Alice" });

const enriched = addWrappedProperties(wrappedUser, ({ wrappedValue }) => ({
	displayName: `${wrappedValue.name} #${wrappedValue.id}`,
}));

// enriched: WrappedValue<{ id: number; name: string }> & { displayName: string }
