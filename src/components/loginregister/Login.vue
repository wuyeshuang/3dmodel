<template>
  <div id="Login" v-loading="loading" element-loading-text="登陆中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(255, 255, 255, 0.8)">
    <div class="sign-slogan">欢迎回来</div>
    <div class="sign-form">
      <div class="sign-form-item">
        <div class="sign-form-icon">
          <img src="../../assets/login1.png">
          <img src="../../assets/sline.png">
        </div>
        <div class="sign-form-input">
          <input type="text" v-model="username" name="" value="" placeholder="请输入手机号">
        </div>
      </div>
      <div class="sign-form-warning" v-if="phoneError">请输入正确的手机号</div>
      <!-- <div class="sign-form-warning" v-if="phineNonExistent">账号未注册,你可以去注册</div> -->
    </div>
    <div class="sign-form">
      <div class="sign-form-item">
        <div class="sign-form-icon">
          <img src="../../assets/login2.png">
          <img src="../../assets/sline.png">
        </div>
        <div class="sign-form-input">
          <input type="password" v-model="password" name="" value="" placeholder="请输入密码">
        </div>
      </div>
      <!-- <div class="sign-form-warning" v-if="passwordEasy">请输入6-15位有效密码</div>
      <div class="sign-form-warning" v-if="passwordError">账号或密码错误，请重新输入</div> -->
    </div>
    <div class="sign-form">
      <input class="sign-form-button" type="button" value="登陆" @click="toLogin">
    </div>
    <div class="sign-more">
      <router-link to="/SignIn/RegisterOne"><span>免费注册</span></router-link>
      <router-link to="/SignIn/RetrieveOne"><span>忘记密码？</span></router-link>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'Login',

    data() {
      return {
        // phineNonExistent:false,
        // passwordError:false,
        phoneError:false,
        // passwordEasy:false,
        username:'',
        password:'',
        loading: false
      }
    },
    methods:{
      toLogin(){
        this.loading=true
        if(this.username==""){
          this.$message.error('请输入手机号')
          return false
        }else if(this.password==""){
          this.loading=false
          this.$message.error('请输入密码')
          return false
        }else{
          var url="/api/user/User/login"
          this.$axios.post(url,qs.stringify({
            phone: this.username,
            password:this.password,
          })).then(res=>{
            console.log(res)
            if(res.data.message=="未找到该用户"){
              this.loading=false
              this.$message.error('该用户未被注册')
              return false
            }else if(res.data.message=="输入的密码不正确"){
              this.loading=false
              this.$message.error('密码错误')
              return false
            }else if(res.data.message=="password长度不符合要求 6,15"){
              this.loading=false
              this.$message.error('请输入6-15位有效密码')
              return false
            }
            else if(res.data.message=="操作成功"){
              this.$message({
                message: '登陆成功',
                type: 'success'
              });
              // this.phineNonExistent=this.passwordError=this.phoneError=this.passwordEasy=false
              // console.log(res.data)
              // var userjm={}
              // userjm.id=res.data.data.id
              // userjm.username=res.data.data.username
              // this.$cookies.set('userInfo',userjm)
              this.$router.push({path:'/'})
            }
          })
        }
      }
    },
    beforeCreate(){

    },
    created(){

    },
    mounted(){

      $(".sign-form-input input").focus(function(){
        $(this).parent().parent().addClass("sign-form-item-active")
      })
      $(".sign-form-input input").blur(function(){
        $(this).parent().parent().removeClass("sign-form-item-active")
      })
    },
    updated(){
    },
    watch: {
      username:function(){
        if(!(/^1[345789]\d{9}$/.test(this.username))){
            this.phoneError=true
            return false;
        }else{
          this.phoneError=false
        }
      }
    }
  }
</script>

<style scoped>
  #Login{ width: 360px;}
</style>
