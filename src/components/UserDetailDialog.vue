<template>
  <q-dialog v-model="localModelValue" persistent>
    <q-card style="min-width: 400px; max-width: 500px" class="q-pa-md bg-card shadow-16 rounded-borders">
      <q-card-section class="q-pt-none">
        <div class="text-h5 text-title q-mb-sm">
          <q-icon name="person" class="q-mr-sm text-title" />
          {{ user.name }}
        </div>
        <q-separator spaced />

        <div class="q-mb-md text-body">
          <div><strong>Username:</strong> <q-chip dense outline color="title">{{ user.username }}</q-chip></div>
          <div><strong>Email:</strong> <q-chip dense outline color="secondary">{{ user.email }}</q-chip></div>
        </div>

        <q-separator spaced />

        <div class="q-mb-md text-body">
          <div class="text-subtitle2 q-mb-xs text-bold">Contato</div>
          <div><q-icon name="phone" size="16px" class="q-mr-xs text-body" /> {{ user.phone }}</div>
          <div><q-icon name="language" size="16px" class="q-mr-xs text-body" />
            <a :href="'http://' + user.website" target="_blank" class="text-link">{{ user.website }}</a>
          </div>
        </div>

        <q-separator spaced />

        <div class="q-mb-md text-body">
          <div class="text-subtitle2 q-mb-xs text-bold">Endereço</div>
          <div>
            {{ user.address.street }}, {{ user.address.suite }}<br />
            {{ user.address.city }} - {{ user.address.zipcode }}
          </div>
        </div>

        <q-separator spaced />

        <div class="text-body">
          <div class="text-subtitle2 q-mb-xs text-bold">Empresa</div>
          <div><q-icon name="business" size="16px" class="q-mr-xs text-body" /> {{ user.company.name }}</div>
          <div class="italic q-mt-xs">"{{ user.company.catchPhrase }}"</div>
        </div>
      </q-card-section>

      <q-card-actions align="right" class="q-pt-none">
        <q-btn flat label="Fechar" class="text-title" icon="close" @click="closeDialog" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  user: Object
})

const emit = defineEmits(['update:modelValue'])

const localModelValue = ref(props.modelValue)

watch(() => props.modelValue, (newVal) => {
  localModelValue.value = newVal
})

function closeDialog() {
  localModelValue.value = false
  emit('update:modelValue', false)
}

watch(localModelValue, (val) => {
  if (val !== props.modelValue) {
    emit('update:modelValue', val)
  }
})
</script>

<style scoped>
.rounded-borders {
  border-radius: 12px;
}

.bg-card {
  background-color: #F5F0E1;
}

.text-title {
  color: #6B4226;
}

.text-body {
  color: #A67C52;
}

.text-link {
  color: #C89F73;
  text-decoration: none;
}
</style>
