<template>
    <header
        class="max-w-screen-xl flex flex-wrap items-center justify-between my-3 mx-auto p-4 border-solid border-2 border-indigo-600 shadow-nav dark:shadow-nav-dark dark:border-white laptop:mx-3 mobile:mx-5">
        <div>
            <NuxtLink to="/">
                <span
                    class="font-semibold italic text-xl text-indigo-blue border-dotted border-b-2 border-indigo-600 dark:text-white dark:border-white">
                    Blog Posts
                </span>
            </NuxtLink>
        </div>
        <nav class="w-full md:block md:w-auto" id="navbar-default">
            <ul
                class="flex flex-col items-center p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li
                    class="p-3 rounded-xl hover:bg-purple-100 border-b-2 border-transparent hover:border-b-2 hover:border-dotted hover:border-indigo-600 dark:text-white dark:hover:bg-gray-700">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>
                <li
                    class="p-3 rounded-xl hover:bg-purple-100 border-b-2 border-transparent hover:border-b-2 hover:border-dotted hover:border-indigo-600 dark:text-white dark:hover:bg-gray-700">
                    <NuxtLink to="/about">
                        About
                    </NuxtLink>
                </li>
                <li>
                    <DarkMode />
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import DarkMode from './DarkMode';
</script>