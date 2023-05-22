import { BasicColumn } from '@/components/Table/src/types/table';
import { h } from 'vue';
import { FormProps, FormSchema } from '@/components/Table';
export const categoryColumns: BasicColumn[] = [
  {
    title: '名字',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['add_time'].split(' ')[0]);
    },
  },
];
export const categorySchemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
];
export const tagColumns: BasicColumn[] = [
  {
    title: '名字',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['add_time'].split(' ')[0]);
    },
  },
];
export const tagSchemas: FormSchema[] = [
  {
    field: 'name',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
];
export const articleColumns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 260,
  },
  {
    title: '简介',
    dataIndex: 'desc',
    width: 150,
  },
  {
    title: '作者',
    dataIndex: 'author',
    width: 100,
    customRender: ({ record }) => {
      return h('div', {}, record['author'].name);
    },
  },
  {
    title: '类别',
    dataIndex: 'category',
    width: 100,
    customRender: ({ record }) => {
      return h('div', {}, record['category'].name);
    },
  },
  {
    title: '标签',
    dataIndex: 'author',
    width: 150,
    customRender: ({ record }) => {
      return h(
        'div',
        {},
        record['tags']
          .map((item) => {
            return item.name;
          })
          .join(','),
      );
    },
  },
  {
    title: '点赞数',
    dataIndex: 'like',
    width: 80,
    customRender: ({ record }) => {
      return h('div', {}, record['like']);
    },
  },
  {
    title: '评论数',
    dataIndex: 'comment',
    width: 80,
    customRender: ({ record }) => {
      return h('div', {}, record['comment']);
    },
  },
  {
    title: '地址',
    dataIndex: 'url',
    width: 300,
    customRender: ({ record }) => {
      return h(
        'a',
        {
          href: record['url'],
          target: '_blank',
        },
        record['url'],
      );
    },
  },
];
export const articleForm: Partial<FormProps> = {
  labelWidth: 100,
  schemas: [
    {
      field: 'search',
      label: '关键词',
      component: 'Input',
    },
  ],
};
