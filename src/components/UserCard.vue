<template>
  <q-card flat bordered class="col-xs-12 col-sm-6 col-md-4 card-custom">
    <q-card-section>
      <div class="text-h6 text-title">{{ user.name }}</div>
      <div class="text-subtitle2 text-body">{{ user.email }}</div>
      <div class="text-caption text-body">Cidade: {{ user.address.city }}</div>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn label="Ver detalhes" class="btn-custom" @click="$emit('view-details', user)" />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps(['user'])
defineEmits(['view-details'])
</script>

<style scoped>
.card-custom {
  background-color: #F5F0E1;
  border-radius: 12px;
  border-color: #d8cbb3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.text-title {
  color: #6B4226;
}

.text-body {
  color: #A67C52;
}

.btn-custom {
  background-color: #C89F73;
  color: white;
  border-radius: 8px;
}
</style>
