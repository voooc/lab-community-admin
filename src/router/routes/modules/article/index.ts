import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
const charts: AppRouteModule = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  redirect: '/article/category',
  meta: {
    orderNo: 3,
    icon: 'ion:bar-chart-outline',
    title: '文章管理',
  },
  children: [
    {
      path: 'category',
      name: 'article-category',
      meta: {
        title: '类别管理',
      },
      component: () => import('@/views/article/category/index.vue'),
    },
    {
      path: 'tag',
      name: 'article-tag',
      meta: {
        title: '标签管理',
      },
      component: () => import('@/views/article/tag/index.vue'),
    },
    {
      path: 'article',
      name: 'article-article',
      meta: {
        title: '文章管理',
      },
      component: () => import('@/views/article/article/index.vue'),
    },
  ],
};

export default charts;
