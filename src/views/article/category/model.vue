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
  import { PutCategory, PostCategory } from '@/api/article/index';
  import { categorySchemas } from '../index';
  import { ref } from 'vue';
  const id = ref<number>(0);
  const type = ref<string>('');
  const [register, { closeModal, setModalProps }] = useModalInner((data) => {
    if (data.id) {
      id.value = data.id;
    }
    type.value = data.type;
    data && onDataReceive(data);
  });
  const emit = defineEmits(['success']);
  const [registerForm, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: categorySchemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });
  function onDataReceive(data) {
    setFieldsValue({
      name: data.name,
    });
  }
  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      if (type.value === 'edit') {
        await PutCategory({ ...values }, id.value);
      } else {
        await PostCategory({ ...values });
      }
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
