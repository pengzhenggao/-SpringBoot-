import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user'
import tagsView from './modules/tagsView'
import persistence from "./modules/persistence";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    permission,
    user,
    tagsView,
    persistence
  },
  // 定义全局getters 方便访问user 模块的roles
  getters:{
    token: state => state.user.token,
    userLogin: state => state.user.userLogin,
    roles: state => state.user.roles,
    permission_routes: state => state.permission.routes,
    toolbarSelect:state => state.persistence.toolbarSelect
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
