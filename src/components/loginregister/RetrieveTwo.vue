<template>
  <div id="RetrieveTwo">
    <div class="sign-slogan">重置密码</div>
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
</template>

<script>
  export default {
    name: 'RetrieveThree',

    data() {
      return {

      }
    },
    methods: {

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

    },
    updated() {},
    watch: {

    }
  }
</script>

<style scoped>
  #RetrieveTwo{width: 360px;}

</style>
