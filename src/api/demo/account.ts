import { defHttp } from '@/utils/http/axios';

enum Api {
  SESSION_TIMEOUT = '/user/sessionTimeout',
  TOKEN_EXPIRED = '/user/tokenExpired',
}

export const sessionTimeoutApi = () => defHttp.post<void>({ url: Api.SESSION_TIMEOUT });

export const tokenExpiredApi = () => defHttp.post<void>({ url: Api.TOKEN_EXPIRED });
