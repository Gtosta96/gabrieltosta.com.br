import mailchimp, { Status } from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

import {
  MAILCHIMP_API_KEY,
  MAILCHIMP_API_SERVER,
  MAILCHIMP_AUDIENCE_ID,
} from '../../config/environment';

mailchimp.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_API_SERVER, // e.g. us1
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed' as Status,
    });

    return res.status(201).json({ success: true });
  } catch (error) {
    return res.status(500).json(error);
  }
};
