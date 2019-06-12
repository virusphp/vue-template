<template>     
  <v-content>
    <v-container mt-1>
      <v-layout justify-center align-center> 
        <v-flex md12>
          <!-- <v-card> -->
            <v-container grid-list-lg>
              <v-layout row wrap>
                <v-flex
                  v-for="card in cards"
                  :key="card.title"
                  v-bind="{ [`xs${card.flex}`]: true }"
                >
                  <v-card>
                    <v-img
                      :src="card.src"
                      height="200px"
                    >
                      <v-container
                        fill-height
                        fluid
                        pa-2
                      >
                        <v-layout fill-height>
                          <v-flex xs12 align-end flexbox>
                            <span class="headline white--text" v-text="card.title"></span>
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
  export default {
    data: () => ({
      cards: [
        { title: 'Operation', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_it5YBO3McXNlRw3b0jY1NrakGIlAjMyCSHx2fK0N.jpeg', flex: 4 },
        { title: 'CT Scan', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_k1LTqmPEH57IzMrayHeYxjxBN4p8tHDzI9WrsZsq.jpeg', flex: 4 },
        { title: 'Hemodialisa', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_u8CgmS0JQHJ74AfAwT5tCzDmSGMRRy64HHZxZEqV.jpeg', flex: 4 },
        { title: 'Jantung', src: 'https://rsudkraton.id/b/images/blogs/thumb_blogs_NkITdnVkam3u6XfCZLgdqEJ96h1rGVN7L6tE9Glh.jpeg', flex: 4 }
      ]
    })
  }
</script>