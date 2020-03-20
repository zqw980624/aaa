<template>
  <div>
    <el-card style="width:25rem;margin:10rem auto" header="请登录">
      <el-form  >
        <el-form-item >
          <el-input v-model="model.name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="model.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
           <el-button style="width:360px" @click="login" type="success">登录</el-button>
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
  },
  methods:{
      async login(){
        const res = await  this.$http.post("admin/api/login",this.model)
          console.log(res)
      }
  }
};
</script>

