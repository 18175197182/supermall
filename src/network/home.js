import {request} from 'network/request';

export function getHomeMultidata(){
  return  request({
    url: "/home/multidata",
  });
}

export function getHomeData(params){
  return request({
    url: "/home/data",
    params,
  });
}