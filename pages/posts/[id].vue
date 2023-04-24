<template>
    <div class="flex flex-col m-28 w-[40%] mobile:w-[80%] mx-auto text-indigo-blue dark:text-white">
        <div class="text-3xl font-bold tracking-[.15em] my-3">A friend in need is a friend indeed</div>
        <span class="p-2 rounded w-fit bg-purple-100 dark:bg-gray-700">#tag1</span>
        <div class="py-4">
            <span class="font-thin italic">Published by </span>
            <span class="italic font-bold">Andrew Dyer </span>
            <span class="font-thin">27th September, 2023</span>
        </div>
        <div class="font-thin tracking-[.01em] text-lg leading-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus eligendi ullam
            officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis dolor
            asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam
            officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis dolor
            asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam
            officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis dolor
            asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, autem praesentium? Doloribus
            eligendi ullam officia consectetur, ratione est natus a nemo ex nostrum unde voluptatem. Sapiente fugit officiis
            dolor asperiores!
        </div>
        <div class="flex flex-col py-4 w-full">
            <div class="my-4 border-b border-indigo-blue dark:border-white">
                <h2 class="pb-2">1 Comments</h2>
            </div>
            <div class="w-full">
                <input class="w-full dark:text-black rounded h-20" type="text">
            </div>
            <div class="flex justify-end pt-4">
                <button type="button"
                    class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-indigo-blue focus:outline-none bg-purple-100 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-800">
                    Post
                </button>
            </div>
            <div class="flex flex-col border rounded p-4 border-indigo-blue dark:border-white">
                <div class="flex gap-6">
                    <span class="font-bold">Michael Gross</span>
                    <span class="font-thin">Sep 28, 2023</span>
                </div>
                <div class="py-5">
                    <p>Wow! Awesome Post!!!</p>
                </div>
                <div>
                    <button type="button" class="flex items-center font-xl gap-2">
                        <svg aria-hidden="true" class="w-5 h-5 hover:fill-red-500" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span>11 Likes</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const { id } = useRoute().params
</script>
