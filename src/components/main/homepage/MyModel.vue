<template>
  <div id="mymodel">
    <div class="modelNone" v-if="modelElse">
      <div class="modelNone-line">
        <img src="../../../assets/none.png" alt="">
        <h5>您目前还没有发布过模型，立即发布个模型吧！</h5>
        <div class="re-md">发布模型</div>
      </div>
    </div>
    <ul class="model-ul">
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>
      <li>
        <div class="model">

          <!-- 重命名弹窗 -->
          <div class="model-popup">
            <div class="model-zz"></div>
            <div class="model-window">
              <div class="mdl-title">重命名</div>
              <div class="mdl-body">
                <el-form ref="form" size="large" :label-position="labelPosition" :model="renameForm" label-width="80px">
                  <el-form-item label="名称:">
                    <el-input v-model="renameForm.rename"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="rename-cancel">取消</el-button>
                    <el-button type="primary" @click="renameSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 重命名弹窗END -->

          <!-- 开启协作弹窗 -->
          <div class="cooperation-popup">
            <div class="cooperation-zz"></div>
            <div class="cooperation-window">
              <div class="cooperation-title">开启协作</div>
              <div class="cooperation-body">
                <el-form size="large" :label-position="labelPosition" :model="cooperationForm" class="demo-form-inline">
                  <div class="cooperation-page">
                    <el-form-item label="协作名称：">
                      <el-input v-model="cooperationForm.name" disabled></el-input>
                    </el-form-item>
                    <el-form-item label="协作版本：">
                      <el-select v-model="cooperationForm.edition" placeholder="协作版本">
                        <el-option label="版本一" value="1"></el-option>
                        <el-option label="版本二" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </div>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="cooperationForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <el-form-item class="elpadding">
                    <el-button class="cooperation-cancel">取消</el-button>
                    <el-button type="primary" @click="cooperationSend">确定</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 开启协作弹窗END -->

          <!-- 公开弹窗 -->
          <div class="public-popup">
            <div class="public-zz"></div>
            <div class="public-window">
              <div class="public-title">发布到推荐</div>
              <div class="public-body">
                <el-form size="large" :label-position="labelPosition" :model="publicForm" class="demo-form-inline">
                  <el-form-item label="公布名称：">
                    <el-input v-model="publicForm.name" disabled></el-input>
                  </el-form-item>
                  <el-form-item label="文件描述：" prop="desc">
                    <el-input type="textarea" v-model="publicForm.describe" placeholder="输入文件描述"></el-input>
                  </el-form-item>
                  <div class="public-file">
                    <el-form-item label="文件限制：">
                      <div class="public-file2">
                        <el-radio-group v-model="publicForm.resource">
                          <div class="public-radio"><el-radio label="不允许下载"></el-radio><span>所有用户可以查看且下载源文件</span></div>
                          <div class="public-radio"><el-radio label="允许下载"></el-radio><span>所有用户仅可查看文件</span></div>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </div>
                  <div class="public-bt">
                    <div class="public-ms">
                      发布后，文件将公开到推荐模块，<br>所有用户都可以看到，供大家学习交流
                    </div>
                    <el-form-item class="elpadding">
                      <el-button class="public-cancel">取消</el-button>
                      <el-button type="primary" @click="publicSend">确定</el-button>
                    </el-form-item>
                  </div>
                </el-form>
              </div>
            </div>
          </div>
          <!-- 公开弹窗END -->

          <div class="slh">
            <el-dropdown>
              <span class="el-dropdown-link">
                <img src="../../../assets/bsd.png" alt="">
              </span>
              <el-dropdown-menu slot="dropdown" class="mdxc">
                <el-dropdown-item class="rename-show"><span><img src="../../../assets/w1_2.png"></span>重命名</el-dropdown-item>
                <el-dropdown-item class="public-show"><span><img src="../../../assets/w2_2.png"></span>公开</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w6_2.png"></span>私密</el-dropdown-item>
                <el-dropdown-item class="cooperation-show"><span><img src="../../../assets/w3_2.png"></span>开启协作</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w4_2.png"></span>下载</el-dropdown-item>
                <el-dropdown-item><span><img src="../../../assets/w5_2.png"></span>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>

          <div class="model-top">
            <div class="model-img"><div class="model-img-zz"></div><img src="../../../assets/t1.jpg" alt=""></div>
            <div class="model-col">
              <div class="model-col1">
                <div class="privacy">
                  <img src="../../../assets/g1.png" alt="">公开
                </div>
                <div class="list1">
                  <img src="../../../assets/list1.png" alt="">3个
                </div>
              </div>
              <div class="model-col2">
                <img src="../../../assets/list2.png" alt="">.FBX
              </div>
            </div>
          </div>
          <div class="model-bt">
            <div class="model-title">家具_矮凳</div>
            <div class="model-time"><img src="../../../assets/clock.png" alt="">5分钟前</div>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'MyModel',
    data() {
      return {
        modelElse:true,

        labelPosition: 'top',//表单文字和文本框显示方式
        renameForm: {
          rename: '家具_矮凳',
        },
        cooperationForm: {
          name:'',
          edition: '',
          describe:''
        },
        publicForm: {
          name:'',
          describe: '',
          resource:''
        }
      }
    },
    methods:{
      renameSend() {
        console.log('rename submit!');
      },
      cooperationSend() {
        console.log('cooperationSend submit!');
      },
      publicSend() {
        console.log('cooperationSend submit!');
      }
    },
    created(){
     //  var url="/api/model/Index/index"
     //  this.$axios.post(url,{
     //        params:{
     //          page:1,
     //          page_num:3
					// 	}
					// }).then(res=>{
     //    console.log(res)
     //  })
    },
    mounted(){
      if($(".model-ul>li").length != 0){
        this.modelElse=false
      }

      $(".model-ul>li").each(function(i,el){
        $(el).find(".mdxc").mouseenter(function(){
          $(el).find(".slh").show()
        })
      })
      $(".model").mouseenter(function(){
        $(this).children(".slh").show()
      })
      $(".model").mouseleave(function(){
        $(this).children(".slh").hide()
      })

      // 重命名弹窗操作
      $(".model-ul>li").each(function(i,el){
        $(el).find(".rename-show").click(function(){
          $(el).find(".model-popup").show()
        })
      })
      $(".rename-cancel").click(function(){
        $(".model-popup").hide()
      })

      // 开启协作弹窗操作
      $(".model-ul>li").each(function(i,el){
        $(el).find(".cooperation-show").click(function(){
          $(el).find(".cooperation-popup").show()
        })
      })
      $(".cooperation-cancel").click(function(){
        $(".cooperation-popup").hide()
      })

      // 公开弹窗操作
      $(".model-ul>li").each(function(i,el){
        $(el).find(".public-show").click(function(){
          $(el).find(".public-popup").show()
        })
      })
      $(".public-cancel").click(function(){
        $(".public-popup").hide()
      })

    }
  }
</script>

<style scoped>
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
  .list1{ display: flex; align-items: center; font-size: 14px; line-height: 22px; color: #fff;}
  .list1 img{ margin: 0 7px 0 0;}
  .model-col2{ display: flex; align-items: center; font-size: 14px; line-height: 22px; color: #fff;}
  .model-col2 img{ margin: 0 7px 0 0;}
  .model-bt{ margin: 10px 0 0 0; padding: 0 10px;}
  .model-title{ font-size: 16px; line-height: 28px; color: #333; transition: all 0.3s ease-out;}
  .model:hover .model-title{ color: #f85d39;}
  .model-time{ display: flex; align-items: center; font-size: 14px; line-height: 24px; color: #666;}
  .model-time img{ margin: 0 5px 0 0;}

  .slh{ cursor: pointer; position: absolute; z-index: 2; top: 15px; right: 30px; display: none;}
  .model-popup{ z-index: 999; position: fixed; width: 100%; height: 100%; left: 0; top: 0; display: none;}
  .model-zz{ width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); top: 0; left: 0;}
  .model-window{ width: 560px; border-radius: 3px; overflow: hidden; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
  .mdl-title{ border-top: 3px #f85d39 solid; line-height: 57px; color: #f85d39; font-size: 18px; border-bottom: 1px #eaeaea solid; padding: 0 0 0 30px; background: #fffaf9;}
  .mdl-body{ background: #fff; padding: 30px;}


  .mdxc>li{ display: flex; align-items: center;}
  .mdxc>li span{ display: block; width: 15px; text-align: center; margin: 2px 5px 0 0;}
  .mdxc>li img{ filter: grayscale(100%);}
  .mdxc>li:hover img{ filter: initial;}

  .modelNone{ min-height: 828px; display: flex; align-items: center;}
  .modelNone-line{ width: 100%; text-align: center;}
  .modelNone-line h5{ font-size: 16px; line-height: 30px; color: #333; margin: 10px 0 40px 0;}
  .re-md{ width: 180px; line-height: 50px; color: #fff; font-size: 16px; background: linear-gradient(to right, #fe8f5c, #fc6944); border-radius: 3px; overflow: hidden; cursor: pointer; display: inline-block;}

  /* 开启协作弹窗 */
  .cooperation-popup{ z-index: 999; position: fixed; width: 100%; height: 100%; left: 0; top: 0; display: none;}
  .cooperation-zz{ width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); top: 0; left: 0;}
  .cooperation-window{ width: 720px; border-radius: 3px; overflow: hidden; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
  .cooperation-title{ border-top: 3px #f85d39 solid; line-height: 57px; color: #f85d39; font-size: 18px; border-bottom: 1px #eaeaea solid; padding: 0 0 0 30px; background: #fffaf9;}
  .cooperation-body{ background: #fff; padding: 30px;}
  .cooperation-page{ display: flex; justify-content: space-between;}
  .cooperation-page>div{ width: 47%;}
  .cooperation-page>div .el-select{ width: 100%;}
  /* 开启协作弹窗END */

  /* 公开弹窗 */
  .public-popup{ z-index: 999; position: fixed; width: 100%; height: 100%; left: 0; top: 0; display: none;}
  .public-zz{ width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); top: 0; left: 0;}
  .public-window{ width: 720px; border-radius: 3px; overflow: hidden; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
  .public-title{ border-top: 3px #f85d39 solid; line-height: 57px; color: #f85d39; font-size: 18px; border-bottom: 1px #eaeaea solid; padding: 0 0 0 30px; background: #fffaf9;}
  .public-body{ background: #fff; padding: 30px;}
  .public-file>div{ display: flex;}
  .public-file2{ padding: 0 0 0 10px;}
  .public-radio:first-child{ padding: 14px 0;}
  .public-radio span{ display: inline-block !important; font-size: 12px !important; color: #666;}
  .public-bt{ display: flex; justify-content: space-between; margin: 30px 0 0 0; padding: 30px 0 0 0; border-top: 1px #eaeaea solid;}
  .public-ms{ font-size: 14px; line-height: 22px; color: #666;}
  /* 公开弹窗END */
</style>
