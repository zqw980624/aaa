<template>
    <div class="categories_editor">
        <h1>新建分类</h1>
        <el-form @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
export default {
    data(){
        return{
            model:""
        }
    },
    methods:{
        async save(){
            let res =  await this.$http({
                method:"post",
                url:"/categories",
                data:{
                    name:this.model
                }
            })
            this.$router.push("/categories/list")
            this.$message({
                type:"success",
                message:"创建成功"
            })
        }
    }
}
</script>