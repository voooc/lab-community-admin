import { BasicColumn } from '@/components/Table/src/types/table';
import { h } from 'vue';
import { FormSchema } from '@/components/Form/index';
export const userColumns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '年级',
    dataIndex: 'department',
    width: 80,
    customRender: ({ record }) => {
      return h('div', {}, record['department'] ? record['department'].name : '');
    },
  },
  {
    title: '创建时间',
    dataIndex: 'date_joined',
    customRender: ({ record }) => {
      return h('div', {}, record['date_joined'].split(' ')[0]);
    },
    width: 120,
  },
  {
    title: '角色',
    dataIndex: 'roles',
    customRender: ({ record }) => {
      return h(
        'div',
        {},
        record.roles
          .map((role) => {
            return role.name;
          })
          .join(','),
      );
    },
  },
  {
    title: '头像',
    dataIndex: 'image',
    customRender: ({ record }) => {
      return h('div', [
        h('img', {
          style: {
            width: '30px',
            verticalAlign: 'middle',
            margin: '0 auto',
          },
          src: record.image,
        }),
      ]);
    },
    width: 60,
  },
];
export const userSchemas: FormSchema[] = [
  {
    field: 'username',
    component: 'Input',
    label: '用户名',
    colProps: {
      span: 24,
    },
    defaultValue: '',
  },
  {
    field: 'name',
    component: 'Input',
    label: '名字',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'department',
    component: 'ApiSelect',
    label: '部门',
    required: true,
    slot: 'department',
    colProps: {
      span: 24,
    },
  },
  {
    field: 'roles',
    component: 'ApiSelect',
    slot: 'role',
    label: '角色',
    colProps: {
      span: 24,
    },
  },
];
export const departmentColumns: BasicColumn[] = [
  {
    title: '名字',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'add_time',
    width: 120,
    customRender: ({ record }) => {
      return h('div', {}, record['add_time'].split(' ')[0]);
    },
  },
];
export const departmentSchemas: FormSchema[] = [
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
export const verifyColumns: BasicColumn[] = [
  {
    title: '姓名',
    dataIndex: 'name',
    width: 120,
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '年级',
    dataIndex: 'department',
    width: 80,
    customRender: ({ record }) => {
      return h('div', {}, record['department'] ? record['department'].name : '');
    },
  },
  {
    title: '创建时间',
    dataIndex: 'date_joined',
    customRender: ({ record }) => {
      return h('div', {}, record['date_joined'].split(' ')[0]);
    },
    width: 120,
  },
];
