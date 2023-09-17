<template>
        <div class="w-[200px] bg-blue-800 text-white p-4 ">

            <router-link 
            :to="{name : 'app.dashboard'}" 
            class="flex items-center p-2 rounded transition-colors hover:bg-black/20 mb-3">
                <span class="mr-2 " >
                    <HomeIcon class="w-5" />
                </span>
                <span>
                    Dashboard
                </span>
            </router-link>

            <router-link 
            :to="{name : 'app.dashboard'}" 
            class="flex items-center p-2 rounded transition-colors hover:bg-black/20 mb-3">
                <span class="mr-2 " >
                    <ViewListIcon class="w-5" />
                </span>
                <span>
                    Products
                </span>
            </router-link>

            <router-link 
            :to="{name : 'app.dashboard'}" 
            class="flex items-center p-2 rounded transition-colors hover:bg-black/20 mb-3">
                <span class="mr-2 " >
                    <UserIcon class="w-5" />
                </span>
                <span>
                    Useres
                </span>
            </router-link>

            <router-link 
            :to="{name : 'app.dashboard'}" 
            class="flex items-center p-2 rounded transition-colors hover:bg-black/20 mb-3">
                <span class="mr-2 " >
                    <ChartBarIcon class="w-5" />
                </span>
                <span>
                    Reports
                </span>
            </router-link>
         
        </div>

</template>

<script setup>
import { HomeIcon, UserIcon, ViewListIcon, ChartBarIcon } from '@heroicons/vue/outline';

</script>

<style scoped></style>
