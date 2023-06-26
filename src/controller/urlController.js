"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrl = void 0;
var shortid_1 = require("shortid");
var valid_url_1 = require("valid-url");
var url_1 = require("../model/url");
var qr = require('qrcode');
var shortenUrl = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, longUrl, customSlug, baseUrl, urlCode, url, shortUrl, qrCodeData, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, longUrl = _a.longUrl, customSlug = _a.customSlug;
                baseUrl = process.env.BASE_URL || 'http://localhost:4000';
                // Check base URL
                if (!baseUrl) {
                    return [2 /*return*/, res.status(500).json('Internal error. Please come back later')];
                }
                urlCode = '';
                if (customSlug) {
                    // Check if the customSlug is 6 letters long
                    if (customSlug.length !== 6) {
                        return [2 /*return*/, res.status(400).json('Custom slug must be 6 characters long')];
                    }
                    urlCode = customSlug;
                }
                else {
                    urlCode = shortid_1.default.generate();
                }
                if (!valid_url_1.default.isUri(longUrl)) return [3 /*break*/, 9];
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                return [4 /*yield*/, url_1.default.findOne({ longUrl: longUrl })];
            case 2:
                url = _b.sent();
                if (!url) return [3 /*break*/, 3];
                res.json(url);
                return [3 /*break*/, 6];
            case 3:
                shortUrl = urlCode;
                url = new url_1.default({
                    longUrl: longUrl,
                    shortUrl: shortUrl,
                    urlCode: urlCode,
                    date: new Date(),
                });
                return [4 /*yield*/, url.save()];
            case 4:
                _b.sent();
                return [4 /*yield*/, qr.toDataURL(shortUrl)];
            case 5:
                qrCodeData = _b.sent();
                res.json({ url: url, qrCodeData: qrCodeData });
                _b.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                err_1 = _b.sent();
                console.log(err_1);
                res.status(500).json('Internal server error');
                return [3 /*break*/, 8];
            case 8: return [3 /*break*/, 10];
            case 9:
                res.status(400).json('Invalid long URL');
                _b.label = 10;
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.shortenUrl = shortenUrl;
