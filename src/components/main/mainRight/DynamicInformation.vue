<template>
  <div id="release">
    <div class="release-title"><div class="jbline"></div>动态信息</div>
    <div class="release-body">
      <div class="modelNone" v-if="modelElse">
        <div class="modelNone-line">
          <img src="../../../assets/noneinfo.png" alt="">
          <h5>您目前没收到任何信息！</h5>
        </div>
      </div>
      <ul class="release-ul" v-if="!modelElse">
       <li>
          <div class="re-top">
            <div class="re-top-info">
              <div class="re-portrait">
                <img src="../../../assets/portrait.jpg" alt="">
              </div>
              <div class="re-nt">
                <h4>张三</h4>
                <h5>18分钟前</h5>
              </div>
            </div>

            <div class="slh">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <img src="../../../assets/slh.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown" class="mdxc">
                  <el-dropdown-item><span><img src="../../../assets/s1_2.png"></span>接受</el-dropdown-item>
                  <el-dropdown-item><span><img src="../../../assets/s2_2.png"></span>拒绝</el-dropdown-item>
                  <el-dropdown-item><span><img src="../../../assets/s3_2.png"></span>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

          </div>
          <div class="re-ctn">
            <div class="re-tra"></div>
            <div class="re-tit">
              <img src="../../../assets/message.png" alt="">
              <span>邀请你协作文件 《3D水杯》</span>
            </div>
            <div class="re-txt">
              <span>示意文字大体上描述或表示物体的形状、相对大小、物体与物体之间的联系，描述某器材或构和工作......</span>
            </div>
          </div>
        </li>
       <li>
          <div class="re-top">
            <div class="re-top-info">
              <div class="re-portrait">
                <img src="../../../assets/portrait.jpg" alt="">
              </div>
              <div class="re-nt">
                <h4>张三</h4>
                <h5>18分钟前</h5>
              </div>
            </div>

            <div class="slh">
              <el-dropdown>
                <span class="el-dropdown-link">
                  <img src="../../../assets/slh.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown" class="mdxc">
                  <el-dropdown-item><span><img src="../../../assets/s1_2.png"></span>接受</el-dropdown-item>
                  <el-dropdown-item><span><img src="../../../assets/s2_2.png"></span>拒绝</el-dropdown-item>
                  <el-dropdown-item><span><img src="../../../assets/s3_2.png"></span>删除</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>

          </div>
          <div class="re-ctn">
            <div class="re-tra"></div>
            <div class="re-tit">
              <img src="../../../assets/message.png" alt="">
              <span>邀请你协作文件 《3D水杯》</span>
            </div>
            <div class="re-txt">
              <span>示意文字大体上描述或表示物体的形状、相对大小、物体与物体之间的联系，描述某器材或构和工作......</span>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DynamicInformation',
    data() {
      return {
        modelElse:true,
      }
    },
    methods:{

    },
    created(){
      var url="/api/user/Message/index"
      this.$axios.get(url).then(res=>{
        if(res.data.data.length!=0){
          this.modelElse=false
        }
      })
    },
    mounted(){

    }
  }
</script>

<style scoped>
  #release{ border: 1px #eaeaea solid; box-sizing: border-box; border-radius: 4px; overflow: hidden;}
  .release-title{ height: 62px; position: relative; border-bottom: 1px #eaeaea solid; box-sizing: border-box; background: #fffaf9 url(../../../assets/bell.png) no-repeat; background-position: 30px center; padding: 3px 0 0 52px; line-height: 57px; font-size: 18px; color: #f85d39;}
  .jbline{ width: 100%; height: 4px; background: url(../../../assets/jbline.png) no-repeat; background-size: 100% 100%; position: absolute; top: 0; left: 0;}
  .release-body{ padding: 0 30px; background: #fff;}
  .release-ul{}
  .release-ul>li{ padding: 30px 0; border-bottom: 1px #eaeaea solid;}
  .release-ul>li:last-child{ border: none;}
  .re-top{ position: relative; margin: 0 0 20px 0;}
  .re-top-info{ display: flex;}
  .re-portrait{ width: 42px;}
  .re-portrait>img{ width: 42px; height: 42px; border-radius: 50%; overflow: hidden;}
  .re-nt{ width: calc(100% - 80px); padding: 0 0 0 11px;}
  .re-nt>h4{ line-height: 21px; font-size: 16px; color: #333;}
  .re-nt>h5{ line-height: 21px; font-size: 14px; color: #666;}
  .re-more{ position: absolute; right: 0; top: 5px;}
  .re-ctn{ position: relative; padding: 15px; background: #fffaf9;}
  .re-tra{ position: absolute; left: 12px; top: -9px; border-bottom: 10px #fffaf9 solid; border-left: 9px transparent solid; border-right: 9px transparent solid;}
  .re-tit{ display: flex; align-items: center; margin: 0 0 5px 0;}
  .re-tit span{ font-size: 14px; line-height: 24px; color: #333; padding: 0 0 0 5px;}
  .re-txt>span{ display: block; font-size: 14px; line-height: 20px; color: #666;}

  .slh{ cursor: pointer; position: absolute; z-index: 2; top: 0; right: 0;}
  .mdxc>li{ display: flex; align-items: center;}
  .mdxc>li span{ display: block; width: 15px; text-align: center; margin: 3px 5px 0 0;}
  .mdxc>li img{ filter: grayscale(100%);}
  .mdxc>li:hover img{ filter: initial;}

  .modelNone{ min-height: 472px; display: flex; align-items: center;}
  .modelNone-line{ width: 100%; text-align: center;}
  .modelNone-line h5{ font-size: 16px; line-height: 30px; color: #333; margin: 10px 0 40px 0;}
</style>
