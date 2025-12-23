import { type IsEqual, type Or } from "../../common";
export type TemplateLiteralContainLargeType<GenericValue extends string> = (GenericValue extends `${infer InferredFirst}${infer InferredLast}` ? Or<[
    IsEqual<InferredFirst, `${number}`>,
    IsEqual<InferredFirst, `${bigint}`>
]> extends false ? TemplateLiteralContainLargeType<InferredLast> : true : GenericValue extends "" ? false : true) extends false ? false : true;
