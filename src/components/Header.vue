<template>
  <div id="app-header">
    <div class="app-header-cont">
      <!-- <div class="logo"> -->
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="103px" height="40px">
          <image x="0px" y="0px" width="103px" height="40px" xlink:href="data:img/png;base64,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" />
        </svg>
      </router-link>
      <!-- </div> -->
      <form onsubmit="return false;">
        <div class="search">
          <input type="text" @keydown="addByEnterKey" v-model="keyword" name="userSearch" id="userSearch" placeholder="Search for...">
          <router-link :to="{name:'Search',query:{searchData:keyword}}"><input type="button" name="" id="" value=""
              @click="userSearch"></router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Heaher',
    data() {
      return {
        keyword: ""
      }
    },
    methods: {
      userSearch() {
        // console.log(this.keyword)
      },
      addByEnterKey(e) {
        //Enter键的代码就是13
        if (e.keyCode == 13) {
          this.add();
        }
      },
      add() {

        this.$router.push({
          path: '/search',
          query: {
            searchData: this.keyword
          }
        });
        return false
      },
      enterEvent() {
        // this.$router.push({path:'/search'});
      }

    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped>
  #app-header{ height: 80px; background: #fff; box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05); margin: 0 0 40px 0;}
  .app-header-cont{ width: 1280px; background: #fff; margin: 0 auto; display: flex; padding: 20px 0; justify-content: space-between;}
  .app-header-cont>a{ display: inherit;}
  /* .logo{} */
  .search{ position: relative; width: 315px; height: 40px;}
  .search>input:nth-child(1){ width: 315px; height: 40px; border: 1px #eaeaea solid; box-sizing: border-box; border-radius: 3px; outline: none; box-shadow: 0 0 5px rgba(0, 0, 0, 0.1) inset; padding: 0 0 0 46px; transition: all 0.3s ease-out;}
  .search>input:nth-child(1):hover{ border-color: #fe935f;}
  .search>input:nth-child(1):focus{ border-color: #fe935f;}
  .search input[type=button]{ width: 46px; height: 38px; position: absolute; left: 0; top: 0; background: url(../assets/search.png) no-repeat center center; border: none; outline: none;}
</style>
