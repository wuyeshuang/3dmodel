<template>
  <div id="Cooperation">
    <ul class="cpt-ul">
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
      <li>
        <div class="cpt">
          <div class="cpt-top">
            <span>更新版本</span>
            <span><img src="../../../assets/clock.png">21天前</span>
          </div>
          <div class="cpt-ver">版本：版本名称名称名称</div>
        </div>
      </li>
    </ul>
    <div class="cpt-more"><span><img src="../../../assets/updata.png">更新版本</span></div>
  </div>
</template>

<script>
  export default {
    name: 'Edition',
    data() {
      return {

      }
    },
    methods: {

    },
    created() {

    },
    mounted() {

    }
  }
</script>

<style scoped>
  #Cooperation{}
  .cpt-ul{}
  .cpt-ul>li{}
  .cpt{ position: relative; padding: 30px; background: url(../../../assets/ccline.png) no-repeat bottom; cursor: pointer;}
  .cpt-ul>li:last-child .cpt{ background: none;}
  .cpt:hover{ background: #fffaf9 url(../../../assets/jbline.png) no-repeat; background-size: 100% 4px; background-position: 0 100%;}
  .cpt-ul>li:last-child .cpt:hover{ background: #fffaf9;}
  .cpt-top span{ font-size: 14px; line-height: 24px; color: #666; margin: 0 8px 0 0; display: inline-block;}
  .cpt-top span img{ margin: 3px 3px 0 0;}
  .cpt-ver{ color: #333; font-size: 14px; line-height: 24px; color: #333;}
  .cpt:after{ content: ""; display: block; width: 10px; height: 10px; border-right: 1px #999 solid; border-bottom: 1px #999 solid; box-sizing: border-box; position: absolute; right: 30px; top: 50%; transform: translate(0, -50%) rotateZ(-45deg);}
  .cpt:hover:after{ border-color: #f85d39;}
  .cpt-more{ padding: 0 30px; margin: 0 0 30px 0;}
  .cpt-more span{ display: flex; justify-content: center; align-items: center; font-size: 16px; color: #f85d39; height: 46px; border: 1px #f85d39 solid; box-sizing: border-box; border-radius: 4px; overflow: hidden; cursor: pointer;}
  .cpt-more span img{ margin: 0 6px 0 0;}
</style>
