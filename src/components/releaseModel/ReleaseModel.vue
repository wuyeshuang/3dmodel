<template>
  <div id="ReleaseModel">
<!--    <div v-if="file1">文件正在上传</div>
    <div v-if="file2">文件上传失败</div> -->
    <div></div>
    <div class="ReleaseModel-title">
      <h4><img src="../../assets/sc.png">发布模型</h4>
    </div>
    <div class="ReleaseModel-body">

        <div class="remd">
          <div class="remd-left">
            <div class="remd-file-upload">
              <el-upload width="700"
              :limit="1"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                :multiple="multiple">
                <div style="margin: 200px 0 0 0;"><i><img src="../../assets/plus1.png" alt=""></i>
                <div class="el-upload__text" style="font-size: 24px; margin: 8px 0 15px 0;">点击上传模型</div>
                <div class="el-upload__text">支持格式：.stl / .stp / .igs / .obj</div></div>
              </el-upload>
            </div>
            <div class="bgup">
              <h6>背景选择：</h6>
              <el-radio-group v-model="radio2" size="medium" @change="dmsend">
                <el-radio-button label="#e5e5e5"></el-radio-button>
                <el-radio-button label="#c6c6c6"></el-radio-button>
                <el-radio-button label="#999999"></el-radio-button>
                <el-radio-button label="#666666"></el-radio-button>
                <el-radio-button label="#333333"></el-radio-button>
                <el-radio-button label="#000000"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <!-- :on-progress="onProgress" -->
          <!-- :on-error="onError" -->
          <div class="remd-right">
            <div class="pic-upload">
              <div class="pic-upload2">
                <el-upload
                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"

                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <!-- <i class="el-icon-plus avatar-uploader-icon"> -->
                    <div v-else class="pic-upload-iocn">
                      <img class="plus2" src="../../assets/plus2.png">
                      <h6>点击上传封面</h6>
                    </div>
                  <!-- </i> -->
                </el-upload>
              </div>
              <div class="jysc">
                <h6>建议尺寸为274 * 185px</h6>                <span>图片尺寸：.jpg / .png</span>
              </div>
            </div>

            <div class="sgform">
              <el-form ref="form" size="large" :label-position="labelPosition" :model="form" label-width="80px">
                <el-form-item class="sgform-li" prop="modelName" label="模型名称：" :rules="[
                      { required: true, message: '请输入模型名称', trigger: 'blur' }
                    ]" >
                  <el-input v-model="form.modelName"></el-input>
                </el-form-item>
                <el-form-item class="sgform-li" label="版本命名：">
                  <el-input v-model="form.versionName" placeholder="不填写时，系统会自动根据数字1顺序向下生成版本号"></el-input>
                </el-form-item>
                <div class="tsform file-suffix">
                  <div class="tsform-left"><span>*</span>文件类型：</div>
                  <div class="tsform-right">
                    <el-radio-group class="file-suffix-radio-group" v-model="fileSuffix" @change="fileSuffixEven" size="small">
                      <el-radio-button label=".STL"></el-radio-button>
                      <el-radio-button label=".STP"></el-radio-button>
                      <el-radio-button label=".IGS"></el-radio-button>
                      <el-radio-button label=".OBJ"></el-radio-button>
                    </el-radio-group>
                  </div>
                </div>
                <div class="tsform file-attribute">
                  <div class="tsform-left"><span>*</span>文件属性：</div>
                  <div class="tsform-right">
                    <el-radio v-model="fileAttribute" label="1" @change="fileAttributeEven">公开</el-radio>
                    <el-radio v-model="fileAttribute" label="2" @change="fileAttributeEven">私有</el-radio>
                  </div>
                </div>
                <div class="make-public" v-if="makePublic">
                  <div class="tsform file-limit">
                    <div class="tsform-left"><span>*</span>文件限制：</div>
                    <div class="tsform-right">
                      <div class="public-file2">
                        <el-radio-group v-model="resource2">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </div>
                  </div>
                  <el-form-item class="sgform-li" label="文件描述：">
                    <el-input v-model="form.fileDescription" placeholder="用简短的话介绍下您的作品！"></el-input>
                  </el-form-item>
                </div>
              </el-form>
            </div>

          </div>
        </div>

        <div class="public-bt">
          <div class="public-ms">
          </div>
          <div class="elpadding">
          <!-- <el-form-item class="elpadding"> -->
            <router-link to="/"><el-button class="public-cancel">取消</el-button></router-link>
            <router-link to="/ReleaseCompleted"><el-button type="primary">发布模型</el-button></router-link>
          <!-- </el-form-item> -->
          </div>
        </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'ReleaseModel',
    data() {
      return {
        // file1:false,
        // file2:false,
        multiple:false,
        radio2: '',
        imageUrl: '',
        labelPosition:"left",
        fileSuffix:"",
        fileAttribute:"1",
        makePublic:true,
        form: {
          modelName: '',
          versionName: '',
          fileDescription:""
        },
        resource2:""
      }
    },
    methods: {
      // onProgress(event, file, fileList){
      //   this.file1=true
      //   console.log(fileList)
      // },
      // onError(){this.file1=false; this.file2=true},
      onSubmit() {
        console.log('submit!');
      },
      dmsend(){
        console.log(this.radio2)
      },//背景颜色上传事件
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg'||'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },//图片上传
      fileSuffixEven(){
        console.log(this.fileSuffix)
      },
      fileAttributeEven(){
         if(this.fileAttribute == "1"){
          this.makePublic = true
        }
        if(this.fileAttribute == "2"){
          this.makePublic = false
        }
      }
    },
    created() {

    },
    mounted() {
      $(".bgup .el-radio-group .el-radio-button span").text("")
    }
  }
</script>

<style scoped>
  #ReleaseModel { margin: 45px auto; border: 1px #e6e6e6 solid; box-sizing: border-box; background: #fff; border-radius: 3px; width: 1280px; box-shadow: 0 0 38px rgba(0, 0, 0, 0.05);}
  .ReleaseModel-title { height: 70px; background: #fffbfb; border-bottom: 1px #eaeaea solid; box-sizing: border-box;}
  .ReleaseModel-title h4 { display: flex; align-items: center; justify-content: center; width: 200px; border-top: 3px #fc7048 solid; border-bottom: 1px transparent solid; line-height: 66px; border-right: 1px #eaeaea solid; background: #fff; font-size: 18px; color: #f85d39; font-weight: 300;}
  .ReleaseModel-title h4 img { margin: 0 5px 0 0;}
  .ReleaseModel-body { padding: 30px;}

  .remd{ display: flex; justify-content: space-between;}
  .remd-left{ width: 700px;}
  .remd-file-upload{ margin: 0 0 30px 0;}



  .bgup{ display: flex;}
  .bgup>h6{ line-height: 26px; font-size: 16px; width: 90px; color: #333;}
  .remd-right{ width: 488px;}
  .pic-upload{ position: relative; margin: 0 0 30px 0;}
  .jysc{ position: absolute; left: 200px; bottom: 3px;}
  .jysc h6{ font-size: 14px; line-height: 24px; color: #333; font-weight: 300;}
  .jysc span{ font-size: 14px; line-height: 24px; color: #666; display: block;}

  .tsform{ display: flex; margin: 0 0 30px 0;}
  .tsform-left{ line-height: 26px; width: 95px; color: #333; font-size: 16px;}
  .tsform-left>span{ display: inline-block; color: #f85d39; margin: 0 3px 0 0;}
  .tsform-right{ width: calc(100% - 95px);}
  .file-attribute .tsform-right{ padding: 2px 0 0 0;}
  .make-public{}
  .file-limit .tsform-right{ padding: 6px 0 0 0;}
  .public-radio:first-child{ padding: 0 0 14px 0;}
  .public-radio span{ display: inline-block !important; font-size: 12px !important; color: #666;}
  .public-bt{ display: flex; justify-content: space-between; margin: 30px 0 0 0; padding: 30px 0 0 0; border-top: 1px #eaeaea solid;}
</style>
