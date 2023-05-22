<template>
  <BasicModal v-bind="$attrs" @register="register" title="编辑" @ok="handleSubmit">
    <div class="pt-3px pr-3px">
      <BasicForm @register="registerForm">
        <template #department="{ model, field }">
          <ApiSelect
            :api="GetDepartmentInfo"
            style="width: 100%"
            v-model:value="model[field]"
            showSearch
            optionFilterProp="label"
            labelField="name"
            valueField="id"
            :filterOption="false"
            resultField="items"
          />
        </template>
        <template #role="{ model, field }">
          <ApiSelect
            :api="GetRoleInfo"
            style="width: 100%"
            mode="multiple"
            v-model:value="model[field]"
            labelField="name"
            valueField="value"
            resultField="items"
          />
        </template>
      </BasicForm>
    </div>
  </BasicModal>
</template>
<script lang="ts" setup>
  import { BasicModal, useModalInner } from '@/components/Modal';
  import { BasicForm, useForm, ApiSelect } from '@/components/Form/index';
  import { GetDepartmentInfo, GetRoleInfo, PutUserInfo } from '@/api/system/people';
  import { userSchemas } from '../index';
  import { ref } from 'vue';
  const id = ref<number>(0);
  const [register, { closeModal, setModalProps }] = useModalInner((data) => {
    id.value = data.id;
    data && onDataReceive(data);
  });
  const emit = defineEmits(['success']);
  const [registerForm, { setFieldsValue, validate }] = useForm({
    labelWidth: 120,
    schemas: userSchemas,
    showActionButtonGroup: false,
    actionColOptions: {
      span: 24,
    },
  });
  function onDataReceive(data) {
    setFieldsValue({
      username: data.username,
      name: data.name,
      department: data.department.id,
      roles: data.roles,
    });
  }
  async function handleSubmit() {
    try {
      const values = await validate();
      setModalProps({ confirmLoading: true });
      await PutUserInfo({ ...values }, id.value);
      closeModal();
      emit('success');
    } finally {
      setModalProps({ confirmLoading: false });
    }
  }
</script>
