
import requests from './requests'

export const reqLogin = (loginInfo)=>{
    return requests({
        url:'/users/login',
        method:'post',
        data:loginInfo
    })
}

export const reqRegister = (userInfo)=>{
    return requests({
        url:'/users/register',
        method:'post',
        data:userInfo
    })
}

export const reqGetAll = ()=>{
    return requests({
        url:'/useritem/getall',
        method:"get"
    })
}

export const reqGetKeywordItem = (keyword)=>{
    return requests({
        url:`/useritem/searchbykeyword?keyword=${keyword}`,
        method:'get'
    })
}

export const reqAddToMyCart = ({userid,itemid})=>{
    return requests({
        url:'/useritem/addtocart',
        method:'post',
        data:{userid:userid,itemid:itemid}
    })
}

export const reqGetMyCart = (userid)=>{
    return requests({
        url:`/useritem/getallitems`,
        method:'post',
        data:{userid:userid}
    })
}
export const reqRemovetoCart = ({userid,itemid})=>{
    return requests({
        url:'/useritem/removetocart',
        method:'post',
        data:{userid,itemid}
    })
}
export const reqChangeCount = ({userid,itemid,count})=>{
    return requests({
        url:'/useritem/changecount',
        method:'post',
        data:{userid,itemid,count}
    })
}

export const reqChangeChecked = ({userid,itemid,ischecked})=>{
    return requests({
        url:'/useritem/changechecked',
        method:'post',
        data:{userid,itemid,ischecked}
    })
}
export const reqChangeAllChecked = ({userid, ischecked})=>{
    return requests({
        url:'/useritem/changeallchecked',
        method:'post',
        data:{userid,ischecked}
    })
}