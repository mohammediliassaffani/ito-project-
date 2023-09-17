<template>
    <div class="min-h-full flex">
        <!-- start-sidebar -->
      <SideBar />
        <!-- end-sidebar -->

        <!-- start content -->

        <div class="flex-1">
            <header class="h-8 shadow bg-white">Header</header>
            <main>
                <router-view></router-view>
            </main>
        </div>
        <!-- end content -->
    </div>
</template>

<script setup>
import SideBar from './SideBar.vue';
</script>

<style scoped></style>
