import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export interface ArrayGroupFunctionOutput<GenericGroupeName extends string = string, GenericGroupeValue extends unknown = unknown> {
    group: GenericGroupeName;
    value: GenericGroupeValue;
}
export declare function groupOutput<GenericGroupeValue extends unknown, GenericGroupeName extends string>(group: GenericGroupeName): (value: GenericGroupeValue) => ArrayGroupFunctionOutput<GenericGroupeName, GenericGroupeValue>;
export declare function groupOutput<GenericGroupeValue extends unknown, GenericGroupeName extends string>(group: GenericGroupeName, value: GenericGroupeValue): ArrayGroupFunctionOutput<GenericGroupeName, GenericGroupeValue>;
export interface ArrayGroupFunctionParams {
    index: number;
    output: typeof groupOutput;
}
export type ArrayGroupResult<GenericOutput extends ArrayGroupFunctionOutput> = SimplifyTopLevel<{
    [Output in GenericOutput as Output["group"]]?: Output["value"][];
}>;
export declare function group<GenericArray extends readonly unknown[], GenericOutput extends ArrayGroupFunctionOutput>(theFunction: (element: GenericArray[number], params: ArrayGroupFunctionParams) => GenericOutput): (array: GenericArray) => ArrayGroupResult<GenericOutput>;
export declare function group<GenericElement extends unknown, GenericOutput extends ArrayGroupFunctionOutput>(array: readonly GenericElement[], theFunction: (element: GenericElement, params: ArrayGroupFunctionParams) => GenericOutput): ArrayGroupResult<GenericOutput>;
