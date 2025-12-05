export type DeepPartial<GenericPattern extends object> = {
    [Prop in keyof GenericPattern]?: GenericPattern[Prop] extends object ? DeepPartial<GenericPattern[Prop]> : GenericPattern[Prop];
};
