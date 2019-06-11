<template>
  <v-container>
        <v-alert :value="alert" color="lime" type="warning">
          Email atau Password tidak boleh kosong!
        </v-alert>
        <v-form @submit.prevent="submit">
        <v-text-field
            label="E-Mail"
            v-model="email"
            required
        ></v-text-field>

        <v-text-field
            label="Password"
            v-model="password"
            type="password"
            required
        ></v-text-field>

       <v-btn color="green" type="submit">Success</v-btn>

    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email:null,
      password:null,
      alert:false
    }
  },
  methods: {
    submit() {
      if (!this.email && !this.password) {
        this.alert=true
      }
      console.log(`Email ${this.email} dan Password ${this.password}`)
    }
  }
}
</script>
