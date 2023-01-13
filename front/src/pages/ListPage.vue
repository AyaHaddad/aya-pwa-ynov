<template>
  <q-layout view="lHh Lpr lFf">
    <q-item tag="div" class="header flex row justify-between items-center">
      <q-btn icon="chevron_left" to="/" rounded color="grey" />
      <h1 class="text-h6">{{ list.title }}</h1>
      <q-btn icon="more_horiz" flat color="grey" />
    </q-item>
    <q-item tag="div" class="flex column" style="margin-top: 35px">
      <p style="font-weight: bold">{{ tasks.length }}</p>
      <TodoTask v-for="task of listTasks" :key="task._id" :task="task" />
    </q-item>
    <q-footer>
      <div class="footerBtn">
        <q-btn
          round
          class="btnPurple"
          icon="add"
          :to="'/create-task?id=' + list._id"
        />
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
// Syntax vue3 Composition API
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { getList } from '../services/list'
import { getTasks } from '../services/tasks'

import TodoTask from '../components/TodoTask.vue'

const route = useRoute()

const listId = ref(route.params.id)
const listTitle = ref('Loading...')
const listTasks = ref([]);

(async () => {
  const resList = await getList(listId.value)
  listTitle.value = resList.title
  const resTasks = await getTasks(listId.value)
  listTasks.value = resTasks
})()
</script>
