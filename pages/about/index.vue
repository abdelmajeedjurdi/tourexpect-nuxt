<template>




    <div
        class="dropdown inline px-4 text-purple-500 hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
        <a>Dropdown</a>
        <div class="dropdown-menu absolute hidden h-auto flex pt-4">
            <ul class="block w-full bg-white shadow px-12 py-8">
                <li class="py-1"><a
                        class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a>
                </li>
                <li class="py-1"><a
                        class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item
                        2</a></li>
                <li class="py-1"><a
                        class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item
                        3</a></li>
                <li class="py-1"><a
                        class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item
                        4</a></li>
                <li class="py-1"><a
                        class="block text-purple-500 font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item
                        5</a></li>
            </ul>
        </div>
    </div>

    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="relative inline-block text-left bg-slate-500 dropdown">
        <div>
            <button type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button" aria-expanded="true" aria-haspopup="true">
                Options
                <!-- Heroicon name: solid/chevron-down -->
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </button>
        </div>

        <div class="z-30 origin-top-right absolute dropdown-menu top-8  right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1 p-8" role="none">

                <a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex" role="menuitem" tabindex="-1"
                    id="menu-item-0">
                    <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span><span class="font-bold"> Service 1</span></a>
                <a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex" role="menuitem" tabindex="-1"
                    id="menu-item-0">
                    <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span><span> Service 2</span></a>
                <a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex" role="menuitem" tabindex="-1"
                    id="menu-item-0">
                    <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span><span> Service 3</span></a>
                <a href="#" class="text-gray-700 border-b px-4 py-2 text-sm flex" role="menuitem" tabindex="-1"
                    id="menu-item-0">
                    <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </span><span> Service 4</span></a>
            </div>
        </div>
    </div>
</template>
<style>
.dropdown:hover .dropdown-menu {
    display: block;
}
</style>