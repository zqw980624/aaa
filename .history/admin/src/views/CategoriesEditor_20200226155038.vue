<template>
    <div class="categories_editor">
        <h1>新建分类</h1>
        <el-form @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>