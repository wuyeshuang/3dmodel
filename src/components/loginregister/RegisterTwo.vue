<template>
  <div id="registerTwo">
    <div class="sign-slogan">欢迎注册</div>
    <!-- <div class="schedule">
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
    </div> -->
    <div class="sign-success">
      <img src="../../assets/zccg.png">
      <span>恭喜您，注册成功！</span>
    </div>
    <div class="sign-form">
      <router-link to="/"><input class="sign-form-button2" type="button" value="进入工作台"></router-link>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'RegisterTwo',

    data() {
      return {

      }
    },
    methods: {

    },
    created() {

    },
    mounted() {




    },
    updated() {},
    watch: {

    }
  }
</script>

<style scoped>
  #registerTwo{width: 360px;}
  .sign-success{ width: 100%; text-align: center; margin: 0 0 30px 0;}
  .sign-success>span{ display: block; color: #333; font-size: 16px; line-height: 36px;}
</style>
