<template>
    <div class="min-h-full flex">
        <!-- start-sidebar -->
      <SideBar />
        <!-- end-sidebar -->

        <!-- start content -->

        <div class="flex-1">
            <TopHeader />
            <main class="p-6" >
                <router-view></router-view>
            </main>
        </div>
        <!-- end content -->
    </div>
</template>

<script setup>
import SideBar from './SideBar.vue';
import TopHeader from './TopHeader.vue';
</script>

<style scoped></style>
