<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-tabs value="skills" type="border-card">
        <el-tab-pane label="基础信息" name="basic">
          <el-form-item label="角色">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
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
              <el-option
                v-for="item in catogories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate
              style="margin-top:.6rem"
              :max="9"
              v-model="model.details.difficulty"
              show-score
            ></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top:.6rem" :max="9" v-model="model.details.skill" show-score></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top:.6rem" :max="9" v-model="model.details.attack" show-score></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top:.6rem" :max="9" v-model="model.details.existence" show-score></el-rate>
          </el-form-item>

          <el-form-item label="顺风出装">
            <el-select v-model="model.tailWind" placeholder="请选择" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.headwind" placeholder="请选择" multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
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
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button>
            <i class="el-icon-plus"></i> 添加技能
          </el-button>
          <el-row>
          <el-col :md="12">
            <el-form-item label="名称">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item>
        <el-button size="small" type="primary" style="margin-top:1rem" native-type="submit">保存</el-button>

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
        details: {
          difficulty: 0,
          skill: 0,
          attack: 0,
          existence: 0
        }
      },
      catogories: [],
      items: []
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
          data: this.model
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
    async fetchCategories() {
      let res = await this.$http.get(`/rest/categories`);
      this.catogories = res.data;
    },
    async fetchItems() {
      let res = await this.$http.get(`/rest/items`);
      this.items = res.data;
    }
  },
  created() {
    this.fetchCategories();
    this.fetchItems();
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