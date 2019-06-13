import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Vue from 'vue'

Vue.use(vuex, axios)

export default new vuex.Store({
    state: {
      posts: []
    },
    actions: {
      loadPegawai ({commit}) {
        axios
          .get(process.env.WEB_API+'/getallpegawai')
          .then(data => {
            console.log(data.data)
            let posts = data.data.data
            commit('SET_POSTS', posts)
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    mutations: {
      SET_POSTS (state, posts) {
        state.posts = posts
      }
    }
})