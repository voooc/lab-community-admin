import { defHttp } from '@/utils/http/axios';

enum Api {
  GetSystemUser = '/user/user/',
  GetSystemDepartment = '/user/departments/',
  GetSystemRole = '/user/roles/',
  GetSystemVeify = '/user/verify/',
}

export function getUserInfo(params) {
  return defHttp.get({ url: Api.GetSystemUser, params });
}
export function PutUserInfo(params, id) {
  return defHttp.put({ url: Api.GetSystemUser + id + '/', params });
}
export function DeleteUser(id: string) {
  return defHttp.delete({ url: Api.GetSystemUser + id + '/' });
}
export function GetDepartmentInfo(params) {
  return defHttp.get({ url: Api.GetSystemDepartment, params });
}
export function GetRoleInfo(params) {
  return defHttp.get({ url: Api.GetSystemRole, params });
}
export function PostDepartment(params) {
  return defHttp.post({ url: Api.GetSystemDepartment, params });
}
export function PutDepartment(params, id) {
  return defHttp.put({ url: Api.GetSystemDepartment + id + '/', params });
}
export function DeleteDepartment(id: string) {
  return defHttp.delete({ url: Api.GetSystemDepartment + id + '/' });
}

export function GetVeifyInfo(params) {
  return defHttp.get({ url: Api.GetSystemVeify, params });
}
export function PutVeify(params, id) {
  return defHttp.put({ url: Api.GetSystemVeify + id + '/', params });
}
export function DeleteVeify(id: string) {
  return defHttp.delete({ url: Api.GetSystemVeify + id + '/' });
}
