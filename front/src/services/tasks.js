import { api } from 'boot/axios'

export function updateTask (task) {
  return api.put(`/task/${task._id}`, task)
}

export const getTasks = async (listId) => {
  const res = await api.get(`/task/${listId}`)

  if (res.status === 200) {
    return res.data
  }

  return []
}
