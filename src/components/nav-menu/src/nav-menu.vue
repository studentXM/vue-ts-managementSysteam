<template>
  <div class="nav-menu">
    <div class="logo" style="text-align: center">
      <span>企业后台系统</span>
    </div>
    <!-- 递归组件 可以显示所有的菜单 因为太深的菜单 并没太大的实际意义 反而增加了页面 所以我只用了二级菜单 -->
    <!-- <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="false">
      <menusCpn :menus="userMenus"></menusCpn>
    </el-menu> -->

    <!-- 最多显示二级菜单 至多显示到二级菜单就够用了 -->
    <el-menu
      active-text-color="#409eff"
      background-color="#113a62"
      text-color="#fff"
      :collapse="false"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <div>
                <el-icon>
                  <component
                    :is="iconNames[index]"
                    style="width: 16px; height: 16px"
                  ></component
                ></el-icon>
              </div>
              <span>{{ item.name }}</span>
            </template>

            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { useStore, icons } from '@/store'
import menusCpn from './cpns/menuComponents.vue'

export default {
  components: { menusCpn },
  setup() {
    const store = useStore()
    const iconNames = icons()
    const userMenus = store.state.login.userMenus

    return {
      userMenus,
      iconNames
    }
  }
}
</script>

<style lang="less" scoped>
.logo {
  height: 60px;
  line-height: 60px;
  border-right: solid 1px var(--el-menu-border-color);
  // background: #235281;
  // color: white;
  position: relative;
}
// .logo::before {
//   display: block;
//   content: ' ';
//   position: absolute;
//   bottom: 0;
//   width: 10px;
//   height: 2px;
//   background: silver;
//   left: calc(50% - 5px);
// }
.nav-menu {
  height: 100%;
  .el-menu {
    height: calc(100% - 60px);
  }
}
</style>
