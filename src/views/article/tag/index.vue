<template>
  <div class="p-4">
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                label: '编辑',
                icon: 'ic:outline-edit',
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
  import { GetTag, DeleteTag } from '@/api/article/index';
  import { tagColumns } from '../index';
  import { useModal } from '@/components/Modal';
  import Model from './model.vue';
  import { useMessage } from '@/hooks/web/useMessage';
  import { h } from 'vue';
  const [registerTable, { reload }] = useTable({
    rowKey: 'id',
    api: GetTag,
    pagination: true,
    columns: tagColumns,
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
        await DeleteTag(record.id);
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
