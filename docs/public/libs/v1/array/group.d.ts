import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export interface ArrayGroupFunctionOutput<GenericGroupName extends string = string, GenericGroupValue extends unknown = unknown> {
    group: GenericGroupName;
    value: GenericGroupValue;
}
export declare function groupOutput<GenericGroupValue extends unknown, GenericGroupName extends string>(group: GenericGroupName): (value: GenericGroupValue) => ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export declare function groupOutput<GenericGroupValue extends unknown, GenericGroupName extends string>(group: GenericGroupName, value: GenericGroupValue): ArrayGroupFunctionOutput<GenericGroupName, GenericGroupValue>;
export interface ArrayGroupFunctionParams {
    index: number;
    output: typeof groupOutput;
}
export type ArrayGroupResult<GenericOutput extends ArrayGroupFunctionOutput> = SimplifyTopLevel<{
    [Output in GenericOutput as Output["group"]]?: Output["value"][];
}>;
export declare function group<GenericArray extends readonly unknown[], GenericOutput extends ArrayGroupFunctionOutput>(theFunction: (element: GenericArray[number], params: ArrayGroupFunctionParams) => GenericOutput): (array: GenericArray) => ArrayGroupResult<GenericOutput>;
export declare function group<GenericElement extends unknown, GenericOutput extends ArrayGroupFunctionOutput>(array: readonly GenericElement[], theFunction: (element: GenericElement, params: ArrayGroupFunctionParams) => GenericOutput): ArrayGroupResult<GenericOutput>;
