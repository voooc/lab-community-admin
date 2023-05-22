<template>
  <PageWrapper>
    <template #headerContent>
      <div class="flex">
        <div @click="goBack">
          <arrow-left-outlined />
          返回
        </div>
      </div>
    </template>
    <div>
      <a-spin :spinning="confirmLoading">
        <Card :title="isNew ? '新建' : '编辑'">
          <div class="my-2">
            <BasicForm @register="registerForm" @submit="handleSubmit" />
          </div>
        </Card>
      </a-spin>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
  import { PageWrapper } from '@/components/Page';
  import { Card } from 'ant-design-vue';
  import { ArrowLeftOutlined } from '@ant-design/icons-vue';
  import { useRouter, useRoute } from 'vue-router';
  import { onMounted, ref } from 'vue';
  import { GetSingleAnnouncement, PostAnnouncement, PutAnnouncement } from '@/api/main';
  import { useForm, BasicForm } from '@/components/Form';
  import { announcementSchemas } from '../index';
  const router = useRouter();
  const route = useRoute();
  function goBack() {
    router.go(-1);
  }
  const isNew = ref(true);
  const [registerForm, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: announcementSchemas,
    showActionButtonGroup: true,
    submitButtonOptions: {
      text: '提交',
    },
    actionColOptions: {
      span: 24,
    },
  });
  const confirmLoading = ref(false);
  const articleId = route.params.id;
  async function handleSubmit() {
    try {
      const values = await validate();
      confirmLoading.value = true;
      if (isNew.value) {
        await PostAnnouncement({ ...values });
      } else {
        await PutAnnouncement({ ...values }, articleId);
      }
      router.push({ path: '/main/announcement' });
    } finally {
      confirmLoading.value = false;
    }
  }
  onMounted(async () => {
    if (articleId) {
      // 编辑文章，从后端获取文章信息并显示在表单上
      const res = await GetSingleAnnouncement(articleId);
      isNew.value = false;
      setFieldsValue({
        title: res.title,
        content: res.content,
        is_published: res.is_published,
      });
    }
  });
</script>
