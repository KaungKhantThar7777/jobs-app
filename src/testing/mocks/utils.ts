import { RestRequest } from 'msw';

import { IS_TEST } from '@/config/constants';
import { AuthUser } from '@/features/auth';
import { testData } from '@/testing/test-data';

import { db } from './db';

const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

export const AUTH_COOKIE = 'auth-token';

const sanitizeUser = (user: any): AuthUser => {
  const sanitizedUser = { ...user };
  delete sanitizedUser.password;
  return sanitizedUser;
};

export const getUser = () =>
  sanitizeUser(testData.users[0]);

export const authenticate = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const user = db.user.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (user?.password === password) {
    const sanitizedUser = sanitizeUser(user);
    const encodedToken = AUTH_TOKEN;

    return {
      user: sanitizedUser,
      jwt: encodedToken,
    };
  }

  throw new Error('Invalid email or password');
};

export const requireAuth = ({
  req,
  showThrow = true,
}: {
  req: RestRequest;
  showThrow?: boolean;
}) => {
  if (IS_TEST) {
    return getUser();
  } else {
    const encodedToken = req.cookies[AUTH_COOKIE];
    console.log(req.cookies);
    console.log({ encodedToken });
    if (encodedToken !== AUTH_TOKEN) {
      if (showThrow) {
        throw new Error(
          'No Authorization token provided'
        );
      }

      return null;
    }
    return getUser();
  }
};
