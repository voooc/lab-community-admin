import { BasicColumn } from '@/components/Table/src/types/table';
import { h } from 'vue';
import { FormSchema } from '@/components/Form/index';
import { Tinymce } from '@/components/Tinymce';
import { uploadApi } from '@/api/sys/upload';
export const bannerColumns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 150,
  },
  {
    title: '图片',
    dataIndex: 'image',
    customRender: ({ record }) => {
      return h('div', [
        h('img', {
          style: {
            height: '70px',
            width: '70px',
            verticalAlign: 'middle',
            margin: '0 auto',
          },
          src: record.image,
        }),
      ]);
    },
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
export const bannerSchemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
  {
    field: 'image',
    component: 'Upload',
    label: '图片',
    colProps: {
      span: 24,
    },
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
    },
    required: true,
  },
];
export const newsColumns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 150,
  },
  {
    title: '概括',
    dataIndex: 'desc',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['desc']);
    },
  },
  {
    title: '是否发布',
    dataIndex: 'is_published',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['is_published']);
    },
  },
  {
    title: '封面图',
    dataIndex: 'image',
    customRender: ({ record }) => {
      return h('div', [
        h('img', {
          style: {
            height: '30px',
            width: '30px',
            verticalAlign: 'middle',
            margin: '0 auto',
          },
          src: record.image,
        }),
      ]);
    },
    width: 100,
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
export const newsSchemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
  {
    field: 'image',
    component: 'Upload',
    label: '封面图',
    colProps: {
      span: 24,
    },
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
    },
    required: true,
  },
  {
    field: 'content',
    component: 'Input',
    label: '内容',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    field: 'desc',
    component: 'Input',
    label: '概括',
    rules: [{ required: true }],
    colProps: {
      span: 24,
    },
  },
  {
    field: 'is_published',
    component: 'RadioGroup',
    label: '是否发布',
    colProps: {
      span: 24,
    },
    required: true,
    componentProps: {
      options: [
        {
          label: '否',
          value: false,
        },
        {
          label: '是',
          value: true,
        },
      ],
    },
    defaultValue: true,
  },
];
export const announcementColumns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
    width: 150,
  },
  {
    title: '是否发布',
    dataIndex: 'is_published',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['is_published']);
    },
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
export const announcementSchemas: FormSchema[] = [
  {
    field: 'title',
    component: 'Input',
    label: '名称',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
  {
    field: 'content',
    component: 'Input',
    label: '内容',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    rules: [{ required: true }],
    render: ({ model, field }) => {
      return h(Tinymce, {
        value: model[field],
        onChange: (value: string) => {
          model[field] = value;
        },
      });
    },
  },
  {
    field: 'is_published',
    component: 'RadioGroup',
    label: '是否发布',
    colProps: {
      span: 24,
    },
    required: true,
    componentProps: {
      options: [
        {
          label: '否',
          value: false,
        },
        {
          label: '是',
          value: true,
        },
      ],
    },
    defaultValue: true,
  },
];
export const awardsColumns: BasicColumn[] = [
  {
    title: '名称',
    dataIndex: 'name',
    width: 150,
  },
  {
    title: '图片',
    dataIndex: 'image',
    customRender: ({ record }) => {
      return h('div', [
        h('img', {
          style: {
            height: '70px',
            width: '70px',
            verticalAlign: 'middle',
            margin: '0 auto',
          },
          src: record.image,
        }),
      ]);
    },
    width: 150,
  },
  {
    title: '获奖人',
    dataIndex: 'people',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['people']);
    },
  },
  {
    title: '获奖时间',
    dataIndex: 'add_time',
    width: 150,
    customRender: ({ record }) => {
      return h('div', {}, record['add_time']);
    },
  },
];
export const awardsSchemas: FormSchema[] = [
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
  {
    field: 'people',
    component: 'Input',
    label: '获奖人',
    colProps: {
      span: 24,
    },
    defaultValue: '',
    required: true,
  },
  {
    field: 'image',
    component: 'Upload',
    label: '图片',
    colProps: {
      span: 24,
    },
    componentProps: {
      api: uploadApi,
      maxNumber: 1,
    },
    required: true,
  },
  {
    field: 'add_time',
    component: 'DatePicker',
    label: '获奖时间',
    colProps: {
      span: 24,
    },
    required: true,
  },
];
