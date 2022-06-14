import request from "../../utils/request";

//根据用户id查询用户详情
export function queryByidUserDetails(id){
    return request({
        url:`/sysUserDetails/oneUserDetails/${id}`,
        method:"get"
    })
}
//增加信息
export function addUserDetails(data){
    return request({
        url:"/sysUserDetails/addUserDetails",
        method:"POST",
        data:data
    })
}

//模糊查询
export function queryUserDetails(queryType){
    return request({
        url:`/sysUserDetails/queryUserDetails/${queryType}`,
        method:"get"
    })
}