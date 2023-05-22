import { defHttp } from '@/utils/http/axios';

enum Api {
  GetBanner = '/banner/',
  GetNew = '/news/',
  GetAnnouncement = '/announcement/',
  GetAwards = '/awards/',
}

export function GetBanner(params) {
  return defHttp.get({ url: Api.GetBanner, params });
}
export function PostBanner(params) {
  return defHttp.post({ url: Api.GetBanner, params });
}
export function PutBanner(params, id) {
  return defHttp.put({ url: Api.GetBanner + id + '/', params });
}
export function DeleteBanner(id: string) {
  return defHttp.delete({ url: Api.GetBanner + id + '/' });
}
export function GetNews(params) {
  return defHttp.get({ url: Api.GetNew, params });
}
export function GetSingleNews(id) {
  return defHttp.get({ url: Api.GetNew + id + '/' });
}
export function PostNews(params) {
  return defHttp.post({ url: Api.GetNew, params });
}
export function PutNews(params, id) {
  return defHttp.put({ url: Api.GetNew + id + '/', params });
}
export function DeleteNews(id: string) {
  return defHttp.delete({ url: Api.GetNew + id + '/' });
}
export function GetAnnouncement(params) {
  return defHttp.get({ url: Api.GetAnnouncement, params });
}
export function GetSingleAnnouncement(id) {
  return defHttp.get({ url: Api.GetAnnouncement + id + '/' });
}
export function PostAnnouncement(params) {
  return defHttp.post({ url: Api.GetAnnouncement, params });
}
export function PutAnnouncement(params, id) {
  return defHttp.put({ url: Api.GetAnnouncement + id + '/', params });
}
export function DeleteAnnouncement(id: string) {
  return defHttp.delete({ url: Api.GetAnnouncement + id + '/' });
}

export function GetAwards(params) {
  return defHttp.get({ url: Api.GetAwards, params });
}
export function GetSingleAwards(id) {
  return defHttp.get({ url: Api.GetAwards + id + '/' });
}
export function PostAwards(params) {
  return defHttp.post({ url: Api.GetAwards, params });
}
export function PutAwards(params, id) {
  return defHttp.put({ url: Api.GetAwards + id + '/', params });
}
export function DeleteAwards(id: string) {
  return defHttp.delete({ url: Api.GetAwards + id + '/' });
}
