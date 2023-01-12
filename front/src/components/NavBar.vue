<!-- eslint-disable func-call-spacing -->
<template>
    <q-layout view="lHh Lpr lFf">
      <div class="navbar">
      <div class="navbarSection">
          <div class="navbarBtn" @click="toggleLeftDrawer">
            <q-btn
            flat
            dense
            round
            color="black"
            icon="menu"
            aria-label="Menu"
          />
          </div>
          <div class="navbarBtn purple">
              <q-icon name="add" color="fff" @click="openDialogCreate = true"/>
          </div>
          <div class="navbarBtn">
              <router-link to="/contact">
                  <q-icon name="person" />
              </router-link>
          </div>
</div>
    <!-- modal -->
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
    <!-- menu -->
    <q-drawer v-model="DrawerOpen" show-if-above bordered>
          <q-list>
            <q-item-label header> Mes listes </q-item-label>
            <div class="containerBtn">
              <q-btn
                class="drawerBtn full-width"
                label="Créer une liste"
                @click="openDialogCreate = true"
              />
            </div>
            <PrimaryLink
              v-for="link in primaryLinks"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-drawer>
      </div>
</q-layout>

</template>

<script setup>
import { ref } from 'vue'
import { getAllLists, createList } from '../services/list'

const openDialogCreate = ref(false)
const listName = ref('')
const primaryLinks = ref([])
// eslint-disable-next-line func-call-spacing
const DrawerOpen = ref(false)
console.log(openDialogCreate);
// eslint-disable-next-line no-unexpected-multiline
(async () => {
  const { data } = await getAllLists()
  primaryLinks.value = data.map((list) => {
    return {
      title: list.title,
      link: `/lists?id=${list._id}`
    }
  })
})()

function toggleLeftDrawer () {
  DrawerOpen.value = !DrawerOpen.value
}

const handleAddList = () => {
  createList({ title: listName.value })
  openDialogCreate.value = false
}
</script>
