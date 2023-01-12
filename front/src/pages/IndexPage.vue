<template>
  <div>
  <div class="container">
    <div class="header">
        <div class="title">
          <h1>Dashboard</h1>
        </div>
        <div class="profileIcon">
          <q-icon name="person" />
        </div>
      </div>
      <div class="personWelcome">
        <h2>
          Bonjour,
          <br>
          Tom Dupont ! 👋
        </h2>
      </div>
    <div class="lists">
      <p v-if="lists.length <= 0">⚠️ Oops! Vous n'avez pas encore de liste</p>
      <TodoList v-for="list in lists" :key="list.title" :list="list"/>
      </div>
    </div>
    <NavBar />
  </div>
</template>
<script setup>
import { ref } from 'vue'

import NavBar from '../components/NavBar.vue'
import TodoList from '../components/TodoList.vue'

import { getAllLists } from 'services/list'

const props = defineProps({
  lists: {
    type: Array,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: []
  }
})
// eslint-disable-next-line func-call-spacing
const lists = ref(props.lists);

// eslint-disable-next-line no-unexpected-multiline
(async () => {
  const { data } = await getAllLists()
  lists.value = data.map((list) => {
    return {
      title: list.title,
      link: `/lists?id=${list._id}`,
      id: list._id
    }
  })
})()
</script>
