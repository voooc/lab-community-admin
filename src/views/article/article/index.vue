<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '详情',
                icon: 'ic:sharp-read-more',
                onClick: handleRead.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { GetArticle, DeleteArticle } from '@/api/article/index';
  import { articleColumns, articleForm } from '../index';
  import { useMessage } from '@/hooks/web/useMessage';
  import { h } from 'vue';
  const [registerTable, { reload }] = useTable({
    rowKey: 'id',
    api: GetArticle,
    pagination: true,
    columns: articleColumns,
    useSearchForm: true,
    formConfig: articleForm,
    actionColumn: {
      title: '操作',
      dataIndex: 'action',
    },
  });
  const { createConfirm } = useMessage();
  function handleRead(record: Recordable) {
    window.open(record.url);
  }
  function handleDelete(record: Recordable) {
    createConfirm({
      iconType: 'warning',
      title: () => h('span', '提示'),
      content: () => h('span', '确认删除吗？'),
      onOk: async () => {
        await DeleteArticle(record.id);
        await reload();
      },
    });
  }
</script>
