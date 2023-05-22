import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';
const news: AppRouteModule = {
  path: '/main',
  name: 'main',
  component: LAYOUT,
  redirect: '/main/banner',
  meta: {
    orderNo: 4,
    icon: 'ion:bar-chart-outline',
    title: '首页管理',
  },
  children: [
    {
      path: 'banner',
      name: 'main-banner',
      meta: {
        title: '首页轮播图',
      },
      component: () => import('@/views/main/banner/index.vue'),
    },
    {
      path: 'awards',
      name: 'main-awards',
      meta: {
        title: '奖励荣誉',
      },
      component: () => import('@/views/main/awards/index.vue'),
    },
    {
      path: 'news',
      name: 'main-news',
      meta: {
        title: '首页新闻',
      },
      component: () => import('@/views/main/news/index.vue'),
    },
    {
      path: 'news-edit',
      name: 'main-news-create',
      meta: {
        title: '首页新闻撰写',
        hideBreadcrumb: true,
        hideTab: true,
        hideMenu: true,
      },
      component: () => import('@/views/main/news/edit.vue'),
    },
    {
      path: 'news-edit/:id',
      name: 'main-news-edit',
      meta: {
        title: '首页新闻撰写',
        hideBreadcrumb: true,
        hideTab: true,
        hideMenu: true,
      },
      component: () => import('@/views/main/news/edit.vue'),
    },
    {
      path: 'announcement',
      name: 'main-announcement',
      meta: {
        title: '首页公告栏',
      },
      component: () => import('@/views/main/announcement/index.vue'),
    },
    {
      path: 'announcement-edit',
      name: 'main-announcement-create',
      meta: {
        title: '公告栏撰写',
        hideBreadcrumb: true,
        hideTab: true,
        hideMenu: true,
      },
      component: () => import('@/views/main/announcement/edit.vue'),
    },
    {
      path: 'announcement-edit/:id',
      name: 'main-announcement-edit',
      meta: {
        title: '公告栏撰写',
        hideBreadcrumb: true,
        hideTab: true,
        hideMenu: true,
      },
      component: () => import('@/views/main/announcement/edit.vue'),
    },
  ],
};

export default news;
