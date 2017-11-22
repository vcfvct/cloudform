"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.11.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class RuleGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::RuleGroup', properties, dependsOn);
    }
}
exports.RuleGroup = RuleGroup;
class PatchFilter extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::PatchFilter', properties, dependsOn);
    }
}
exports.PatchFilter = PatchFilter;
class Rule extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::Rule', properties, dependsOn);
    }
}
exports.Rule = Rule;
class PatchFilterGroup extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::PatchFilterGroup', properties, dependsOn);
    }
}
exports.PatchFilterGroup = PatchFilterGroup;
class PatchBaseline extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::SSM::PatchBaseline', properties, dependsOn);
    }
}
exports.default = PatchBaseline;