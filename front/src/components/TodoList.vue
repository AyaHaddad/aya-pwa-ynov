<template>
  <div class="list">
      <div class="listSection">
          <div class="listTop">
              <h3 :title="list._id">{{ list.title }}</h3>
              <q-icon class="listIcon" name="more_horiz" />
          </div>
          <div v-if="tasks.length" class="listItems">
              <TodoTask v-for="task of tasks" :key="task._id" :task="task" />
          </div>
          <p class="unfilled" v-else>
              Cette liste ne contient aucune tâche.<br>
              Ajoutez-en une depuis la liste.
          </p>
          <div class="listBottom">
              <div class="listBottom-section">
                <router-link :to="`/list/${list._id}`">
                        Voir la liste complète
                    </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

import { getTasks } from '../services/tasks'

import TodoTask from '../components/TodoTask.vue'

const props = defineProps({
  list: {
    type: Object,
    required: true,
    default: () => ({
      title: 'Loading...'
    })
  }
})

const tasks = ref([]);

(async () => {
  const resTasks = await getTasks(props.list._id)
  tasks.value = resTasks
})()
</script>
