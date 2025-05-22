<template>
  <q-page padding class="bg-page">
    <q-toolbar class="bg-header text-white">
      <q-toolbar-title> Lista de Usuários </q-toolbar-title>
    </q-toolbar>

    <q-spinner v-if="loading" size="50px" class="q-mt-xl flex flex-center" color="accent" />

    <div v-else class="q-mt-lg q-gutter-md row justify-center">
      <q-card
        v-for="user in users.slice(0, 9)"
        :key="user.id"
        class="my-card col-xs-12 col-sm-6 col-md-4 col-lg-3"
        bordered
        padding
        flat
      >
        <q-card-section>
          <div class="text-h6 text-title q-mb-xs">{{ user.name }}</div>
          <div class="text-subtitle2 text-body q-mb-sm">{{ user.email }}</div>
          <div class="text-body2 q-mb-sm">
            <q-icon name="location_on" size="18px" class="q-mr-xs text-icon" />
            {{ user.address.city }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            label="Ver detalhes"
            dense
            unelevated
            class="btn-custom"
            @click="showUserDetails(user)"
          />
        </q-card-actions>
      </q-card>
    </div>

    <UserDetailDialog v-model="showDialog" :user="selectedUser" />
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getUsers } from 'src/service/userService'
import UserDetailDialog from 'src/components/UserDetailDialog.vue'

const users = ref([])
const loading = ref(true)
const showDialog = ref(false)
const selectedUser = ref(null)

async function loadUsers() {
  loading.value = true
  try {
    users.value = await getUsers()
  } catch (error) {
    console.error('Erro ao carregar usuários:', error)
  } finally {
    loading.value = false
  }
}

function showUserDetails(user) {
  selectedUser.value = user
  showDialog.value = true
}

onMounted(loadUsers)
</script>

<style scoped>
.bg-page {
  background-color: #f0f2f5;
}

.bg-header {
  background-color: #6B4226;
}

.my-card {
  background-color: #F5F0E1;
  transition: box-shadow 0.3s ease;
  border-radius: 12px;
  border-color: #d8cbb3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.my-card:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.text-title {
  color: #6B4226;
}

.text-body {
  color: #A67C52;
}

.text-icon {
  color: #A67C52;
}

.btn-custom {
  background-color: #C89F73;
  color: #fff;
  border-radius: 8px;
}
</style>
