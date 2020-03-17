import {request} from './request';

export function getDetailData(params){
  return request({
    url: '/detail',
    params,
  });
}

export class BaseInfo {
  constructor(result){
    this.title = result.itemInfo.title;
    this.price = result.itemInfo.price;
    this.oldPrice = result.itemInfo.oldPrice;
    this.columns = result.columns;
    this.discountBgColor = result.itemInfo.discountBgColor;
  }
}

export class ShopInfo {
  constructor(shopInfo){
    this.shopLogo = shopInfo.shopLogo;
    this.allGoodsUrl = shopInfo.allGoodsUrl;
    this.cFans = shopInfo.cFans;
    this.cGoods = shopInfo.cGoods;
    this.cSells = shopInfo.cSells;
    this.isMarked = shopInfo.isMarked;
    this.level = shopInfo.level;
    this.name = shopInfo.name;
    this.nonsupportReasonRefound = shopInfo.nonsupportReasonRefound;
    this.score = shopInfo.score;
    this.services = shopInfo.services;
    this.shopId = shopInfo.shopId;
    this.shopUrl = shopInfo.shopUrl;
    this.type = shopInfo.type;
    this.userId = shopInfo.userId;
  }
}