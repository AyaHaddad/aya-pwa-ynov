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
      <!-- <p v-if="lists.length <= 0">⚠️ Oops! Vous n'avez pas encore de liste</p>
      <TodoList :list="list" v-for="list of lists" :key="list._id" /> -->
      </div>
    </div>
    <NavBar />
  </div>
</template>

<script setup>
// import { ref } from 'vue'

import NavBar from '../components/NavBar.vue'
// import TodoList from '../components/TodoList.vue'
// import { getAllLists } from '../services/list'

// const lists = ref([])
// (async () => {
//   const resLists = await getAllLists()
//   lists.value = resLists
// })()
</script>
