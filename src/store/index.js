import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase'

// const nodemailer = require('nodemailer')

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null,
    loading: false,
    error: null,
    mailUser: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    mailUser (state, payload) {
      state.mailUser = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          // console.log(error)
        }
      )
    },
    signUserIn ({commit}, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(
        user => {
          commit('setLoading', false)
          const newUser = {
            id: user.uid
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
          // console.log(error)
        }
      )
    },
    clearError ({commit}) {
      commit('clearError')
    },
    // sendMail ({commit}, payload) {
    //   commit('setLoading', true)
    //   nodemailer.createTestAccount(() => {
    //     let transporter = nodemailer.createTransport({
    //       host: 'smtp.gmail.com',
    //       port: 587,
    //       secure: false,
    //       auth: {
    //         user: payload.user,
    //         pass: payload.pass
    //       }
    //     })

    //     let mailOptions = {
    //       from: '"Fred Foo" <manuel.widmoser12@gmail.com',
    //       to: 'bar@example.com',
    //       subject: 'Hello World',
    //       text: 'Fkn nigg',
    //       html: '<b>Hello world?</b>'
    //     }

    //     transporter.sendMail(mailOptions, (error) => {
    //       if (error) {
    //         return console.log(error)
    //       }
    //       console.log('Message sent')
    //     })
    //   })
    // }
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    loading (state) {
      return state.loading
    },

  }
})
