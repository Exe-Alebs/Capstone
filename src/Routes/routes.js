"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var urlController_1 = require("../controller/urlController");
var userController_1 = require("../controller/userController");
var linkController_1 = require("../controller/linkController");
var analyticsController_1 = require("../controller/analyticsController");
var router = (0, express_1.Router)();
//endpoint to signup and login and logout
router.post('/signup', userController_1.createUser);
router.post('/login', userController_1.loginUser);
router.post('/logout', userController_1.logoutUser);
//endpoint to get all links for a user
router.get('/links/:userId', linkController_1.getUserLinks);
router.get('/links/:linkId', linkController_1.getLinkDetails);
//endpont to get analytics for a link
router.get('/analytics/:urlCode', analyticsController_1.getUrlAnalytics);
router.get('/analytics/click', analyticsController_1.trackUrlClick);
// Endpoint to shorten the URL
router.post('/shorten', urlController_1.shortenUrl);
//
// Export the router
exports.default = router;
