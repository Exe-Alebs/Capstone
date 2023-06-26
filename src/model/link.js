"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var mongoose_1 = require("mongoose");
// Schema for Link model
var linkSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    url: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Url',
        required: true,
    },
});
// Link model
exports.Link = mongoose_1.default.model('Link', linkSchema);
exports.default = exports.Link;
