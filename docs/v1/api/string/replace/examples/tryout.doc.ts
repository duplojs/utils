import { DString } from "@duplojs/utils";

const input = "DuploJS is the best.";
const result = DString.replace(input, "best", "most complete");
// result: "DuploJS is the most complete."

const pattern = /\d/;
const result2 = DString.replace("Order 1234 is ready.", pattern, "*");
// result2: "Order *234 is ready."
