<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="$router.push(`/categories/editor/${scope.row._id}`)">编辑</el-button>
          <el-button size="mini" type="danger" @click="remove( scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  methods: {
    async fetch() {
      let res = await this.$http.get("/rest/categories/");
      console.log(res.data);
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否删除分类"${row.name}"?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await this.$http({
            method: "delete",
            url: `/rest/categories/${row._id}`
          });
          if (res.data) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
             this.fetch();
          }
         
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  created() {
    this.fetch();
  }
};
</script>