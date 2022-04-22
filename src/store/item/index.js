import {reqGetAll,reqGetKeywordItem} from '../../api'
const state={
    allItems:[],
    keywordItem:[]
}
const actions={
    async reqGetAll(context){
        let result = await reqGetAll()
        if(result.errno == 0){
            context.commit('GETALL',result.data)
        }
    },
    async reqKeywordItem(context,keyword){
        if(keyword){
            let result = await reqGetKeywordItem(keyword)
            if(result.errno == 0){
                context.commit('REQKEYWORDITEM',result.data)
            }
        }
        else context.commit('REQKEYWORDITEM',[])
        
    }
}
const mutations = {
    GETALL(state,data){
        state.allItems  = data
    },
    REQKEYWORDITEM(state,data){
        state.keywordItem = data
    }
}
const getters = {

}
export default{
    state,
    actions,
    mutations,
    getters
}
