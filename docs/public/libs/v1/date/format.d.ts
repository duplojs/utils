import type { TheDate } from "./types";
import type { Timezone } from "./timezone";
export declare function format<GenericInput extends TheDate, GenericFormat extends string, GenericTimezone extends Timezone>(formatString: GenericFormat, timezone: GenericTimezone): (input: GenericInput) => string;
export declare function format<GenericInput extends TheDate, GenericFormat extends string, GenericTimezone extends Timezone>(input: GenericInput, formatString: GenericFormat, timezone: GenericTimezone): string;
