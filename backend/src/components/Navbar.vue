<template>
    <header class="flex justify-between items-center  h-10 shadow bg-white">
        <button @click="emit('toggele-sidbar')" class="flex justify-between items-center text-blue-800 rounded-r-full transition-colors w-10 h-10 hover:bg-blue-200">
            <MenuIcon class="w-18 m-2" />
        </button>
        <div class="pl-4">
            <Menu as="div" class="relative inline-block text-left">
                <MenuButton
                    class="flex items-center p-2 mr-0 rounded-l-full hover:bg-blue-200"
                >
                    <img
                        src="https://robohash.org/stefan-one"
                        class="rounded-full w-8 pr-1"
                        alt="Profil"
                    />
                    <h4 class=" text-blue-800" >iliass mohammed</h4>
                    <ChevronDownIcon
                        class="h-5 w-5 text-blue-800 hover:text-blue-800"
                        aria-hidden="true"
                    />
                </MenuButton>

                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-in"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <MenuItems
                        class="absolute right-0 mt-2 w-32 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                        <div class="px-1 py-1">
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-violet-500 text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    <UserIcon
                                        :active="active"
                                        class="mr-2 h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                    />
                                    Profil
                                </button>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                                <button
                                    :class="[
                                        active
                                            ? 'bg-violet-500 text-white'
                                            : 'text-gray-900',
                                        'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                                    ]"
                                >
                                    <LogoutIcon
                                        :active="active"
                                        class="mr-2 h-5 w-5 text-violet-400"
                                        aria-hidden="true"
                                    />
                                    Logout
                                </button>
                            </MenuItem>
                        </div>
                    </MenuItems>
                </transition>
            </Menu>
        </div>
    </header>
</template>

<script setup>
import { MenuIcon, LogoutIcon, UserIcon } from "@heroicons/vue/outline";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";

const emit = defineEmits(['toggele-sidbar'])
</script>

<style lang="scss" scoped></style>
