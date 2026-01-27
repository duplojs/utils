import { E } from "@scripts";

const mayBeInput = true ? true : undefined;

const result = E.nullish(mayBeInput);

// type: E.NullishEmpty<undefined> | E.NullishFilled<true>
