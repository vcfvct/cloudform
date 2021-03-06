/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Action {
    TargetGroupArn: Value<string>
    Type: Value<string>

    constructor(properties: Action) {
        Object.assign(this, properties)
    }
}

export class RuleCondition {
    Field?: Value<string>
    Values?: List<Value<string>>

    constructor(properties: RuleCondition) {
        Object.assign(this, properties)
    }
}

export interface ListenerRuleProperties {
    Actions: List<Action>
    Conditions: List<RuleCondition>
    ListenerArn: Value<string>
    Priority: Value<number>
}

export default class ListenerRule extends ResourceBase {
    constructor(properties?: ListenerRuleProperties) {
        super('AWS::ElasticLoadBalancingV2::ListenerRule', properties)
    }
}
