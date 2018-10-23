import * as firebase from 'firebase'

export default {
  state: {
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
        model_id: payload.model_id,
        author: payload.author,
        author_link: payload.author_link,
        description: payload.description,
        date: payload.date,
        creatorId: getters.user.id
      }
      let imageUrl
      let key
      firebase.database().ref('3d_examples').push(exmpl)
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
            return firebase.storage().ref('3d_examples/' + key + '.' + ext).put(payload.image)
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
            return firebase.database().ref('3d_examples').child(key).update({imageUrl: imageUrl})
          }
        )
        .then(
          () => {
            commit('create3DExample', {
              ...exmpl,
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
    }
  }
}
