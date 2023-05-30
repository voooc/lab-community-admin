<template>
  <div class="md:flex">
    <template v-for="(item, index) in growCardList" :key="item.title">
      <Card
        size="small"
        :loading="loading"
        :title="item.title"
        class="md:w-1/4 w-full !md:mt-0"
        :class="{ '!md:mr-4': index + 1 < 4, '!mt-4': index > 0 }"
      >
        <template #extra>
          <Tag :color="item.color">{{ item.action }}</Tag>
        </template>

        <div class="py-4 px-4 flex justify-between items-center">
          <CountTo :startVal="1" :endVal="item.value" class="text-2xl" />
          <Icon :icon="item.icon" :size="40" />
        </div>

        <div class="p-2 px-4 flex justify-between">
          <span>总用户数</span>
          <CountTo :startVal="1" :endVal="item.total" />
        </div>
      </Card>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { CountTo } from '@/components/CountTo/index';
  import { Icon } from '@/components/Icon';
  import { onMounted, ref } from 'vue';
  import { Tag, Card } from 'ant-design-vue';
  import { GetUserTotal } from '@/api/dashboard';

  defineProps({
    loading: {
      type: Boolean,
    },
  });
  export interface GrowCardItem {
    icon: string;
    title: string;
    value: number;
    total: number;
    color: string;
    action: string;
  }
  const growCardList = ref<GrowCardItem[]>([
    {
      title: '今日注册用户数',
      icon: 'visit-count|svg',
      value: 2000,
      total: 0,
      color: 'green',
      action: '日',
    },
    {
      title: '今日活动用户数',
      icon: 'total-sales|svg',
      value: 20000,
      total: 0,
      color: 'blue',
      action: '日',
    },
  ]);
  onMounted(async () => {
    const res = await GetUserTotal({});
    growCardList.value[0].total = res.count;
    growCardList.value[1].total = res.count;
    growCardList.value[0].value = res.now_register;
    growCardList.value[1].value = res.now_count;
  });
</script>
