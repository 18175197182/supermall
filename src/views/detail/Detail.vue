<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll class="detail-scroll">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :base-info="baseInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
        <li>21</li>
        <li>22</li>
        <li>23</li>
        <li>24</li>
        <li>25</li>
        <li>26</li>
        <li>27</li>
        <li>28</li>
        <li>29</li>
        <li>30</li>
        <li>31</li>
        <li>32</li>
        <li>33</li>
        <li>34</li>
        <li>35</li>
        <li>36</li>
        <li>37</li>
        <li>38</li>
        <li>39</li>
        <li>40</li>
        <li>41</li>
        <li>42</li>
        <li>43</li>
        <li>44</li>
        <li>45</li>
        <li>46</li>
        <li>47</li>
        <li>48</li>
        <li>49</li>
        <li>50</li>
      </ul>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll';

import { getDetailData, BaseInfo, ShopInfo } from "network/detail.js";

import DetailNavBar from "./childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailBaseInfo from "./childComp/DetailBaseInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      // 存储商品详情轮播图
      topImages: [],
      // 存储baseInfo的数据
      baseInfo: {},
      // 存储shopInfo的数据
      shopInfo: {}
    };
  },
  created() {
    // 保存查询参数
    this.iid = this.$route.query.iid;
    // 发送请求
    getDetailData({ iid: this.iid }).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.baseInfo = new BaseInfo(res.result);
      this.shopInfo = new ShopInfo(res.result.shopInfo);
    });
  },
};
</script>

<style scoped>
.detail .detail-scroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>