import {request,request2} from './request'

export function getDetailSwiper(word){
  return request2({
    url:'/index?key=d228f2dd9ad5f5449a60b6ff7f3d59ec&num=6',
    params:{
      word
    }    
  })
}
export function getDetailRecommend(word){
  return request2({
    url:'/index?key=d228f2dd9ad5f5449a60b6ff7f3d59ec&num=6',
    params:{
      word
    }
  })
}

export class Goods{
  constructor(itemInfo, columns, services){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}
export class GoodsParam {
  constructor(info, rule) {
    this.img = info.image? info.image[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}