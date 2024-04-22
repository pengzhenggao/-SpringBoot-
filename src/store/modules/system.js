import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default {
    state: {
        systemAnnouncements:true,
        promptSounds:true,

    },
    mutations: {
        updateSystemAnnouncements(state, current) {
            state.systemAnnouncements = current
        },
        updatePromptSounds(state, current) {
            state.promptSounds = current
        },
    },
    actions: {},
    modules: {},
    plugins: [
        createPersistedState({
            storage: window.sessionStorage
        })
    ]
}