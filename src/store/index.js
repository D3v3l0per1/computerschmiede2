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
    loaded3DExamples: [
      { 
        id: '1',
        title: 'AT ST Star Wars',
        author: 'jackbenimble',
        author_link: 'https://www.thingiverse.com/jackbenimble',
        date: new Date(),
        model_id: 'rLn0H8IuPS',
        imageUrl: 'https://via.placeholder.com/1920x800',
        description: 'Lorem ispsumsdn lisdfng liksdfngöosn rffl.g n.kgd jlnöskfdg nh'
      },
      { 
        id: '2',
        title: 'Thanos (Avengers: Infinity War version)',
        author: 'Byambaa',
        author_link: 'https://www.thingiverse.com/Byambaa',
        date: new Date(),
        model_id: 'JBDlptaXQ_',
        imageUrl: 'https://via.placeholder.com/1920x800',
        description: 'Lorem ispsumsdn lisdfng liksdfngöosn rffl.g n.kgd jlnöskfdg nh'
      },
      
    ]
  },
  mutations: {
    setLoaded3DExamples (state, payload) {
      state.loaded3DExamples = payload
    },
    create3DExample (state, payload) {
      state.loaded3DExamples.push(payload)
    },
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
    load3DExamples ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('3d_examples').once('value')
        .then(
          (data) => {
            const exmpls = []
            const obj = data.val()
            for (let key in obj) {
              exmpls.push({
                id: key,
                title: obj[key].title,
                author: obj[key].author,
                author_link: obj[key].author_link,
                date: obj[key].date,
                model_id: obj[key].model_id,
                imageUrl: obj[key].imageUrl,
                description: obj[key].description,
                creatorId: obj[key].creatorId
              })
            }
            commit('setLoading', false)
            commit('setLoaded3DExamples', exmpls)
          }
        )
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    create3DExample ({commit, getters}, payload) {
      const exmpl = {
        title: payload.title,
        imageUrl: payload.imageUrl,
        model_id: payload.model_id,
        author: payload.author,
        author_link: payload.author_link,
        description: payload.description,
        date: payload.date,
        creatorId: getters.user.id
      }
      firebase.database().ref('3d_examples').push(exmpl)
        .then(
          (data) => {
            const key = data.key
            commit('create3DExample', {
              ...exmpl,
              id: key
            })
          }
        )
        .catch(
          (error) => {
            console.log(error)
          }
        )
    },
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
    autoSignIn ({commit}, payload) {
      commit('setUser', {id: payload.uid})
    },
    logout ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    loaded3DExamples (state) {
      return state.loaded3DExamples.sort((exmplA, exmplB) => {
        return exmplA.date > exmplB.date
      })
    },
    featured3DExamples (state, getters) {
      return getters.loaded3DExamples.slice(0, 5)
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
