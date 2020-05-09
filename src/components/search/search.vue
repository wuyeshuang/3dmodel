<template>
<!--  <div>
    <Header></Header> -->

    <div id="search">
       <div class="search-top">
          <div class="search-keyword">
            为你搜索到<span> {{searchNub}}个“{{searchData}}” </span>相关模型结果
          </div>
          <div class="choice-body">
            <div class="choice-body-li">
              <el-dropdown>
                <span class="el-dropdown-link">
                  排序<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>默认</el-dropdown-item>
                  <el-dropdown-item>最新发布</el-dropdown-item>
                  <el-dropdown-item>最多预览</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <div class="choice-body-li">
              <el-dropdown>
                <span class="el-dropdown-link">
                  类型<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>默认</el-dropdown-item>
                  <el-dropdown-item>最新发布</el-dropdown-item>
                  <el-dropdown-item>最多预览</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
       </div>
       <div class="search-body">
         <div class="search-no-result" v-if="searchElse">
           <div class="search-no-result2">
             <img src="../../assets/searchnone.png">
             <span>抱歉！没有找到与“{{searchData}}”相关的内容</span>
           </div>
         </div>
         <ul class="search-ul">
           <!-- <li>
             <div class="model">
               <div class="model-top">
                 <div class="model-img"><div class="model-img-zz"></div><img src="../../assets/t2.jpg" alt=""></div>
                 <div class="model-col">
                   <div class="model-col1">
                     <div class="privacy">
                       <img src="../../assets/userIcon.png" alt="">最佳选择
                     </div>
                   </div>
                   <div class="model-col2">
                     <img src="../../assets/list2.png" alt="">.FBX
                   </div>
                 </div>
               </div>
               <div class="model-bt">
                 <div class="model-title">Meet Mat 2的比赛-逆行者</div>
                 <div class="model-user">
                   <div class="model-user-info">
                     <img src="../../assets/portrait.jpg">
                     Ninjason_chan
                   </div>
                   <div class="model-time"><img src="../../assets/clock.png" alt="">5分钟前</div>
                 </div>
               </div>
             </div>
           </li> -->
         </ul>
       </div>
    </div>
  <!-- </div> -->
</template>

<script>
  // import Header from "../Header"
  export default {
    name: 'Search',
    // components: {
    //   Header
    // },
    data() {
      return {
        searchData: '',
        searchNub: 12,
        searchElse: true
      }
    },
    methods:{
      search_data(){
        this.searchData=this.$route.query.searchData
      }
    },
    created(){
      this.search_data()
    },
    mounted(){
      if($(".search-ul>li").length != 0){
        this.searchElse=false
      }
    },
    updated(){
    },
    watch:{
      // 如果路由有变化，会再次执行该方法
      "$route": "search_data"
    }
  }
</script>

<style scoped>
  #search{ margin: 45px auto; border: 1px #e6e6e6 solid; -webkit-box-sizing: border-box; box-sizing: border-box; background: #fff; border-radius: 3px; width: 1280px; -webkit-box-shadow: 0 0 38px rgba(0, 0, 0, 0.05); box-shadow: 0 0 38px rgba(0, 0, 0, 0.05);}
  .search-top{ display: flex; justify-content: space-between; border-radius: 3px 3px 0 0; overflow: hidden; height: 70px; border-bottom: 1px #eaeaea solid; box-sizing: border-box; background: #fffbfb;}
  .search-keyword{ font-size: 16px; line-height: 69px; color: #333; margin: 0 0 0 30px;}
  .search-keyword>span{ color: #f85d39;}
  .search-body{ padding: 15px; background: #fff;}
  .search-ul{ padding: 0 8px; display: flex; justify-content: space-between;flex-wrap: wrap;}
  .search-ul>li{ width: 303px;}

  .search-no-result{ min-height: 749px; display: flex; justify-content: center; align-items: center;}
  .search-no-result2{ width: 100%; text-align: center;}
  .search-no-result2>span{ display: block; font-size: 16px; line-height: 45px; color: #333;}
  .choice-body{ display: flex;}
  .choice-body-li{ position: relative; padding: 15px 36px 0 36px;}
  .choice-body-li .el-dropdown{ font-size: 16px; line-height: 39px; color: #333; cursor: pointer;}
  .choice-body .choice-body-li:first-child:after{ content: ""; width: 1px; height: 20px; background: #e6e6e6; position: absolute; display: block; right: 0; top: 50%; transform: translate(0, -50%);}

</style>
