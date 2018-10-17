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
    mailUser: null,
    threeDExamples: [
      { 
        id: '1',
        title: 'AT ST Star Wars', author: 'jackbenimble',
        author_link: 'https://www.thingiverse.com/jackbenimble',
        model: 'https://app.modelo.io/embedded/rLn0H8IuPS?viewport=false&autoplay=true'
      },
      { 
        id: '2',
        title: 'Thanos (Avengers: Infinity War version)',
        author: 'Byambaa', author_link: 'https://www.thingiverse.com/Byambaa',
        model: 'https://app.modelo.io/embedded/JBDlptaXQ_?viewport=false&autoplay=true'
      }
    ]
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
  },
  getters: {
    loaded3DExamples (state) {
      return state.loaded3DExamples.sort((exmplA, exmplB) => {
        return exmplA.date > exmplB.date
      })
    },
    loaded3DExample (state) {
      return (exmplId) => {
        return state.loaded3DExamples.find((exmpl) => {
          return exmpl.id === exmplId
        })
      }
    },
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
