import { E } from "@scripts";

const mayBeInput = true ? true : undefined;

const result = E.nullish(mayBeInput);

// type: E.EitherNullishEmpty<undefined> | E.EitherNullishFilled<true>
