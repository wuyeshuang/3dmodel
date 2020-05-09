<template>
  <div id="app">

    <!-- <Header/> -->
    <!-- <Body/> -->
    <router-view  v-if="isRouterShow"/>
  </div>
</template>

<script>
// import Header from "./components/Header"
// import Body from "./components/Body"

export default {
  name: 'App',
  components: {
    // Header,
    // Body
  },
  provide () {
      return {
        reload: this.reload
      }
  },
  data () {
      return {
        isRouterShow: true
      }
    },
    methods: {
      async reload () {
        this.isRouterShow = false
        await this.$nextTick()
        this.isRouterShow = true
      }
    },
  created(){

  }

}
</script>

<style>
  *{ margin: 0; padding: 0;}
  /* #app{ width: 1100px; margin: 0 auto;} */
  body{ background: #eee;}
  ul li{ list-style: none;}
  a{ text-decoration: none;}

  .elpadding{ text-align: center;}
  .elpadding button{ padding: 12px 50px !important;}
  .elpadding button:nth-child(2){ background: linear-gradient(to right, #fe8f5c,
  #fc6944);}

  .el-form-item__label{ font-size: 16px !important; padding: 0 !important; color: #333;}
  .el-textarea__inner{ height: 110px !important;}
  .el-upload-dragger{ width: 700px; height: 500px; display: flex; align-items: center; flex-direction: column;}

  .bgup .el-radio-button__inner{ border: none !important;}
  .bgup .el-radio-button--medium .el-radio-button__inner{ border-radius: 4px !important; padding: 0 !important; width: 55px; height: 26px; box-shadow: initial !important;}
  .bgup .el-radio-button{ margin: 0 15px 0 0; position: relative;}
  .bgup .is-active::after{ content: ""; width: 17px; height: 15px; display: block; overflow: hidden; position: absolute; right: 0; top: 0; background: url(assets/chkd.png) no-repeat; background-size: 100% 100%; border-radius: 0 4px 0 0;}
  .bgup .el-radio-group .el-radio-button:nth-child(1) span{ background: #e5e5e5;}
  .bgup .el-radio-group .el-radio-button:nth-child(2) span{ background: #c6c6c6;}
  .bgup .el-radio-group .el-radio-button:nth-child(3) span{ background: #999999;}
  .bgup .el-radio-group .el-radio-button:nth-child(4) span{ background: #666666;}
  .bgup .el-radio-group .el-radio-button:nth-child(5) span{ background: #333333;}
  .bgup .el-radio-group .el-radio-button:nth-child(6) span{ background: #000000;}

  .avatar-uploader .el-upload {
     border: 1px dashed #d9d9d9;
     border-radius: 6px;
     cursor: pointer;
     position: relative;
     overflow: hidden;
   }
   .avatar-uploader .el-upload:hover {
     border-color: #f85d39;
   }
   .pic-upload-iocn {
     border-radius: 3px;
     width: 180px;
     height: 120px;
     text-align: center;
   }
   .pic-upload-iocn .plus2{ margin: 34px 0 0 0;}
   .pic-upload-iocn>h6{font-size: 16px !important;
     font-weight: 300;
     color: #333;}
   .avatar {
     width: 180px;
     height: 120px;
     display: block;
   }

   .sgform .sgform-li label{ width: 100% !important;}
   .sgform .sgform-li .el-form-item__content{ margin-left: 0 !important;}

   .file-suffix-radio-group{}
   .file-suffix-radio-group .el-radio-button{ margin: 0 15px 0 0;}
   .file-suffix-radio-group .el-radio-button__inner{ border: none !important; font-size: 14px !important; color: #333 !important; background: #f6f6f6 !important; border-radius: 3px !important; box-shadow: initial !important; padding: 0 !important; width: 55px !important; line-height: 26px !important;}
   .file-suffix-radio-group .is-active .el-radio-button__inner{ background: #f85d39 !important; color: #fff !important;}





   .model-ul{ overflow: hidden;}
   .model-ul>li{ width: 303px; float: left;}
   .model{ padding: 14.5px; position: relative;}
   .model-top{ position: relative;}
   .model-img{ width: 274px; height: 185px; border-radius: 4px; overflow: hidden;}
   .model-img-zz{ position: absolute; width: 100%; height: 100%; left: 0; top: 0; border-radius: 4px; overflow: hidden; background: linear-gradient(transparent, transparent, transparent, rgba(0, 0, 0, 0.7));}
   .model-col{ position: absolute; left: 0; bottom: 0; z-index: 2; width: 254px; padding: 10px; display: flex; justify-content: space-between; z-index: 3;}
   .model-col1{ display: flex;}
   .privacy{ display: flex; align-items: center; font-size: 14px; line-height: 22px; color: #fff; margin: 0 20px 0 0;}
   .privacy img{ margin: 0 7px 0 0;}
   .model-col2{ display: flex; align-items: center; font-size: 14px; line-height: 22px; color: #fff;}
   .model-col2 img{ margin: 0 7px 0 0;}
   .model-bt{ margin: 10px 0 0 0; padding: 0 10px;}
   .model-title{ font-size: 16px; line-height: 28px; color: #333; transition: all 0.3s ease-out;}
   .model:hover .model-title{ color: #f85d39;}
   .model-time{ display: flex; align-items: center; font-size: 14px; line-height: 24px; color: #666;}
   .model-time img{ margin: 0 5px 0 0;}
   .model-user{ display: flex; justify-content: space-between; padding: 5px 0 0 0; align-items: center;}
   .model-user-info{ display: flex; justify-content: space-between; align-items: center; font-size: 14px; line-height: 26px; color: #333;}
   .model-user-info img{ margin: 0 5px 0 0; width: 26px; height: 26px; border-radius: 50%; overflow: hidden;}

.portrait-edit .avatar-uploader .el-upload{ border: none; border-radius: 50%;}



.share-popup .el-input__inner{ padding: 0 0 0 48px !important; background: url(assets/dq.png) no-repeat; background-position: 15px center;}



.download-checkbox-item .el-checkbox{ border-bottom: 1px #eaeaea solid; display: flex; justify-content: space-between; align-items: center; margin: 0;}
.download-checkbox-item .el-checkbox:last-child{ border: none;}
.download-checkbox-item .el-checkbox__label{ padding: 0; font-size: 16px; color: #666; line-height: 55px; margin: 0 10px 0 0; order: 1;}
.download-checkbox-item .el-checkbox__input{ order: 2; margin: 2px 0 0 0;}
.checkbox-all{ border-bottom: 1px #eaeaea solid; display: flex; align-items: center; justify-content: space-between;}
.checkbox-all .el-checkbox__label{ padding: 0 0 0 15px; font-size: 16px; color: #333; line-height: 55px; margin: 0 10px 0 0; order: 1;}
.checkbox-all  .el-checkbox__input{ order: 2; margin: 2px 15px 0 0;}
.download-checkbox-item{ padding: 0 15px;}
.checkbox-body{ border: 1px #eaeaea solid; box-sizing: border-box; border-radius: 4px;}



/* .remd-file-upload .el-upload-list{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%;} */
</style>
