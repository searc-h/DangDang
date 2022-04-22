import {
     reqLogin,
     reqRegister,
     reqAddToMyCart ,
     reqGetMyCart,
     reqRemovetoCart ,
     reqChangeCount,
     reqChangeChecked ,
     reqChangeAllChecked
} from "../../api"
const state={
    
}
const actions={
    async Login(context,params){
        let result = await reqLogin(params)
        if(result.errno == 0){
            context.commit('LOGIN',result.data)
            return result.data
        }else{
            return {message:result.message}
        }
        
    },
    async Register(_,params){

        let result = await reqRegister(params)
        if(result.errno == 0){
            return result.data
        }else{
            return {message:result.message}
        }
        
    },
    async AddtoMycart(_, item){
        let result = await reqAddToMyCart (item)
        if(result.errno == 0){
            return result.data
        }else return {message:result.message}
    },

    async getMycart(_, userid){
        let result = await reqGetMyCart(userid)
        if(result.errno == 0){
            return result.data
        }
        return {message:result.message}
    },

    async removeToCart(_,item){
        let result = await reqRemovetoCart(item)
        if(result.errno == 0){
            return {info:'已移除'}
        }
        return {message:result.message}
    },
    async changCount(_,item){
        let result = await reqChangeCount(item)
        if(result.errno==0){
            return result.data
        }
        return {message:result.message}
    },
    async changeChecked(_,item){
        let result = await reqChangeChecked(item)
        if(result.errno==0){
            return result.data
        }
        return {message:result.message}
    },
    async changeAllChcked(_,item){
        let result = await reqChangeAllChecked(item)
        if(result.errno==0){
            return result.data
        }
        return {message:result.message}
    },
    async deleteAllChecked(context,itemList){
        let promiseArr = []
        itemList.forEach(async item=>{
            if(item.isChecked){
                let result = await context.dispatch('removeToCart',
                {
                    itemid:item.data.itemid,
                    userid:sessionStorage.getItem('userId'),
                })
                promiseArr.push(result)
            }
        })
        return Promise.all(promiseArr)
    }
    
}
const mutations = {
    LOGIN(_,{id,username}){
        sessionStorage.setItem('userName',username)
        
        sessionStorage.setItem('userId',id)


    },
}
const getters = {

}
export default{
    state,
    actions,
    mutations,
    getters
}