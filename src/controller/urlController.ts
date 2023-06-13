import { Request, Response } from 'express';
import shortid from 'shortid';
import validUrl from 'valid-url';

import Url from '../model/url';

export const shortenUrl = async (req: Request, res: Response) => {
  const { longUrl, customSlug } = req.body;
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

  // Check base URL
  if (!baseUrl) {
    return res.status(500).json('Internal error. Please come back later');
  }

  // Create URL code
  const urlCode = customSlug || shortid.generate();

  // Check long URL
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = baseUrl + '/' + urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();

        res.json(url);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Internal server error');
    }
  } else {
    res.status(400).json('Invalid long URL');
  }
};
