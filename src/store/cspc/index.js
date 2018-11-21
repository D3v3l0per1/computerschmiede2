import * as firebase from 'firebase'

export default {
  state: {
    loadedBlocks: [
      {
        title: '',
        imageUrl: '',
        content: ''
      }
    ]
  },
  mutations: {
    setLoadedBlocks (state, payload) {
      state.loadedBlocks = payload
    },
    createBlocks (state, payload) {
      state.loadedBlocks.push(payload)
    },
    updateBlock (state, payload) {
      const block = state.loadedBlocks.find(block => {
        return block.id === payload.id
      })
      if (payload.title) {
        block.title = payload.title
      }
      if (payload.content) {
        block.content = payload.content
      } 
    }
  },
  actions: {
    loadBlocks ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('cspc/blocks/').once('value')
        .then(
          (data) => {
            const blocks = []
            const obj = data.val()
            for (let key in obj) {
              blocks.push({
                id: key,
                title: obj[key].title,
                imageUrl: obj[key].imageUrl,
                content: obj[key].content
              })
            }
            commit('setLoading', false)
            commit('setLoadedBlocks', blocks)
          }
        )
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createBlocks ({commit}, payload) {
      const block = {
        title: payload.title,
        content: payload.content
      }
      let imageUrl
      let key
      firebase.database().ref('cspc/blocks/').push(block)
        .then(
          (data) => {
            key = data.key
            return key
          }
        )
        .then(
          key => {
            const filename = payload.image.name
            console.log(payload.image.name)
            const ext = filename.slice(filename.lastIndexOf('.'))
            return firebase.storage().ref('cspc/blocks/' + key + '.' + ext).put(payload.image)
          }
        )
        .then(
          fileData => {
            let imagePath = fileData.metadata.fullPath
            console.log(imagePath)
            return firebase.storage().ref().child(imagePath).getDownloadURL()
          }
        )
        .then(
          url => {
            imageUrl = url
            console.log(imageUrl)
            return firebase.database().ref('cspc/blocks/').child(key).update({imageUrl: imageUrl})
          }
        )
        .then(
          () => {
            commit('createBlocks', {
              ...block,
              imageUrl: imageUrl,
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
    updateBlockData ({commit}, payload) {
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title) {
        updateObj.title = payload.title
      }
      if (payload.content) {
        updateObj.content = payload.content
      }
      firebase.database().ref('cspc/blocks/').child(payload.id).update(updateObj)
        .then(
          () => {
            commit('setLoading', false)
            commit('updateBlock', payload)
          }
        )
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    }
  },
  getters: {
    loadedBlocks (state) {
      return state.loadedBlocks
    },
    loadedBlock (state) {
      return (blockId) => {
        return state.loadedBlocks.find((block) => {
          return block.id === blockId
        })
      }
    }
  }
}