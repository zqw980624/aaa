<template>
  <div>
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <el-form @submit.native.prevent="save" label-width="100px">
     
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
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
        name: "",
        parent:""
      },
      parents:[]
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http({
          method: "put",
          url: `/rest/categories/${this.id}`,

          data: this.model
        });
      } else {
        res = await this.$http({
          method: "post",
          url: "/rest/categories",
          data: this.model
        });
      }

      if (res.data) {
        this.$router.push("/category/list");
        this.$message({
          type: "success",
          message: "保存成功"
        });
      }
    },
    async fetch() {
      let res = await this.$http.get(`/rest/categories/${this.id}`);

      this.model = res.data;
    },
    async fetchParents(){
        let res = await this.$http.get("/rest/categories")
        console.log(res.data)
        this.parents = res.data
    }
  },
  created() {
    this.id && this.fetch();
    this.fetchParents()
  }
};
</script>