<template>
    <div>
        <div  class="min-h-full bg-gray-200 flex">
    <!--    Sidebar-->
    <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
    <!--/    Sidebar-->

    <div class="flex-1">
      <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
      <!--      Content-->
      <main class="p-6">
        <router-view></router-view>
      </main>
      <!--      Content-->
    </div>
  </div>
    </div>
</template>

<script>

import Sidebar from "./Sidebar.vue";
import Navbar from "./Navbar.vue";










</script>

<style lang="scss" scoped>

</style>