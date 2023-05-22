import { defHttp } from '@/utils/http/axios';

enum Api {
  GetCategory = '/category/',
  GetTag = '/tag/',
  GetArticle = '/article/',
}

export function GetCategory(params) {
  return defHttp.get({ url: Api.GetCategory, params });
}
export function PostCategory(params) {
  return defHttp.post({ url: Api.GetCategory, params });
}
export function PutCategory(params, id) {
  return defHttp.put({ url: Api.GetCategory + id + '/', params });
}
export function DeleteCategory(id: string) {
  return defHttp.delete({ url: Api.GetCategory + id + '/' });
}
export function GetTag(params) {
  return defHttp.get({ url: Api.GetTag, params });
}
export function PostTag(params) {
  return defHttp.post({ url: Api.GetTag, params });
}
export function PutTag(params, id) {
  return defHttp.put({ url: Api.GetTag + id + '/', params });
}
export function DeleteTag(id: string) {
  return defHttp.delete({ url: Api.GetTag + id + '/' });
}
export function GetArticle(params) {
  return defHttp.get({ url: Api.GetArticle, params });
}
export function PutArticle(params, id) {
  return defHttp.put({ url: Api.GetArticle + id + '/', params });
}
export function DeleteArticle(id: string) {
  return defHttp.delete({ url: Api.GetArticle + id + '/' });
}
