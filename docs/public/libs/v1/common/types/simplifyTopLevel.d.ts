export type SimplifyTopLevel<GenericObject extends unknown> = GenericObject extends object ? {
    [Prop in keyof GenericObject]: GenericObject[Prop];
} : GenericObject;
