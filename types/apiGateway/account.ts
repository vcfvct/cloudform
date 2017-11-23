/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
   
import {ResourceBase} from '../resource'
import {Value} from '../dataTypes'



export interface AccountProperties {
    CloudWatchRoleArn?: Value<string>
}

export default class Account extends ResourceBase {
    constructor(properties: AccountProperties, dependsOn?: Value<string> | Value<string>[]) {
        super('AWS::ApiGateway::Account', properties, dependsOn)
    }
}
