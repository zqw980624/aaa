<template>
  <div>
    <h1>{{id?'编辑':'新建'}}文章</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
      
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
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
        title: ""
      
      }
    };
  },
  methods: {
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

      this.model = res.data;
    },
    async fetchParents(){
        let res = await this.$http.get("/rest/articles")
        console.log(res.data)
        this.parents = res.data
    }
  },
  created() {
    this.id && this.fetch();
   
  }
};
</script>