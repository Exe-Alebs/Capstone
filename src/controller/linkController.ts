import { Request, Response } from 'express';
import Link, { ILink } from '../model/link';
import Url, { IUrl } from '../model/url';

// Get all links for a user
export const getUserLinks = async (req: Request, res: Response) => {
  const userId = req.params.userId;

  try {
    // Find all links associated with the user
    const links: ILink[] = await Link.find({ user: userId }).populate('url');

    res.status(200).json({ links });
  } catch (error) {
    console.error('Error getting user links:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Get link details
export const getLinkDetails = async (req: Request, res: Response) => {
  const linkId = req.params.linkId;

  try {
    // Find the link by ID and populate the associated URL
    const link: ILink | null = await Link.findById(linkId).populate('url');

    if (!link) {
      return res.status(404).json({ error: 'Link not found' });
    }

    res.status(200).json({ link });
  } catch (error) {
    console.error('Error getting link details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
