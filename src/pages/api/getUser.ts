import { useState, useEffect } from 'react';
import type { NextApiRequest, NextApiResponse } from 'next';
import userData from '../../../__mocks__/user.json';
import { User } from 'src/types/user';

export const getUser = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Data fetching with mock data
    setUser(userData);
  }, []);
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const user = await getUser();
  res.status(200).json(user);
};
