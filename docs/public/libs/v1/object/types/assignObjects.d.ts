import { type SimplifyTopLevel } from "../../common/types/simplifyTopLevel";
export type AssignObjects<GenericFirstObject extends object, GenericSecondObject extends object> = SimplifyTopLevel<Omit<GenericFirstObject, keyof GenericSecondObject> & GenericSecondObject>;
