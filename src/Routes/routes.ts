import { Router } from 'express';
import { shortenUrl } from '../controller/urlController';
import {
  createUser,
  loginUser,
  logoutUser,
} from '../controller/userController';
import { getUserLinks, getLinkDetails } from '../controller/linkController';
import {
  getUrlAnalytics,
  trackUrlClick,
} from '../controller/analyticsController';

const router = Router();

//endpoint to signup and login and logout
router.post('/signup', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

//endpoint to get all links for a user
router.get('/links/:userId', getUserLinks);
router.get('/links/:linkId', getLinkDetails);

//endpont to get analytics for a link
router.get('/analytics/:urlCode', getUrlAnalytics);
router.get('/analytics/click', trackUrlClick);

// Endpoint to shorten the URL
router.post('/shorten', shortenUrl);

//

// Export the router
export default router;
