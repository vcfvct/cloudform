"use strict";
/* Generated from https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json, version 1.13.0 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class BlockDeviceMapping {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.BlockDeviceMapping = BlockDeviceMapping;
class EbsBlockDevice {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.EbsBlockDevice = EbsBlockDevice;
class TimeBasedAutoScaling {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeBasedAutoScaling = TimeBasedAutoScaling;
class Instance extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::OpsWorks::Instance', properties);
    }
}
exports.default = Instance;
