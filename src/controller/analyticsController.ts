import { Request, Response } from 'express';
import Url, { IUrl } from '../model/url';
import Analytics, { IAnalytics } from '../model/analytics';

// Track URL click
export const trackUrlClick = async (req: Request, res: Response) => {
  const urlCode = req.params.urlCode;

  try {
    // Find the URL associated with the urlCode
    const url: IUrl | null = await Url.findOne({ urlCode });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Save analytics data
    const analyticsData: IAnalytics = new Analytics({
      url: url._id,
      ipAddress: req.ip,
      timestamp: new Date(),
    });
    await analyticsData.save();

    // Increment the click count for the URL
    url.clicks++;
    await url.save();

    res.status(200).json({ message: 'URL click tracked successfully' });
  } catch (error) {
    console.error('Error tracking URL click:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get URL analytics
export const getUrlAnalytics = async (req: Request, res: Response) => {
  const urlCode = req.params.urlCode;

  try {
    // Find the URL associated with the urlCode
    const url: IUrl | null = await Url.findOne({ urlCode });

    if (!url) {
      return res.status(404).json({ error: 'URL not found' });
    }

    // Find analytics data for the URL
    const analyticsData: IAnalytics[] = await Analytics.find({ url: url._id });

    res.status(200).json({ analyticsData });
  } catch (error) {
    console.error('Error getting URL analytics:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
