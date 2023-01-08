<template>

  <div class="navbar">
      <div class="navbarSection">
          <div class="navbarBtn">
              <router-link to="/">
                  <q-icon name="menu" />
              </router-link>
          </div>
          <div class="navbarBtn purple">
              <q-icon name="add" color="fff" @click="openDialogCreate = true"/>
          </div>
          <div class="navbarBtn">
              <router-link to="/contact">
                  <q-icon name="person" />
              </router-link>
          </div>

              <q-dialog
      v-model="openDialogCreate"
      style="min-width: 300px"
    >
      <q-card>
        <q-card-section class="flex justify-end">
          <q-icon
            name="close"
            @click="openDialogCreate = false"
          />
        </q-card-section>

        <q-item-label
          class="text-bold q-mt-l text-center"
          style="font-size: 1rem"
          >Créer une nouvelle liste</q-item-label
        >

        <p class="text-start q-ma-md">Nom de la liste</p>
        <q-input
          v-model="listName"
          class="q-ma-md"
          outlined
          dense
          placeholder="Nom de la liste"
        />

        <q-card-section class="row justify-center">
          <q-btn
            label="Annuler"
            flat
            no-caps
            class="q-mb-md items-start"
            @click="openDialogCreate = false"
          />
          <q-btn
            label="Créer"
            color="accent"
            no-caps
            class="q-mb-md items-start"
            @click="handleAddList"
          />
        </q-card-section>
      </q-card>
    </q-dialog>
      </div>
  </div>
</template>

<script setup lang="ts">
import { createList } from '../services/list'
import { ref } from 'vue'

const openDialogCreate = ref(false)
const listName = ref('')

const handleAddList = () => {
  createList({ title: listName.value })
  openDialogCreate.value = false
}
</script>
