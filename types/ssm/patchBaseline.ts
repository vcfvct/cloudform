/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class RuleGroup {
    PatchRules?: List<Rule>

    constructor(properties: RuleGroup) {
        Object.assign(this, properties)
    }
}

export class PatchFilter {
    Values?: List<Value<string>>
    Key?: Value<string>

    constructor(properties: PatchFilter) {
        Object.assign(this, properties)
    }
}

export class Rule {
    PatchFilterGroup?: PatchFilterGroup
    ApproveAfterDays?: Value<number>
    ComplianceLevel?: Value<string>

    constructor(properties: Rule) {
        Object.assign(this, properties)
    }
}

export class PatchFilterGroup {
    PatchFilters?: List<PatchFilter>

    constructor(properties: PatchFilterGroup) {
        Object.assign(this, properties)
    }
}

export interface PatchBaselineProperties {
    OperatingSystem?: Value<string>
    ApprovedPatches?: List<Value<string>>
    PatchGroups?: List<Value<string>>
    Description?: Value<string>
    ApprovedPatchesComplianceLevel?: Value<string>
    ApprovalRules?: RuleGroup
    GlobalFilters?: PatchFilterGroup
    Name: Value<string>
    RejectedPatches?: List<Value<string>>
}

export default class PatchBaseline extends ResourceBase {
    constructor(properties?: PatchBaselineProperties) {
        super('AWS::SSM::PatchBaseline', properties)
    }
}
