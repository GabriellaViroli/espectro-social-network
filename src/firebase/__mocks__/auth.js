export const loginUser = jest.fn(() => Promise.resolve({}));
export const loginGoogle = jest.fn(() => Promise.resolve({}));
export const newUser = jest.fn(() => Promise.resolve({}));
export const logout = jest.fn(() => Promise.resolve({}));
export const auth = jest.fn(() => (
  {
    currentUser: {
      displayName: 'gabriella',
      uid: 'uid',
    },
  }));
export const getAuth = jest.fn(() => (
  {
    currentUser: {
      displayName: 'gabriela',
      uid: 'uid',
    },
  }));

export const getUser = jest.fn(() => ({
  displayName: 'gabriella',
  uid: 'uid',
}));
