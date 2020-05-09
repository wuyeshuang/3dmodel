<template>
  <div>
    <!-- <Header/> -->

    <div id="app-body">
      <div class="app-body">
        <div class="homepage">
          <Homepage/>
        </div>
        <div class="mainright">
          <MainRight/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import Header from "./Header"
  import Homepage from "./main/homepage/Homepage"
  import MainRight from "./main/mainRight/MainRight"
  export default {
    name: 'Body',
    components: {
      Homepage,
      MainRight
    },
    created(){
      
    }
  }
</script>

<style scoped>
  #app-body{ width: 1280px; margin: 0 auto; padding: 0 0 40px 0;}
  .app-body{ display: flex; justify-content: space-between;}
  .homepage{ width: 940px; background: #fff; border: 1px #e6e6e6 solid; box-sizing: border-box; border-radius: 3px;}
  .mainright{ width: 310px;}
</style>
