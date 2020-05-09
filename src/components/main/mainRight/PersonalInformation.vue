<template>
  <div id="personal">
    <!-- 修改名称弹窗 -->
    <div class="eject-popup" id="editname-popup">
      <div class="eject-zz"></div>
      <div class="eject-window">
        <div class="eject-title">修改用户名</div>
        <div class="eject-body">
          <el-form ref="form" size="large">
            <el-form-item style="margin: 40px 0;">
              <el-input placeholder="请输入您的用户名" v-model="nickname"></el-input>
            </el-form-item>
            <el-form-item class="elpadding">
              <el-button id="editname-cancel">取消</el-button>
              <el-button type="primary" @click="updateNickname">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 修改名称弹窗END -->

    <!-- 修改头像弹窗 -->
    <div class="eject-popup" id="portrait-popup">
      <div class="eject-zz"></div>
      <div class="eject-window">
        <div class="eject-title">修改头像</div>
        <div class="eject-body">
          <!-- action="/api/user/User/updateAvatar" -->
          <el-form>
            <div class="portrait-edit">
              <!-- <el-upload
                class="upload-demo"
                action="/api/user/User/updateAvatar"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-success="handleAvatarSuccess"
                :on-error="imgUploadError"
                >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <div v-else class="portrait-upload-iocn">
                    <img class="xjicon" src="../../../assets/xj.png">
                    <h6>上传头像</h6>
                  </div>
              </el-upload> -->

              <!-- :http-request="handleUploadForm" -->
              <el-upload class="upload-demo" ref="upload" :http-request="handleUploadForm"  action="123" :auto-upload="false" :on-change="onChange" :show-file-list="false">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <div v-else class="portrait-upload-iocn">
                  <img class="xjicon" src="../../../assets/xj.png">
                  <h6>上传头像</h6>
                </div>
              </el-upload>

            </div>
            <el-form-item class="elpadding">
              <el-button id="portrait-cancel">取消</el-button>
              <el-button type="primary" @click="portraitSend" :disabled="disabled">确定</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 修改头像弹窗END -->

    <div class="per-top">
      <div class="jbline"></div>
    </div>
    <div class="per-bt">
      <div class="portrait">
        <div class="portrait-pic">
          <div class="portrait-mask">修改头像</div>
          <img :src="avatarUrl" alt="">
        </div>
        <h4><span>{{nickname}}</span><img title="修改名称" src="../../../assets/edit-icon.png" class="edit-iocn"></h4>
      </div>
      <div class="my-ctn">
        <div class="my-ctn-bt">
          <h1>{{myModel}}</h1>
          <span>我的模型</span>
        </div>
        <div class="my-ctn-bt">
          <h1>{{myCollaboration}}</h1>
          <span>我的协作</span>
        </div>
      </div>
      <router-link to="/ReleaseModel">
        <div class="release">发布模型</div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    // import qs from 'qs'
    name: 'PersonalInformation',
    inject: ['reload'],
    data() {
      return {
        nickname: '',
        myModel: 0,
        myCollaboration: 0,
        avatarUrl: "../../../../static/images/default_avatar.jpg",
        imageUrl: '',
        file_id: null,
        disabled:true
      }
    },
    methods: {
      updateNickname() {
        if (this.nickname == "") {
          this.$message.error('请输入您的用户名')
          return false
        } else {
          var url = "/api/user/User/updateUsername"
          this.$axios.post(url, qs.stringify({
            username: this.nickname
          })).then(res => {
            console.log(res)
            if (res.data.message == "username长度不符合要求 3,40") {
              this.$message.error('请3-40位有效用户名')
              return false
            } else if (res.data.message == "操作成功") {
              this.$message({
                message: '用户名修改成功',
                type: 'success'
              });
              setTimeout(function() {
                $("#editname-popup").hide()
              }, 1000)
            }
          })
        }
      },
      portraitSend() {
        this.$refs.upload.submit();
        this.$message({
          message: '头像修改成功',
          type: 'success'
        });
        if(this.$route.path=="/"){
          this.reload()
        }else if(this.$route.path=="/mycooperation"){
          setTimeout(function(){location.reload()},1000)
        }
      },

      // handleAvatarSuccess(res, file) {
      //   this.imageUrl = URL.createObjectURL(file.raw);
      //   console.log(file.raw)
      //   this.$message({
      //     message: '头像上传成功',
      //     type: 'success'
      //   });
      // },
      // beforeAvatarUpload(file) {
      //   const isJPG = file.type === 'image/jpeg' || 'image/png';
      //   const isLt2M = file.size / 1024 / 1024 < 2;
      //   if (!isJPG) {
      //     this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
      //   }
      //   if (!isLt2M) {
      //     this.$message.error('上传头像图片大小不能超过 2MB!');
      //   }
      //   return isJPG && isLt2M;
      // }, //头像修改图片上传
      // imgUploadError(err, file, fileList) { //图片上传失败调用
      //   this.$message.error('上传图片失败!');
      // },
      onChange(file, fileList){
        const isLt2M = file.raw.size / 1024 / 1024 < 2;
        if (file.raw.type!='image/png'||file.raw.type!='image/png') {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
          return false
        }else if(!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
          return false
        }
        this.disabled=false
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      handleUploadForm(param){
        // this.imageUrl = URL.createObjectURL(param.file);
        let thiz = this
        let formData = new FormData()
        formData.append('file_name', param.file.name)
        formData.append('file', param.file)
        thiz.$axios.post('/api/file/Index/upload', formData).then(res=>{
          if(res.data.code==200){
            this.file_id=res.data.data.id
          }
          thiz.$axios.post('/api/user/User/updateAvatar', qs.stringify({
            file_id: this.file_id
          })).then(res=>{
          })
        })
      }

    },
    created(){
      var url = "/api/user/User/userInfo"
      this.$axios.get(url).then(res => {
        this.nickname = res.data.data.username
        this.myModel = res.data.data.mod_library_num
        this.myCollaboration = res.data.data.mod_cooperation_user_num
        if(res.data.data.avatar_url != ""){
          this.avatarUrl= "http://model-box.wj2015.com:8080/"+res.data.data.avatar_url
        }
      })
    },
    mounted() {
      // 修改名称弹窗操作
      $(".edit-iocn").click(function() {
        $("#editname-popup").show()
      })
      $("#editname-cancel").click(function() {
        $("#editname-popup").hide()
      })

      // 修改头像弹窗操作
      $(".portrait-pic").click(function() {
        $("#portrait-popup").show()
      })
      $("#portrait-cancel").click(function() {
        $("#portrait-popup").hide()
      })

    }
  }
</script>

<style scoped>
  #personal {
    border: 1px #eaeaea solid;
    box-sizing: border-box;
    border-radius: 4px;
    margin: 0 0 30px 0;
    overflow: hidden;
  }

  .per-top {
    height: 70px;
    border-bottom: 1px #eaeaea solid;
    box-sizing: border-box;
    background: #fffaf9;
    position: relative;
  }

  .jbline {
    width: 100%;
    height: 4px;
    background: url(../../../assets/jbline.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .per-bt {
    background: #fff;
    padding: 0 30px 30px 30px;
  }

  .portrait {
    padding: 42px 0 0 0;
    text-align: center;
    position: relative;
  }

  .portrait-pic {
    background: #fff;
    width: 85px;
    height: 85px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: -43px;
    left: 50%;
    transform: translate(-50%, 0);
    cursor: pointer;
  }

  .portrait-mask {
    position: absolute;
    width: 85px;
    height: 85px;
    left: 0;
    top: 0;
    text-align: center;
    line-height: 85px;
    font-size: 14px;
    color: #fff;
    background: rgba(0, 0, 0, 0.7);
    display: none;
  }

  .portrait-pic:hover .portrait-mask {
    display: block;
  }

  .portrait-pic>img {
    width: 100%;
    height: 100%;
  }

  .portrait>h4 {
    color: #333;
    margin: 10px 0 0 0;
  }

  .portrait>h4 img {
    margin: 0 0 0 6px;
    cursor: pointer;
  }

  .my-ctn {
    margin: 34px 0 40px 0;
    display: flex;
    justify-content: space-between;
  }


  .my-ctn-bt {
    width: 50%;
    text-align: center;
  }

  .my-ctn-bt>h1 {
    font-size: 32px;
    line-height: 34px;
    color: #333;
  }

  .my-ctn-bt>span {
    display: inline-block;
    font-size: 16px;
    line-height: 30px;
    color: #666;
    padding: 0 0 0 20px;
    background: url(../../../assets/icon_1.png) no-repeat left;
  }

  .my-ctn>.my-ctn-bt:first-child {
    border-right: 1px #eaeaea solid;
    box-sizing: border-box;
  }

  .my-ctn>.my-ctn-bt:last-child>span {
    background: url(../../../assets/icon_2.png) no-repeat left;
  }

  .release {
    text-align: center;
    height: 49px;
    line-height: 47px;
    border: 1px #f85d39 solid;
    box-sizing: border-box;
    border-radius: 3px;
    transition: all 0.3s ease-out;
    color: #f85d39;
    font-size: 16px;
  }

  .release:hover {
    color: #fff;
    background: #f85d39;
    cursor: pointer;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

  .portrait-edit {
    margin: 20px 0 40px 0;
    text-align: center;
  }

  .portrait-upload-iocn {
    overflow: hidden;
    width: 150px;
    height: 150px;
    background: #f1f1f1;
    border-radius: 50%;
  }

  .portrait-upload-iocn h6 {
    font-size: 16px;
    line-height: 24px;
    color: #333;
  }

  .xjicon {
    margin: 38px 0 15px 0;
  }
</style>
