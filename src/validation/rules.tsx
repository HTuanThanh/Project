import type { NamePath } from 'antd/es/form/interface';

export const usernameLogin = [{ required: true, message: 'Please enter username or email address.' }];

export const passwordLogin = [{ required: true, message: 'Please enter password.' }];

export const firstName = [{ required: true, message: 'Please enter first name.' }];

export const lastName = [{ required: true, message: 'Please enter last name.' }];

export const email = [
  {
    type: 'email',
    message: 'Email format is incorrect.'
  },
  {
    required: true,
    message: 'Please enter email address.'
  }
];

export const userName = [
  { required: true, message: 'Please enter username.' },
  {
    min: 6,
    message: 'Username must be 6 or more characters in length.'
  },
  {
    max: 36,
    message: 'Username must be 36 or less characters in length.'
  }
];

export const password = [
  {
    required: true,
    message: 'Please enter password.'
  },
  {
    min: 6,
    message: 'Password must be 6 or more characters in length.'
  },
  {
    max: 36,
    message: 'Password must be 36 or less characters in length.'
  }
];

export const confirmPw = [
  {
    required: true,
    message: 'Please enter confirm password.'
  },
  ({ getFieldValue }: { getFieldValue: (name: NamePath) => any }) => ({
    validator(_: any, value: any) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('Passwords do not match.'));
    }
  })
];
