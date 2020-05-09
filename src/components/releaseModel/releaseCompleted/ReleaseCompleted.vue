<template>
  <div id="releaseCompleted">
    <!-- 分享弹窗 -->
    <div class="eject-popup" id="share-popup">
      <div class="eject-zz"></div>
      <div class="eject-window">
        <div class="eject-title">分享</div>
        <div class="eject-body">
          <div class="share-info">
            <p>分享链接</p>
            <span>复制链接，通过微信、qq、qq空间、微博等分享给好友吧！</span>
          </div>
          <el-form ref="form" size="large" :model="form1">
            <el-form-item style="margin: 30px 0;">
              <el-input v-model="form1.share"></el-input>
            </el-form-item>
            <el-form-item class="elpadding">
              <el-button id="share-cancel">取消</el-button>
              <el-button type="primary" id="shareSend" @click="shareSend">复制链接</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 分享弹窗END -->

    <!-- 下载弹窗 -->
    <div class="eject-popup" id="download-popup">
      <div class="eject-zz"></div>
      <div class="eject-window">
        <div class="eject-title">下载文件<div class="checked-nub">已选择<span>{{checkedNub}}</span>个文件</div></div>
        <div class="eject-body">
          <div class="checkbox-body">
            <!-- <div class=""></div> -->
            <el-checkbox class="checkbox-all" :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">哈萨克族人民心灵的伙伴版本1</el-checkbox>
            <div class="download-checkbox">
              <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                  <div class="download-checkbox-item"><el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox></div>
              </el-checkbox-group>
            </div>
          </div>
          <el-form ref="form" :model="form1">
            <el-form-item class="elpadding" style="margin: 30px 0 0 0;">
              <el-button id="download-cancel">取消</el-button>
              <el-button type="primary" id="shareSend">下载</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 下载弹窗END {{checkedNub}}-->

    <!-- 邀请协作弹窗 -->
    <div class="eject-popup" id="invitation-popup">
      <div class="eject-zz"></div>
      <div class="eject-window">
        <div class="eject-title">添加协作成员</div>
        <div class="eject-body">
          <el-form ref="form" size="large" :label-position="labelPosition" :model="form2" label-width="80px">
            <el-form-item label="添加邀请：">
              <el-input v-model="form2.tel" placeholder="请在此输入手机号码"></el-input>
            </el-form-item>
            <el-form-item class="elpadding">
              <el-button id="invitation-cancel">取消</el-button>
              <el-button type="primary">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 邀请协作弹窗END -->

    <div class="completed1">
      <div class="completed1-o">
        <div class="cooperiation-info">
          <div class="cooperation-title">
            哈萨克族人民心灵的伙伴
          </div>
          <ul class="cooperation-fd">
            <li><img src="../../../assets/n1.png"><span>公开</span></li>
            <li><img src="../../../assets/n2.png"><span>3个</span></li>
            <li><img src="../../../assets/n3.png"><span>.FBX</span></li>
            <li><img src="../../../assets/n4.png"><span>21小时前</span></li>
          </ul>
        </div>
        <ul class="cooperiation-operation">
          <li><div class="md-btn" id="share"><img src="../../../assets/icon1.png"><span>分享</span></div></li>
          <li><div class="md-btn" id="download"><img src="../../../assets/icon2.png"><span>下载</span></div></li>
          <li><div class="md-btn" id="download"><img src="../../../assets/icon3.png"><span>关闭协作</span></div></li>
        </ul>
      </div>
      <div class="completed1-t">
        <h5>协作说明：</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
      </div>
    </div>

    <div class="completed2">
      <div class="partner">
        <div class="partner-title">协作人：</div>
        <div class="partner-body">
          <div class="nonexz"><img src="../../../assets/nonexz.png" alt=""><span>此项目目前暂无协作人！</span></div>
        </div>
        <div class="md-btn" id="invitation"><img src="../../../assets/icon4.png"><span>邀请协作</span></div>
      </div>
    </div>

    <div class="completed3">
      <div class="record">
        <div class="record-link">
          <router-link to="/ReleaseCompleted"><div><img src="../../../assets/jl1-2.png">版本记录</div></router-link>
          <router-link to="/ReleaseCompleted/Cooperation"><div><img src="../../../assets/jl2-2.png">协作记录</div></router-link>
        </div>
        <div class="record-view">
          <div class="record-view-box">
            <router-view></router-view>
          </div>
        </div>
      </div>
      <div class="cmp-pic-cont">
        <div class="cmp-pic-tit">版本：版本名称名称名称</div>
        <div class="cmp-pic-body">
          <img class="cmp-pic-img" src="../../../assets/product.png" alt="">
          <div class="cmp-pic-btn">
            <div class="md-btn"><img src="../../../assets/icon4.png"><span>切换着色</span></div>
            <div class="md-btn"><img src="../../../assets/icon5.png"><span>切换视图</span></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ReleaseCompleted',
    data() {
      return {
        labelPosition: 'top',//表单文字和文本框显示方式
        keyword: "",
        form1:{
          share:''
        },
        checkAll: false,
        checkedCities: [],
        cities: ['v1', 'V2', 'V3', 'V4'],
        isIndeterminate: true,
        checkedNub:0,
        form2:{
          tel:''
        },
      }
    },
    methods: {
      shareSend(){
        this.$message({
          message: '链接复制成功',
          type: 'success'
        });
        setTimeout(function(){
            $("#share-popup").fadeOut(300)
        },1000)
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
        this.checkedNub=this.checkedCities.length
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
       this.checkedNub=value.length
            }
    },
    created() {
      this.form1.share=window.location.href
    },
    mounted(){
      // 分享弹窗操作
      $("#share").click(function(){
        $("#share-popup").show()
      })
      $("#share-cancel").click(function(){
        $("#share-popup").hide()
      })
      
      // 下载弹窗操作
      $("#download").click(function(){
        $("#download-popup").show()
      })
      $("#download-cancel").click(function(){
        $("#download-popup").hide()
      })
      
      // 邀请协作操作
      $("#invitation").click(function(){
        $("#invitation-popup").show()
      })
      $("#invitation-cancel").click(function(){
        $("#invitation-popup").hide()
      })



      $('#shareSend').on('click',function(){
        copyUrl($(this));
      });
      function copyUrl (obj){
        if($('#urlText').length == 0){
          // 创建input
          obj.after('<input id="urlText" style="position:fixed;top:-200%;left:-200%;" type="text" value=' + window.location.href + '>');
        }
        $('#urlText').select(); //选择对象
        document.execCommand("Copy"); //执行浏览器复制命令


        }
    }
  }
</script>

<style scoped>
  #releaseCompleted{ width: 1280px; margin: 45px auto;}
  .share-info{ text-align: center; margin: 15px 0 0 0;}
  .share-info p{ font-size: 26px; line-height: 36px; color: #333;}
  .share-info span{ display: block; font-size: 16px; line-height: 30px; color: #666;}

  .checked-nub{ position: absolute; right: 30px; top: 0; line-height: 57px; font-size: 14px; color: #666;}
  .checked-nub span{ display: inline-block; color: #f85d39;}
/*  .download-checkbox .download-checkbox-item{ border-bottom: 1px #eaeaea solid;}
  .download-checkbox .download-checkbox-item:last-child{ border: none;} */

</style>
