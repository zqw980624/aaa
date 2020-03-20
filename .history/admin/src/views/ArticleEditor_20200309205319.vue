<template>
  <div>
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple placeholder="请选择">
          <el-option
            v-for="item in categories"
            :key="item._id"
            :label="item.name"
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor v-model="model.body" useCustomImageHandler @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>


<script>
import { VueEditor } from "vue2-editor";
export default {
  props: {
    id: {}
  },
  components: {
    VueEditor
  },
  data() {
    return {
      model: {
        title: "",
        categories: []
      },
      categories: []
    };
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await this.$http.post("/admin/api/upload", formData);
      let url = result.data.url; // Get url from response
      Editor.insertEmbed(cursorLocation, "image", url);
      resetUploader();
    },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http({
          method: "put",
          url: `/rest/articles/${this.id}`,

          data: this.model
        });
      } else {
        res = await this.$http({
          method: "post",
          url: "/rest/articles",
          data: this.model
        });
      }

      if (res.data) {
        this.$router.push("/article/list");
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    async fetch() {
      let res = await this.$http.get(`/rest/articles/${this.id}`);

      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      let res = await this.$http.get("/rest/categories");

      this.categories = res.data;
      console.log(this.categories);
    }
  },
  created() {
    this.fetchCategories();
    this.id && this.fetch();
  }
};
</script>