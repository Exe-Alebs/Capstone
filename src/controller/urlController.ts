import { Request, Response } from 'express';
import shortid from 'shortid';
import validUrl from 'valid-url';
import Url from '../model/url';

const qr = require('qrcode');

export const shortenUrl = async (req: Request, res: Response) => {
  const { longUrl, customSlug } = req.body;
  const baseUrl = process.env.BASE_URL || 'http://localhost:4000';

  // Check base URL
  if (!baseUrl) {
    return res.status(500).json('Internal error. Please come back later');
  }

  // Create URL code
  let urlCode = '';

  if (customSlug) {
    // Check if the customSlug is 6 letters long
    if (customSlug.length !== 6) {
      return res.status(400).json('Custom slug must be 6 characters long');
    }

    urlCode = customSlug;
  } else {
    urlCode = shortid.generate();
  }

  // Check long URL
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });

      if (url) {
        res.json(url);
      } else {
        const shortUrl = urlCode;

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          date: new Date(),
        });

        await url.save();
        const qrCodeData = await qr.toDataURL(shortUrl);

        res.json({ url, qrCodeData });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Internal server error');
    }
  } else {
    res.status(400).json('Invalid long URL');
  }
};
