import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class FieldToMatch {
    Type: Value<string>;
    Data?: Value<string>;
    constructor(properties: FieldToMatch);
}
export declare class SqlInjectionMatchTuple {
    TextTransformation: Value<string>;
    FieldToMatch: FieldToMatch;
    constructor(properties: SqlInjectionMatchTuple);
}
export interface SqlInjectionMatchSetProperties {
    SqlInjectionMatchTuples?: List<SqlInjectionMatchTuple>;
    Name: Value<string>;
}
export default class SqlInjectionMatchSet extends ResourceBase {
    constructor(properties?: SqlInjectionMatchSetProperties);
}
