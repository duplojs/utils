import { S } from "@duplojs/utils";

const input = "DuploJS is the best.";
const result = S.replace(input, "best", "most complete");
// result: "DuploJS is the most complete."

const pattern = /\d/;
const result2 = S.replace("Order 1234 is ready.", pattern, "*");
// result2: "Order *234 is ready."
