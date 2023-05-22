import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
import { RoleEnum } from '@/enums/roleEnum';
const charts: AppRouteModule = {
  path: '/system',
  name: 'System',
  component: LAYOUT,
  redirect: '/system/users',
  meta: {
    orderNo: 2,
    icon: 'ion:bar-chart-outline',
    title: '系统管理',
    roles: [RoleEnum.SUPER],
  },
  children: [
    {
      path: 'users',
      name: 'system-users',
      meta: {
        title: '用户管理',
        roles: [RoleEnum.SUPER],
      },
      component: () => import('@/views/system/user/user.vue'),
    },
    {
      path: 'veify',
      name: 'system-verify',
      meta: {
        title: '用户审核',
        roles: [RoleEnum.SUPER],
      },
      component: () => import('@/views/system/verify/index.vue'),
    },
    {
      path: 'department',
      name: 'system-department',
      meta: {
        title: '部门管理',
        roles: [RoleEnum.SUPER],
      },
      component: () => import('@/views/system/department/index.vue'),
    },
  ],
};

export default charts;
