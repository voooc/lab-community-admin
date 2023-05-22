<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'ic:outline-delete-outline',
                onClick: handleEdit.bind(null, record),
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
    <UserModel @register="register" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { getUserInfo, DeleteUser } from '@/api/system/people';
  import { userColumns } from '../index';
  import { useModal } from '@/components/Modal';
  import UserModel from './UserModel.vue';
  import { useMessage } from '@/hooks/web/useMessage';
  import { h } from 'vue';
  const [registerTable] = useTable({
    rowKey: 'id',
    api: getUserInfo,
    pagination: true,
    columns: userColumns,
    actionColumn: {
      title: '操作',
      dataIndex: 'action',
    },
  });
  const [register, { openModal: openModal }] = useModal();
  const { createConfirm } = useMessage();
  function handleDelete(record: Recordable) {
    createConfirm({
      iconType: 'warning',
      title: () => h('span', '提示'),
      content: () => h('span', '确认删除吗？'),
      onOk: async () => {
        await DeleteUser(record.id);
      },
    });
  }
  function handleEdit(record: Recordable) {
    openModal(true, record);
  }
</script>
