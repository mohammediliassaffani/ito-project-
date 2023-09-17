<template>
    <div class="min-h-full flex">
        <!-- start-sidebar -->
        <SideBar :class="{ '-ml-[200px]': !sidebarOpened }" />
        <!-- end-sidebar -->

        <!-- start content -->

        <div class="flex-1">
            <Navbar @toggele-sidbar="toggleSidbar" />
            <main class="p-6">
                <router-view></router-view>
            </main>
        </div>
        <!-- end content -->
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SideBar from "./SideBar.vue";
import Navbar from "./Navbar.vue";

const sidebarOpened = ref(true);

function toggleSidbar() {
    sidebarOpened.value = !sidebarOpened.value;
}

onMounted( () => {
    handleSidebarOpened();
    window.addEventListener('resize', handleSidebarOpened)
});

onUnmounted( () => {
    window.removeEventListener('resize', handleSidebarOpened)
} )

function handleSidebarOpened() {
    sidebarOpened.value = window.outerWidth > 768;
}
</script>

<style scoped></style>
