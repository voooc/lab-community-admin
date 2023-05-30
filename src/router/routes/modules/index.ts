import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
const dashboard: AppRouteModule = {
  path: '/index',
  name: 'Index',
  component: LAYOUT,
  redirect: '/index/home',
  meta: {
    orderNo: 1,
    icon: 'ion:grid-outline',
    title: '主页',
  },
  children: [
    {
      path: 'home',
      name: '分析页',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: 'home',
      },
    },
  ],
};

export default dashboard;
