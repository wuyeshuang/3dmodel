<template>
  <div id="signin">
    <div class="signin-body">
      <div class="signin-title">
        <span>Model Box</span>
        <div>与世界分享你的3d模型</div>
      </div>
      <div class="signin-window">
        <div class="sign-line"></div>
        <div>
          <router-view v-if="isRouterShow"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "../Header"
  export default {
    name: 'SignIn',
    // components: {
    //   Header
    // },
    provide () {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterShow: true
      }
    },
    methods:{
      async reload() {
          this.isRouterShow = false
          await this.$nextTick()
          this.isRouterShow = true
        }
      },
    created(){
      var url="/api/user/User/userInfo"
      this.$axios.get(url).then(res=>{
        this.$store.state.userInfo.loginCode=res.data.code
        if(this.$store.state.userInfo.loginCode==200){
          // this.$router.push({path:'/'})
        }
      })

    },
    mounted(){

    },
    updated(){
    },
    watch:{

    },

    // beforeRouteEnter:(to,from,next)=>{
    //   if($cookies.get('userInfo')){
    //     next("/");
    //   }else{
    //     next("/SignIn");
    //   }
    // }
  }
</script>

<style scoped>
  /* html{ width: 100%; height: 100%;} */
  #signin{ width: 100%; min-height: 100%; background: url(../../assets/bg.png) no-repeat center center; background-size: cover; padding: 186px 0;}
  /* .signin-body{ display: flex; flex-direction: column;} */
  .signin-body{ text-align: center;}
  .signin-title{ width: 100%; text-align: center; margin: 0 0 45px 0;}
  .signin-title>span{ display: block; font-size: 52px; line-height: 70px; color: #f85d39;}
  .signin-title>div{ font-size: 16px; line-height: 26px; color: #333;}
  .signin-window{ padding: 56px 122px; background: #fff; margin: 0 auto; border-radius: 4px; position: relative; overflow: hidden; display: inline-block;}
  .sign-line{ width: 100%; height: 4px; background: url(../../assets/jbline.png) no-repeat; background-size: 100% 100%; left: 0; top: 0; position: absolute;}




</style>
