<template>
  <div id="index">
    <Header/>
    <!-- <Body/> -->
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./Header"
  import Body from "./Body"
  export default {
    name: 'Index',
    components: {
      Header,
      Body
    },
    data(){
      return{

      }
    },
    methods:{

    },
    created(){

      var url="/api/user/User/userInfo"
      this.$axios.get(url).then(res=>{
        this.$store.commit("pdisLogin",res.data.data)
        this.$store.state.userInfo.loginCode=res.data.code
        if(this.$store.state.userInfo.loginCode==200){
          this.$store.state.userInfo.id=res.data.data.id
          this.$store.state.userInfo.username=res.data.data.username
          this.$store.state.userInfo.nickname=res.data.data.nickname

        }else if(this.$store.state.userInfo.loginCode==444){
          this.$router.push({path:'/SignIn'})
        }
      })
    }
  }
</script>

<style scoped>
  #index{ background: #eee;}
</style>
