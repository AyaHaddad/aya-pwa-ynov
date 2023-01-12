<template>
  <q-item
    tag="div"
    class="taskCard"
    style="margin-bottom: 10px"
    :to="'/tasks?id=' + task._id"
  >
    <q-checkbox
      dense
      v-model="complete"
      @click="toggle"
    />
    <p style="height: 0px; margin-left: 20px">{{ task.title }}</p>
  </q-item>
</template>

<script setup>
import { ref, watch } from 'vue'

import { updateTask } from '../services/tasks'

const props = defineProps({
  tasks: {
    type: Object,
    required: true
  }
})

const complete = ref(props.tasks.completed)

const toggle = () => {
  complete.value = !complete.value
}

watch(complete, (val) => {
  const tasks = props.tasks
  tasks.completed = val
  updateTask(tasks)
})
</script>
