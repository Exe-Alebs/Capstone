"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var urlSchema = new mongoose_1.Schema({
    longUrl: {
        type: String,
        required: true,
    },
    urlCode: {
        type: String,
        required: true,
    },
    shortUrl: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    clicks: {
        type: Number,
        default: 0,
    },
});
var Url = mongoose_1.default.model('Url', urlSchema);
exports.default = Url;
