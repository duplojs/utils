import { escapeRegExp } from "@scripts";

const raw = "price (EUR) + taxes?";
const escaped = escapeRegExp(raw);

const regex = new RegExp(escaped);
// regex matches the literal string "price (EUR) + taxes?"
