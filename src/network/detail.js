import {request} from './request'

export function getDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })
}

export class Product {
    constructor(itemInfo,columns,services){
        this.title = itemInfo.title
        this.newPrice = itemInfo.price
        this.oldPrice = itemInfo.oldPrice
        this.desc = itemInfo.discountDesc
        this.descColor = itemInfo.discountBgColor
        this.columns = columns
        this.services = services
        this.lowPrice = itemInfo.lowNowPrice
    }
}

export class ProductInfo {
    constructor(itemParams){
        this.sizeDisclaimer = itemParams.rule.disclaimer
        this.size = itemParams.rule.tables[0]
        this.params = itemParams.info.set
    }
}

export class Shop {
    constructor(showInfo){
        this.sell = showInfo.cSells
        this.goods = showInfo.cGoods
        this.fans = showInfo.cFans
        this.name = showInfo.name
        this.id = showInfo.shopId
        this.logo = showInfo.shopLogo
        this.link = showInfo.shopUrl
        this.score = showInfo.score
    }
}