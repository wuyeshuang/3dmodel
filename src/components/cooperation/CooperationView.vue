<template>
  <div id="CooperationView">
    <div class="completed1">
      <div class="completed1-o">
        <div class="cooperiation-info">
          <div class="cooperation-title">
            哈萨克族人民心灵的伙伴
          </div>
          <ul class="cooperation-fd">
            <li><img src="../../assets/n1.png"><span>公开</span></li>
            <li><img src="../../assets/n2.png"><span>3个</span></li>
            <li><img src="../../assets/n3.png"><span>.FBX</span></li>
            <li><img src="../../assets/n4.png"><span>21小时前</span></li>
          </ul>
        </div>
        <div class="cooperation-author"><img src="../../assets/portrait.jpg"><span>追梦人_海</span></div>
      </div>
      <div class="completed1-t">
        <h5>协作说明：</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
      </div>
    </div>

    <div class="version-body">
      <div>
        <el-form ref="form" size="large" :model="form" label-width="90px">
          <el-form-item label="选择版本：">
            <el-select v-model="form.region" placeholder="请选择版本">
              <el-option label="哈萨克族人民心灵的伙伴" value="哈萨克族人民心灵的伙伴"></el-option>
              <el-option label="版本一" value="版本一"></el-option>
              <el-option label="版本二" value="版本二"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <a class="model-down" href=""><div class="md-btn"><img src="../../assets/icon2.png"><span>下载模型</span></div></a>
    </div>

    <div class="picview">
      <div class="cmp-pic-body">
        <img class="cmp-pic-img" src="../../assets/product.png" alt="">
        <div class="cmp-pic-btn">
          <div class="md-btn"><img src="../../assets/icon5.png"><span>切换着色</span></div>
          <div class="md-btn"><img src="../../assets/icon6.png"><span>切换视图</span></div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'CooperationView',
    data() {
      return {
        form: {
          region: '',
        }
      }
    },
    methods: {

    }
  }
</script>

<style scoped>
  #CooperationView{ width: 1280px; margin: 0 auto; padding: 0 0 40px 0;}
  .cooperation-author{ width: 225px; border-left: 1px #eaeaea solid; box-sizing: border-box; padding: 0 0 0 30px; display: flex; align-items: center;}
  .cooperation-author img{ width: 42px; height: 42px; border-radius: 50%; overflow: hidden; margin: 0 10px 0 0;}
  .cooperation-author span{ display: block; font-size: 16px; line-height: 24px; color: #333;}

  .version-body{ margin: 30px 0 0 0; border: 1px #e6e6e6 solid; -webkit-box-sizing: border-box; box-sizing: border-box; background: #fff; border-radius: 4px; -webkit-box-shadow: 0 0 38px rgba(0, 0, 0, 0.05); box-shadow: 0 0 38px rgba(0, 0, 0, 0.05); padding: 17px 30px; display: flex; justify-content: space-between; align-items: center;}
  .version-body .el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{ margin: 0 !important;}
  .version-body .el-form-item{ margin: 0 !important;}
  .version-body .el-select{ width: 460px !important;}

  .picview{ margin: 30px 0 0 0;}
  .cmp-pic-body{ width: 100%; height: 730px; background: #3c3d41; position: relative;}
</style>
