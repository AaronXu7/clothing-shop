import {request} from './request'

export function getHomeMultiData(){
    return request({
        url:'/home/multidata'
    })
}

export function getHomePopData(){
    return request({
        url:'/home/data',
        params:{
            type:'pop',
            page:1
        }
    })
}

export function getHomeProducts(type,page){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}