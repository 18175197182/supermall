import {request} from './request';

export function getDetailData(params){
  return request({
    url: '/detail',
    params,
  });
}