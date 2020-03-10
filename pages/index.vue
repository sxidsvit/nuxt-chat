<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8>
      <v-card min-width="400" class="mt-12">
        <v-snackbar v-model="snackbar" top>
          {{ message }}
          <v-btn dark text @click="snackbar = false" color="primary">Закрыть</v-btn>
        </v-snackbar>

        <v-card-title>
          <h2>Nuxt чат</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid" :lazy-validation="lazy">
            <v-text-field v-model="name" :counter="16" :rules="nameRules" label="Ваше имя" required></v-text-field>

            <v-text-field v-model="room" :rules="roomRules" label="Введите комнату" required></v-text-field>

            <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">Войти</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
import { mapMutations } from 'vuex'
export default {
  layout: 'empty',
  head: {
    title: 'Nuxt чат приветствует вас '
  },
  sockets: {
    connect() {
      console.log('pages/index.vue - Client IO connected')
    }
  },
  data: () => ({
    snackbar: false,
    message: '',
    valid: true,
    name: '',
    lazy: false,
    nameRules: [
      v => !!v || 'Введите ваше имя',
      v => (v && v.length <= 10) || 'Имя должно быть не длинее 16 символов'
    ],
    room: '',
    roomRules: [v => !!v || 'Введите название комнаты']
  }),
  mounted() {
    const { message } = this.$route.query
    console.log('this.$route.query: ', this.$route.query)
    if (message === 'noUser') {
      this.message = 'Введите ваше имя и комнату'
    } else if (message === 'leftChat') {
      this.message = 'Вы вышли из чата'
    }
    this.snackbar = !!this.message
  },
  methods: {
    ...mapMutations(['setUser']),
    submit() {
      if (this.$refs.form.validate()) {
        const user = {
          name: this.name,
          room: this.room
        }
        this.$socket.emit('userJoined', user, data => {
          if (typeof data === 'string') {
            console.log(data)
          } else {
            user.id = data.userID
            this.setUser(user)
            this.$router.push('/chat')
          }
        })
      }
    }
  }
}
</script>
