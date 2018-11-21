import Vue from 'vue'
import Vuex from 'vuex'

import threeDExamples from './3d_examples'
import cspc from './cspc'
import user from './user'
import shared from './shared'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    threeDExamples: threeDExamples,
    cspc: cspc,
    user: user,
    shared: shared
  }
})
