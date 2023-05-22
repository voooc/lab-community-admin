<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '同意',
                icon: 'ic:outline-delete-outline',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '拒绝',
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
  import { GetVeifyInfo, DeleteVeify, PutVeify } from '@/api/system/people';
  import { verifyColumns } from '../index';
  import { useMessage } from '@/hooks/web/useMessage';
  import { h } from 'vue';
  const [registerTable, { reload }] = useTable({
    rowKey: 'id',
    api: GetVeifyInfo,
    pagination: true,
    columns: verifyColumns,
    actionColumn: {
      title: '操作',
      dataIndex: 'action',
    },
  });
  const { createConfirm } = useMessage();
  function handleDelete(record: Recordable) {
    createConfirm({
      iconType: 'warning',
      title: () => h('span', '提示'),
      content: () => h('span', '确认拒绝该用户的申请吗？'),
      onOk: async () => {
        await DeleteVeify(record.id);
        reload();
      },
    });
  }
  function handleEdit(record: Recordable) {
    createConfirm({
      iconType: 'warning',
      title: () => h('span', '提示'),
      content: () => h('span', '确认通过该用户的申请吗？'),
      onOk: async () => {
        await PutVeify({ id: record.id, username: record.username }, record.id);
        reload();
      },
    });
  }
</script>
