import { O } from "@duplojs/utils";

const input = { user: { address: { city: "Paris" } } } as const;
const result = O.getDeepProperty(input, "user.address.city");
// result: "Paris"
