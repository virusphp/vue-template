<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      dark
      fixed
      clipped
      app
      width="250"
    >
      <v-list class="pt-0" dense>
        <v-divider light></v-divider>
        <v-list-tile 
          v-for="item in items" 
          :key="item.text" 
          router 
          :to="item.link"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
        <!-- <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader> -->
        <!-- <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar>
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list> -->
      </v-list>
      
    </v-navigation-drawer>
    <v-toolbar
      color="teal"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fa fa-info</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">
          <router-link to="/" tag="span" style="cursor: pointer"> SIMRS Mini</router-link>
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  </nav>
</template>

<script>
  export default {
    data: () => ({
      drawer: true,
      items: [
        { icon: 'card_membership', text: 'Pembuatan Sep', link: '/pembuatan/sep'},
        { icon: 'hotel', text: 'Management Bed', link: '/atur/bed' },
        { icon: 'settings', text: 'Management User', link: '/atur/user' },
        { icon: 'settings', text: 'Management Pegawai', link: '/atur/pegawai' }
      ]
    }),
    props: {
      source: String
    }
  }
</script>