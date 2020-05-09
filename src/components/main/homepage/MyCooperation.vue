<template>
  <div id="MyCooperation">
<!--    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      >
      <i class="el-icon-upload"></i>
    </el-upload> -->
    <div class="modelNone" v-if="modelElse">
      <div class="modelNone-line">
        <img src="../../../assets/none.png" alt="">
        <h5>您目前还没有任何协作内容！</h5>
      </div>
    </div>

    <ul class="model-ul">
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/MyCooperation/CooperationView">
          <div class="model">
            <div class="model-top">
              <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t2.jpg" alt=""></div>
              <div class="model-col">
                <div class="model-col1">
                  <div class="privacy">
                    <img src="../../../assets/userIcon.png" alt="">最佳选择
                  </div>
                </div>
                <div class="model-col2">
                  <img src="../../../assets/list2.png" alt="">.FBX
                </div>
              </div>
            </div>
            <div class="model-bt">
              <div class="model-title">Meet Mat 2的比赛-逆行者</div>
              <div class="model-user">
                <div class="model-user-info">
                  <img src="../../../assets/portrait.jpg">
                  Ninjason_chan
                </div>
                <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
              </div>
            </div>
          </div>
        </router-link>
      </li>

    </ul>

  </div>
</template>

<script>
  export default {
    name: 'MyCooperation',
    data() {
      return {
        modelElse:true,
      }
    },
    methods:{

    },
    created(){

    },
    mounted(){
      if($(".model-ul>li").length != 0){
        this.modelElse=false
      }
    }
  }
</script>

<style scoped>
  #MyCooperation{}

  .modelNone{ min-height: 828px; display: flex; align-items: center;}
  .modelNone-line{ width: 100%; text-align: center;}
  .modelNone-line h5{ font-size: 16px; line-height: 30px; color: #333; margin: 10px 0 40px 0;}
  /* .re-md{ width: 180px; line-height: 50px; color: #fff; font-size: 16px; background: linear-gradient(to right, #fe8f5c, #fc6944); border-radius: 3px; overflow: hidden; cursor: pointer; display: inline-block;} */

</style>
