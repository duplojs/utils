import { toWrappedValue } from "@scripts";

const already = toWrappedValue({ id: 1 });

// type: WrappedValue<{ id: number }>

const again = toWrappedValue(already);

// type: WrappedValue<{ id: number }>
