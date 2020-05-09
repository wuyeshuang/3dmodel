<template>
  <div id="homepage">
    <ul class="home-ul">
      <li>
        <router-link to="/">
          <div>
            <img src="../../../assets/i1-1.png" alt="">
            <img src="../../../assets/i1-2.png" alt="">
            我的模型库
          </div>
        </router-link>
       </li>
      <li>
        <router-link to="/mycooperation">
          <div>
            <img src="../../../assets/i2-1.png" alt="">
            <img src="../../../assets/i2-2.png" alt="">
            我的协作
          </div>
        </router-link>
      </li>
    </ul>
    <div class="home-view">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Homepage',
    
  }
</script>

<style scoped>
  .home-ul{ background: #fffbfb; border-bottom: 1px #eaeaea solid; display: flex;}
  /* .home-ul li{ border-right: 1px #eaeaea solid;} */
  /* .home-ul li:last-child{ border: none;} */
  .home-ul li div{ padding: 0 45px; height: 69px; line-height: 65px; display: flex; justify-content: center; align-items: center; border-top: 3px #fffbfb solid; border-bottom: 1px transparent solid; box-sizing: border-box; font-size: 18px; color: #333; margin: 0 0 -1px 0;}
  .home-ul li div img{ margin: 0 5px 0 0;}
  .home-ul li div img:nth-child(2){ display: none;}
  .home-ul li .router-link-active,.router-link-exact-active div img:nth-child(1){ display: none !important;}
  .home-ul li .router-link-active,.router-link-exact-active div img:nth-child(2){ display: block !important;}
  .home-ul li .router-link-exact-active div{ color: #f85d39 !important; border-top-color: #fc7048 !important; border-bottom-color: #fff !important; background: #fff;}
  .home-ul li .router-link-active,.router-link-exact-active{ border-right: 1px #eaeaea solid;}
  .home-view{ padding: 14.5px;}
</style>
