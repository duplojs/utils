import { DObject } from "@duplojs/utils";

const input = { user: { address: { city: "Paris" } } } as const;
const result = DObject.getDeepProperty(input, "user.address.city");
// result: "Paris"
