<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    :title="type === 'edit' ? '编辑' : '新增'"
    @ok="handleSubmit"
  >
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm" />
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { PutAwards, PostAwards } from '@/api/main/index';
  import { awardsSchemas } from '../index';
  import { ref } from 'vue';
  const id = ref<number>(0);
  const type = ref<string>('');
  const [register, { closeModal, setModalProps }] = useModalInner((data) => {
    type.value = data.type;
    if (data.id) {
      id.value = data.id;
      data && onDataReceive(data);
    }
  });
  const emit = defineEmits(['success']);
  const [registerForm, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: awardsSchemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });
  function onDataReceive(data) {
    setFieldsValue({
      title: data.title,
      image: [data.image],
    });
  }
  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      values['image'] = values['image'][0];
      if (type.value === 'edit') {
        await PutAwards({ ...values }, id.value);
      } else {
        await PostAwards({ ...values });
      }
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
