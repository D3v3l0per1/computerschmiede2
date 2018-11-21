import * as firebase from 'firebase'

export default {
  state: {
    our_service: [
      {
        iconUrl: 'https://firebasestorage.googleapis.com/v0/b/computerschmiede-jenbach.appspot.com/o/icons%2Fberatung.jpg?alt=media&token=741071d3-6c7b-438c-933e-2cbe9f292fdb',
        title: 'Beratung',
        teaser_text: 'Hier ist der Laie gut aufgehoben und der Profi wird auf Augenhöhe verstanden. Zusammen finden wir die Lösung für Ihre individuellen Bedürfnisse! Ehrlich und Unabhängig!'
      }
    ]
  },
  mutations: {
    setLoadedServices (state, payload) {
      state.our_service = payload
    },
    createServices (state, payload) {
      state.our_service.push(payload)
    }
  },
  actions: {
    createServices ({commit}, payload) {
      const service = {
        title: payload.title,
        teaser_text: payload.teaser_text
      }
      let iconUrl
      let key
      firebase.database().ref('home/services/').push(service)
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
            return firebase.storage().ref('home/services/' + key + '.' + ext).put(payload.image)
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
            iconUrl = url
            console.log(iconUrl)
            return firebase.database().ref('home/services/').child(key).update({iconUrl: iconUrl})
          }
        )
        .then(
          () => {
            commit('createServices', {
              ...service,
              iconUrl: iconUrl,
              id: key
            })
          }
        )
        .catch()
    }
  },
  getters: {
    setLoadedServices (state) {
      return state.our_service
    }
  }
}