import { defHttp } from '@/utils/http/axios';

enum Api {
  GetUserTotal = '/user/user_total',
}

export function GetUserTotal(params) {
  return defHttp.get({ url: Api.GetUserTotal, params });
}
