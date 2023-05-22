export interface UserInfo {
  id: string | number;
  // 用户名
  username: string;
  // 真实名字
  name: string;
  // 头像
  image: string;
  // 部门
  department: string;
  // 介绍
  desc?: string;
  // 角色
  roles: Array<string>;
  // email
  email: string;
  follow: string;
  fan: string;
  follow_active?: boolean;
}
