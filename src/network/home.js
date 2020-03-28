import {request,request2} from './request'

export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
export function getHomeGoods(word, page){
  return request2({
    url:'/index?key=d228f2dd9ad5f5449a60b6ff7f3d59ec&num=6',
    params: {
      word,
      page
    }
  })
}