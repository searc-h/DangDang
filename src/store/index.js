import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import item from './item/index'
import user from './user/index'

export default new Vuex.Store({
    modules:{
        user,
        item
    }
})