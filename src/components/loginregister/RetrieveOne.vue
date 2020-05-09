<template>
  <div id="RetrieveOne">
    <div class="sign-slogan">重置密码</div>
    <div class="retrieve-one" v-show="!retrieveShow">
      <div class="schedule">
        <div class="schedule-line"></div>
        <div class="schedule-line"></div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>验证</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>重置密码</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>重置成功</div>
        </div>
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login1.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="tel" v-model="phone" name="" value="" placeholder="请输入手机号">
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
            <input type="text" name="" value="" placeholder="输入验证码">
          </div>
        </div>
        <!-- <div class="sign-form-warning">账号未注册,你可以去注册</div> -->
        <button class="captchaBtn" @click="obtainQr"></button>
      </div>
      <div class="sign-form">
        <router-link to="/SignIn/RetrieveTwo"><input class="sign-form-button2" type="button" value="下一步"></router-link>
      </div>
      <div class="sign-more">
        <router-link to="/SignIn/Login"><span>返回登陆</span></router-link>
      </div>
    </div>
    <div class="retrieve-two" v-show="retrieveShow">
      <div class="schedule">
        <div class="schedule-line schedule-line-active"></div>
        <div class="schedule-line"></div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>验证</div>
        </div>
        <div class="schedule-item schedule-item-active">
          <span></span>
          <div>重置密码</div>
        </div>
        <div class="schedule-item">
          <span></span>
          <div>重置成功</div>
        </div>
      </div>
      <div class="sign-form">
        <div class="sign-form-item">
          <div class="sign-form-icon">
            <img src="../../assets/login2.png">
            <img src="../../assets/sline.png">
          </div>
          <div class="sign-form-input">
            <input type="tel" name="" value="" placeholder="输入密码">
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
            <input type="tel" name="" value="" placeholder="再次输入密码">
          </div>
        </div>
        <!-- <div class="sign-form-warning">账号未注册,你可以去注册</div> -->
      </div>
      <div class="sign-form">
        <router-link to="/SignIn/RetrieveThree"><input class="sign-form-button2" type="button" value="下一步"></router-link>
      </div>
      <div class="sign-more">
        <router-link to="/SignIn/Login"><span>返回登陆</span></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'RetrieveOne',

    data() {
      return {
        phone:'',
        testing:true,
        retrieveShow:false,
        phoneError:false
      }
    },
    methods: {
      obtainQr() {
        var url="/api/user/User/validateCode"
        this.$axios.post(url,qs.stringify({
          phone: this.phone,
          type:3
        })).then(res=>{
          console.log(res)
          if(res.data.message=="未找到相关用户"){
            this.$message.error('未找到相关用户')
            return false
          }else if(res.data.message=="操作成功"){
            // this.$message.error('未找到相关用户')
            // return false
          }
        })
      }
    },
    created() {

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
                // console.info('倒计时:' + seconds);
                that.html(seconds + '秒');
                if (seconds <= 0) {
                  that.html('再次获取');
                  resolve(setTimer)
                }
              }, 1000)
          })
          promise.then((setTimer) => {
            // console.info('清除');
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
      }
    }
  }
</script>

<style scoped>
  #RetrieveOne{width: 360px;}
  .sign-form2{ display: flex; justify-content: space-between;}
  .sign-form2>.sign-form-item{ width: 238px; }
  .captchaBtn{ width: 114px; height: 50px; border: 1px #eaeaea solid; box-sizing: border-box; border-radius: 4px; line-height: 48px; font-size: 16px; color: #666; background: none;}
</style>
