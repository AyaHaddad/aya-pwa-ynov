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
        <TodoList/>
      </div>
    </div>
    <NavBar />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
</script>
