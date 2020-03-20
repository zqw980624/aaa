
<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside style="background-color: rgb(238, 241, 246);  width: fit-content;max-width:200px">
      <el-menu
        router
        :default-active="$route.path"
        :default-openeds="['1','2','3']"
        unique-opened
        background-color="#404040"
        text-color="#aaa"
        active-text-color="#ff4238"
        :collapse="isCollapse"
      >
        <!-- <div class="toggle"> <i  ref="i" class="el-icon-arrow-right" @click="toggle"></i></div> -->

        <div class="toggle">
          <i ref="i" v-if="!isCollapse" class="el-icon-arrow-left" @click="toggle"></i>
          <i ref="i" v-else class="el-icon-arrow-right" @click="toggle"></i>
        </div>

        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">内容管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分类</template>
            <el-menu-item index="/category/create">新建分类</el-menu-item>
            <el-menu-item index="/category/list">分类列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">物品</template>
            <el-menu-item index="/item/create">新建物品</el-menu-item>
            <el-menu-item index="/item/list">物品列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">系统管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">英雄</template>
            <el-menu-item index="/hero/create">新建英雄</el-menu-item>
            <el-menu-item index="/hero/list">英雄列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">文章</template>
            <el-menu-item index="/article/create">新建文章</el-menu-item>
            <el-menu-item index="/article/list">文章列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-message"></i>
            <span slot="title">管理员管理</span>
          </template>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/administrator/create">新建管理员</el-menu-item>
            <el-menu-item index="/administrator/list">管理员列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <template slot="title">广告位</template>
            <el-menu-item index="/ad/create">新建广告位</el-menu-item>
            <el-menu-item index="/ad/list">广告位列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    toggle() {
      this.isCollapse = !this.isCollapse;
      console.log(1111);
      // console.log( this.$refs.i)
      this.$refs.i.classList.toggle("left");
    }
  }
};
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.toggle {
  height: 20px;
  position: relative;
}

.toggle i {
  position: absolute;
  height: 20px;
  right: 25px;
  top: 5px;
  color: #aaa;
}
.toggle .left {
  transform: rotate(180deg);
  transition: 0.5s;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
