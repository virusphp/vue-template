<template>     
  <v-content>
    <v-container mt-1>
      <v-layout justify-center align-center> 
        <v-flex md12>
          <!-- <v-card> -->
            <v-container grid-list-lg>
              <v-layout row wrap>
                <v-flex
                  v-for="(item, index) in posts"
                  :key="index"
                  v-bind="{ [`xs4`]: true }"
                >
                  <v-card>
                    <v-img
                      :src="item.image"
                      height="200px"
                    >
                      <v-container
                        fill-height
                        fluid
                        pa-2
                      >
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="item.nama_pegawai"></span>
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-img>
                  </v-card>
                </v-flex>  
              </v-layout>
            </v-container>
          <!-- </v-card> -->
        </v-flex>
      </v-layout>
    </v-container>
    
  </v-content>
</template>
<script>
import {mapState} from 'vuex'
  export default {
    data: () => ({
      cards: [
        { title: 'Operation', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_it5YBO3McXNlRw3b0jY1NrakGIlAjMyCSHx2fK0N.jpeg', flex: 4 },
        { title: 'CT Scan', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_k1LTqmPEH57IzMrayHeYxjxBN4p8tHDzI9WrsZsq.jpeg', flex: 4 },
        { title: 'Hemodialisa', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_u8CgmS0JQHJ74AfAwT5tCzDmSGMRRy64HHZxZEqV.jpeg', flex: 4 },
        { title: 'Jantung', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_NkITdnVkam3u6XfCZLgdqEJ96h1rGVN7L6tE9Glh.jpeg', flex: 4 }
      ]
    }),
    mounted() {
      this.$store.dispatch('loadPegawai')
    },
    computed: {
      ...mapState([
        'posts' 
      ]),
      dataUrl(blob) {
        return 'data:image/jpeg;base64,' +btoa(
          new Uint8Array(blob)
          .reduce((data, byte) => data + String.fromCharCode(byte), '')
        );
      }
    }
  }
</script>