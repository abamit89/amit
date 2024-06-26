import { getUser } from '../api/getUser';
import { User } from '../../types/user';

// Mock user data
const mockUser: User = {
  id: 8512,
  name: 'Test User',
  department: 'Billing',
  avatar: 'https://www.blu.com/assets/ekvyfobrxnqa/3KnddNk486m6BxUZB62UNA/5d3dc989c8d600c309164103944b1b24/cigar.jpg?sw=64&sh=64&sm=fit'
};

// Mock the getUser function
jest.mock('../api/getUser', () => ({
  getUser: jest.fn(() => Promise.resolve(mockUser)),
}));

describe('getUser', () => {
  it('should return user data', async () => {
    const user = await getUser();
    expect(user).toEqual(mockUser);
  });
});
