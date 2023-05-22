import { UserInfo } from '@/models/user';

/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  email: string;
  password: string;
  type: string;
}

/**
 * @description: Login interface return value
 */
export interface LoginResultModel {
  token: string;
}

/**
 * @description: Get user information return value
 */
export interface GetUserInfoModel {
  user: UserInfo;
}
