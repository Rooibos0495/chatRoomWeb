
import request from '../../utils/request';


export function loginUserInfo(userName,password){
    return request({
        url: '/sysUser/login',
        method: 'get',
        params: {
            userName:userName,
            password:password
        }
    })
}


export function getUserList() {
    return request({
        url: '/sysUser/allUserData',
        method: 'get',
    })
}

export function addUserInfo(userName,password){
    return request({
        url: '/sysUser/addUserInfo',
        method: 'post',
        params: {
            userName:userName,
            password:password
        }
    })
}