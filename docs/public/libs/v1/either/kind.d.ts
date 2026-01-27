export declare const createEitherKind: <GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName & import("../string").ForbiddenString<GenericName, "@" | "/">) => import("../common").KindHandler<import("../common").KindDefinition<`@DuplojsUtilsEither/${GenericName}`, GenericKindValue>>;
export declare const informationKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/information", string>>;
/**
 * @deprecated use informationKind
 */
export declare const eitherInformationKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/information", string>>;
