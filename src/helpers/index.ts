//this will help us encrypt the password
import crypto from 'crypto';

const SECRET = 'GARUDA-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64');
export const authentication = (email: string, salt: string, password: string) => {
  return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};