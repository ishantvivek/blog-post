<template>
    <aside class="sticky mobile:static flex flex-col self-start p-3 mx-5 flex-1 top-[8rem] gap-20">
        <div class="rounded-md border-grey-100 border border-indigo-blue dark:border-white py-4 px-6 max-w-xs">
            <h1 class="font-bold py-3">BlogPosts</h1>
            <span>
                Blog Post is a blog to post and share thoughts and thinking.
            </span>
        </div>
        <div class="rounded-md border-grey-100 border border-indigo-blue py-4 px-6 max-w-xs dark:border-white">
            <h1 class="font-bold">Categories:</h1>
            <div class="my-4">
                <input id="default-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                <label for="default-checkbox" class="ml-2 text-sm font-medium">
                    Social
                </label>
            </div>
            <div class="my-2">
                <input id="checked-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded">
                <label for="checked-checkbox" class="ml-2 text-sm font-medium">
                    Anti-social
                </label>
            </div>
        </div>
    </aside>
</template>
