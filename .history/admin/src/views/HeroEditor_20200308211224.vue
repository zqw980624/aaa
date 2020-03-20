<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label="角色">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="称号">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="图标">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/upload'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="model.avator" :src="model.avator" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="职业">
        <el-select v-model="model.categories" placeholder="请选择" multiple>
          <el-option v-for="item in catogories" :key="item._id" :label="item.name" :value="item._id" ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="使用技巧">
        <el-input v-model="model.useTip" type="textarea"></el-input>
      </el-form-item>
       <el-form-item label="对抗技巧">
        <el-input t v-model="model.combatTip" type="textarea"></el-input>
      </el-form-item>
       <el-form-item label="团队思路">
        <el-input t v-model="model.teamTip" type="textarea"></el-input>
      </el-form-item>
        <el-form-item label="最佳搭档">
        <el-input type="textarea"></el-input>
      </el-form-item>
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
       
      },
       catogories:[]
    };
   
  },
  methods: {
    handleAvatarSuccess(res) {
      console.log(res);
      this.$set(this.model, "avator", res.url);
      // this.model.icon = res.url
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http({
          method: "put",
          url: `/rest/hero/${this.id}`,
          data:this.model
        });
      } else {
        res = await this.$http({
          method: "post",
          url: "/rest/hero",
          data: this.model
        });
      }

      if (res.data) {
        this.$router.push("/hero/list");
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    async fetch() {
      let res = await this.$http.get(`/rest/hero/${this.id}`);

      this.model = res.data;
    },
    async fetchCategories(){
        let res = await this.$http.get(`/rest/categories`);
        this.catogories = res.data

    }
  },
  created() {
    this.id && this.fetch();
    this.fetchCategories()
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
  border-color: #409eff;
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