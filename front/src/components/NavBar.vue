<template>
  <div class="navbar">
      <div class="navbarContainer container">
          <div class="navbarItem">
              <router-link to="/">
                  <q-icon name="menu" />
              </router-link>
          </div>
          <div @click="openModal" class="navbarItem beautify">
              <q-icon name="add" />
          </div>
          <div class="navbarItem">
              <router-link to="/contact">
                  <q-icon name="person" />
              </router-link>
          </div>
      </div>
  </div>
</template>

<script setup>
const emit = defineEmits(['open:modal:list:add'])

const openModal = () => {
  emit('open:modal:list:add')
}
</script>

<style lang="scss" scoped>
    .navbar {
      background-color: #fff;
        box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.1);
        width: 100%;
        height: 70px;
        position: fixed;
        bottom: 0;
        .navbarContainer {
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }
        .navbarItem {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;

            &.beautify {
                background: linear-gradient(125.54deg, #613973 -0.39%, #BB46E4 100%);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

                * {
                    color: #fff;
                }
            }

            * {
                display: flex;
                align-items: center;
                justify-content: center;
                color: #828282;
                font-size: 30px;
                text-align: center;
                text-decoration: none;
            }
        }
    }
</style>
