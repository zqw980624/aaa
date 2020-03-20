<template>
  <div>
    <el-card style="width:25rem;margin:10rem auto" header="请登录">
      <el-form  label-width="50px">
        <el-form-item label="用户名">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button style="width:360px" type="success">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {}
    };
  }
};
</script>

