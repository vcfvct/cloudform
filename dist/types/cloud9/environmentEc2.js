"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Repository {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Repository = Repository;
class EnvironmentEC2 extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::Cloud9::EnvironmentEC2', properties);
    }
}
exports.default = EnvironmentEC2;
