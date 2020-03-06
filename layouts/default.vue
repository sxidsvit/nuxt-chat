<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar dense>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-app-bar>

    <v-content>
      <div>
        <nuxt />
      </div>
    </v-content>
  </v-app>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data: () => ({
    drawer: true
  }),
  computed: mapState(['user'])
}
</script>
