<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background-color: #FBFDFE"
    >
      <q-list>
        <q-item-label
          header
          >
          <q-img src="images/Logo-1-2ed76cfa-585x108.jpeg"></q-img>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="handshake"/>
            </q-item-section>
           <q-item-section>Notas fiscais</q-item-section>
        </q-item>
      </q-item-label>
    </q-list>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>
  .q-item {
    color: #00AD8C;
    font-size: 22px;
    margin-top: 10px;
  }
</style>
