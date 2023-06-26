"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Analytics = void 0;
var mongoose_1 = require("mongoose");
// Schema for Analytics model
var analyticsSchema = new mongoose_1.Schema({
    url: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Url',
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    ipAddress: {
        type: String,
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});
// Analytics model
exports.Analytics = mongoose_1.default.model('Analytics', analyticsSchema);
exports.default = exports.Analytics;
