<template>
  <div id="RegisterOne">
    <div class="sign-slogan">欢迎注册</div>
    <div class="register-one" v-show="!registerShow">
      <div class="schedule">
        <div class="schedule-line"></div>
        <div class="schedule-line"></div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>验证</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>填写信息</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>注册成功</div>
        </div>
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login1.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="tel" name="" v-model="phone" @blur.prevent="upperCase" value="" placeholder="请输入手机号">
          </div>
        </div>
        <div class="sign-form-warning" v-if="phoneError">请输入正确的手机号</div>
      </div>
      <div class="sign-form sign-form2">
        <div class="testing" v-if="testing"></div>
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login3.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="text" name="" v-model="validateCode" value="" placeholder="输入验证码">
          </div>
        </div>
        <!-- <div class="sign-form-warning">账号未注册,你可以去注册</div> -->
        <button class="captchaBtn" @click="obtainQr"></button>
      </div>
      <div class="sign-form">
        <!-- <router-link to="/SignIn/RegisterTwo"> -->
          <input class="sign-form-button2" type="button" value="下一步" @click="toRegisterTwo">
        <!-- </router-link> -->
      </div>
      <div class="sign-more">
        <router-link to="/SignIn/Login"><span>已有账号！登陆</span></router-link>
      </div>
    </div>
    <div class="register-two" v-show="registerShow">
      <div class="schedule">
        <div class="schedule-line schedule-line-active"></div>
        <div class="schedule-line"></div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>验证</div>
        </div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>填写信息</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>注册成功</div>
        </div>
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login4.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="text" v-model="username" name="" value="" placeholder="输入用户名">
          </div>
        </div>
        <!-- <div class="sign-form-warning">账号未注册,你可以去注册</div> -->
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login2.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="password" v-model="password" name="" value="" placeholder="输入密码">
          </div>
        </div>
        <!-- <div class="sign-form-warning">账号未注册,你可以去注册</div> -->
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login2.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="password" v-model="repassword" name="" value="" placeholder="再次输入密码">
          </div>
        </div>
        <div class="sign-form-warning" v-if="repsd">两次输入的密码不一致</div>
      </div>
      <div class="sign-form">
        <!-- <router-link to="/SignIn/RegisterThree"> -->
          <input class="sign-form-button2" type="button" value="下一步" @click="submitRegister">
        <!-- </router-link> -->
      </div>
      <div class="sign-more">
        <!-- <router-link to="/SignIn/RegisterOne"> -->
         <a href="javascript:;"><span @click="toRegisterOne">返回上一页</span></a>
        <!-- </router-link> -->
        <router-link to="/SignIn/Login"><span>已有账号！登陆</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'RegisterOne',
    inject: ['reload'],
    data() {
      return {
        registerShow:false,
        phone:'',
        validateCode:'',
        phoneError:false,
        testing:true,
        username:'',
        password:'',
        repassword:'',
        repsd:false,
        // allowNextStep:false
      }
    },
    methods: {
      reloadFun() {
        this.reload()
      },
      obtainQr() {
        var url="/api/user/User/validateCode"
        this.$axios.post(url,qs.stringify({
          phone: this.phone,
          type:1
        })).then(res=>{
          // this.$message({
          //   message: '验证码已发送，请注意查收',
          //   type: 'success'
          // });
          if(res.data.message=="用户已存在"){
            this.$message.error('手机号已经被注册')
            this.reloadFun()
            return false
          }
          else if(res.data.message=="操作成功"){
            this.$store.state.sign.yzqrcode1=true
          }
        })
      },
      toRegisterTwo(){
        if(this.$store.state.sign.yzqrcode1==false){
          this.$message.error('请先输入手机号和验证码')
          return false
        }
        else if(this.$store.state.sign.yzqrcode1==true){
          this.registerShow = !this.registerShow
        }
        // if(this.phone=='' || this.validateCode==''){
        //   this.$message.error('请先输入手机号和验证码')
        //   return false
        // }else{
        //   this.registerShow = !this.registerShow
        // }
      },
      toRegisterOne(){
        this.registerShow = !this.registerShow
      },
      submitRegister(){
        var url="/api/user/User/register"
        this.$axios.post(url,qs.stringify({
          username: this.username,
          nickname: this.username,
          password:this.password,
          phone: this.phone,
          code: this.validateCode
        })).then(res=>{
          console.log(res)
          if(res.data.message=="username不能为空"){
            this.$message.error('请输入用户名')
            return false
          }else if(res.data.message=="username长度不符合要求 3,40"){
            this.$message.error('请输入3-40位有效用户名')
            return false
          }else if(res.data.message=="password不能为空"){
            this.$message.error('请输入密码')
            return false
          }else if(this.password != this.repassword){
            this.$message.error('两次输入的密码不一致')
            return false
          }else if(res.data.message=="password长度不符合要求 6,15"){
            this.$message.error('请输入6-15位有效密码')
            return false
          }else if(res.data.message=="验证码校验失败"){
            this.$message.error('验证码错误')
            this.registerShow = !this.registerShow
            return false
          }
        })
      },
      upperCase(){
        // if(!(/^1[34578]\d{9}$/.test(this.phone))){
        //     this.phoneError=true
        //     return false;
        // }else{
        //   this.phoneError=false
        //   this.testing=false
        // }

      }


    },
    created() {
      // console.log(this.$store.state.userInfo)
      // var userjm={isLogin:true}
      // this.$cookies.set('userInfo',userjm)
      // console.log(this.$cookies.get('userInfo'))
    },
    mounted() {
      $(".sign-form-input input").focus(function() {
        $(this).parent().parent().addClass("sign-form-item-active")
      })
      $(".sign-form-input input").blur(function() {
        $(this).parent().parent().removeClass("sign-form-item-active")
      })

      $(function() {
        $(".captchaBtn").html('获取验证码').on("click", function() {
          var that = $(this);
          var seconds = 60;
          that.attr("disabled", true);
          that.html(seconds + '秒');
          let promise = new Promise((resolve, reject) => {
            let setTimer = setInterval(
              () => {
                seconds -= 1;
                that.html(seconds + '秒');
                if (seconds <= 0) {
                  that.html('再次获取');
                  resolve(setTimer)
                }
              }, 1000)
          })
          promise.then((setTimer) => {
            clearInterval(setTimer);
            that.attr("disabled", false);
          })

        })
      });


    },
    updated() {},
    watch: {
      phone:function(){
        if(!(/^1[345789]\d{9}$/.test(this.phone))){
            this.phoneError=this.testing=true
            return false;
        }else{
          this.phoneError=this.testing=false
        }
      },
      password:function(){
        if(this.repassword == ''){
          this.repsd = false
        }else if(this.repassword != this.password){
          this.repsd = true
        }else{
          this.repsd = false
        }
      },
      repassword:function(){
        if(this.repassword == ''){
          this.repsd = false
        }else if(this.repassword != this.password){
          this.repsd = true
        }else{
          this.repsd = false
        }
      }
    },
    destroyed(){
      this.$store.state.sign.yzqrcode1=false
    }


  }
</script>

<style scoped>
  #RegisterOne{width: 360px;}
  .sign-form2{ display: flex; justify-content: space-between;}
  .sign-form2>.sign-form-item{ width: 238px; }
  .captchaBtn{ cursor: pointer; width: 114px; height: 50px; border: 1px #eaeaea solid; box-sizing: border-box; border-radius: 4px; line-height: 48px; font-size: 16px; color: #666; background: none;}
</style>
