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
  </div>
</template>
<script lang="ts" setup>
  import { BasicTable, useTable, TableAction } from '@/components/Table';
  import { GetAnnouncement, DeleteAnnouncement } from '@/api/main/index';
  import { announcementColumns } from '../index';
  import { useMessage } from '@/hooks/web/useMessage';
  import { useRouter } from 'vue-router';
  import { h } from 'vue';
  const [registerTable, { reload }] = useTable({
    rowKey: 'id',
    api: GetAnnouncement,
    pagination: true,
    columns: announcementColumns,
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
      content: () => h('span', '确认删除吗？'),
      onOk: async () => {
        await DeleteAnnouncement(record.id);
        await reload();
      },
    });
  }
  const router = useRouter();
  function handleAdd() {
    router.push({ path: '/main/announcement-edit' });
  }
  function handleRead(record: Recordable) {
    console.log(record);
    // router.push({ path: `/main/news-edit/${record.id}` });
  }
  function handleEdit(record: Recordable) {
    router.push({ path: `/main/announcement-edit/${record.id}` });
  }
</script>
