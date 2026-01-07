import { unwrap, wrapValue } from "@scripts";

const wrapped = wrapValue("value");

// type: WrappedValue<"value">

const value = unwrap(wrapped);

// type: "value"
