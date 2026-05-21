import { type Kind } from "../common";
import { type NewType } from "./newType";
import { type Entity } from "./entity";
import { type Primitive } from "./primitive";
import { type ConstrainedType } from "./constraint";
export declare const evidenceKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/evidence", Record<string, unknown>>>;
export interface Evidence<GenericName extends string = string> extends Kind<typeof evidenceKind.definition, Record<GenericName, unknown>> {
}
export type AppendEvidenceInput = ((Primitive | ConstrainedType | NewType<string, any, any> | Entity) & (Evidence | {}));
export declare function appendEvidence<GenericInput extends AppendEvidenceInput, GenericEvidenceName extends string>(input: GenericInput, evidenceName: GenericEvidenceName): GenericInput & Evidence<GenericEvidenceName>;
export declare function appendEvidence<GenericInput extends AppendEvidenceInput, GenericEvidenceName extends string>(evidenceName: GenericEvidenceName): (input: GenericInput) => GenericInput & Evidence<GenericEvidenceName>;
