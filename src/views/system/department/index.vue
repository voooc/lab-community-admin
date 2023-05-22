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
      <template #toolbar>
        <a-button type="primary" @click="handleAdd">新增</a-button>
      </template>
    </BasicTable>
    <Model @register="register" @success="reload" />
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { GetDepartmentInfo, DeleteDepartment } from '@/api/system/people';
  import { departmentColumns } from '../index';
  import { useModal } from '@/components/Modal';
  import Model from './model.vue';
  import { useMessage } from '@/hooks/web/useMessage';
  import { h } from 'vue';
  const [registerTable, { reload }] = useTable({
    rowKey: 'id',
    api: GetDepartmentInfo,
    pagination: true,
    columns: departmentColumns,
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
        await DeleteDepartment(record.id);
        await reload();
      },
    });
  }
  function handleAdd() {
    openModal(true, { type: 'new' });
  }
  function handleEdit(record: Recordable) {
    openModal(true, { ...record, type: 'edit' });
  }
</script>
