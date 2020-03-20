<template>
  <div>
    <h1>{{id?'编辑':'新建'}}广告位</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
     
        <el-button size="small" @click="model.ads.push({})">
            <i class="el-icon-plus"></i> 添加技能
          </el-button>
          <el-row>
            <el-col :md="12" v-for="(item,index) in model.ads" :key="index">
             <el-form-item label="链接">
                <el-input v-model="item.link"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="$http.defaults.baseURL + '/upload'"
                  :show-file-list="false"
                  :on-success="res => $set(item,'image',res.url)"
                >
                  <img v-if="item.image" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
             
               <el-form-item>
                <el-button size="small" @click="model.skills.splice(index,1)" type="danger">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
      
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {
        name: "",
        ads:[]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res){
      console.log(res)
      this.$set(this.model,"icon",res.url)
      // this.model.icon = res.url
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http({
          method: "put",
          url: `/rest/items/${this.id}`,
          data: this.model
        });
      } else {
        res = await this.$http({
          method: "post",
          url: "/rest/items",
          data: this.model
        });
      }

      if (res.data) {
        this.$router.push("/item/list");
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    async fetch() {
      let res = await this.$http.get(`/rest/items/${this.id}`);

      this.model = res.data;
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>

<style>
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
</style>