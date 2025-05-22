import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function getUsers() {
  try {
    const response = await axios.get(API_URL)
    return response.data
  } catch (error) {
    console.error('Erro ao buscar usuários:', error)
    throw error
  }
}

export async function getUserById(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    return response.data
  } catch (error) {
    console.error(`Erro ao buscar usuário com ID ${id}:`, error)
    throw error
  }
}
