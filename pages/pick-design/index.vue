
<template>
    <div>
        <div class="py-12 px-12 text-white bg-haval ">
            <h1 class="text-3xl container">Let us know about your design</h1>
        </div>

        <form class="w-full my-8 px-12">
            <div class="flex flex-wrap w-1/2 mb-6 ">
                <div class="w-full md:w-full   mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-2xl font-bold my-4">
                        <span style="padding-top:2px;padding-bottom: 2px ;"
                            class="px-2 border-2 border-haval rounded-full font-extrabold text-haval text-lg">1</span>
                        Choose your product
                    </label>
                    <searchable-dropdown />
                    <!-- <input
                        class="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3   leading-tight focus:outline-none"
                        type='email' required> -->
                </div>
                <div class="w-full md:w-full   mb-6">
                    <label class="block uppercase tracking-wide text-gray-700 text-2xl font-bold my-4">
                        <span style="padding-top:2px;padding-bottom: 2px ;"
                            class="px-2 border-2 border-haval rounded-full font-extrabold text-haval text-lg">2</span>
                        Describe your product</label>
                    <textarea name="description" id="description"
                        class="appearance-none block w-full h-32 bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3   leading-tight focus:outline-none"></textarea>
                </div>

                <label for="dropzone-file"
                    class=" cursor-pointer flex-col align-items-center rounded-xl border-2 border-dashed border-haval bg-white w-full">
                    <div class="my-24 text-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-haval mx-auto" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Attach File (Optional)
                        </h2>
                        <p class="mt-2 text-gray-500 tracking-wide">Want to upload any images for reference?
                        </p>
                        <input id="dropzone-file" type="file" class="hidden" />
                    </div>
                </label>
                <!-- </div> -->

            </div>

            <div class="mt-10 ">
                <p class="block uppercase tracking-wide text-gray-700 text-2xl font-bold my-4">
                    <span style="padding-top:2px;padding-bottom: 2px ;"
                        class="px-2 border-2 border-haval rounded-full font-extrabold text-haval text-lg mr-1">3</span>Tell
                    us about your style
                </p>
                <label class="block ml-5 mb-5 tracking-wide text-gray-700 text-xl font-bold ">Which design do you like?
                </label>

                <div class="grid grid-cols-3 gap-3">
                    <div class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white">
                        <input type="checkbox"
                            class="custom-control-input absolute rounded mt-2 ml-2 accent-haval h-5 w-5 " id="clean">
                        <label class="custom-control-label" for="clean">
                            <img src="/images/clean.png" alt="#" class="img-fluid rounded-t">
                            <label for="clean" class="rounded-b py-3 text-center text-xl w-full bg-red-500">Clean &
                                Simple</label>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white ">
                        <input type="checkbox"
                            class="custom-control-input absolute rounded mt-2 ml-2 accent-haval h-5 w-5 " id="elegant">
                        <label class="custom-control-label" for="elegant">
                            <img src="/images/elegant.png" alt="#" class="img-fluid rounded-t">
                            <label for="elegant" class="rounded-b py-3 text-center text-xl w-full">Elegant &
                                formal</label>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white ">
                        <input type="checkbox"
                            class="custom-control-input absolute rounded mt-2 ml-2 accent-haval h-5 w-5 " id="fun">
                        <label class="custom-control-label" for="fun">
                            <img src="/images/fun.png" alt="#" class="img-fluid rounded-t">
                            <label for="fun" class="rounded-b py-3 text-center text-xl w-full">Fun &
                                whimsical</label>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white ">
                        <input type="checkbox"
                            class="custom-control-input absolute rounded mt-2 ml-2 accent-haval h-5 w-5 " id="bold">
                        <label class="custom-control-label" for="bold">
                            <img src="/images/bold.png" alt="#" class="img-fluid rounded-t">
                            <label for="bold" class="rounded-b py-3 text-center text-xl w-full">Bold &
                                Colorful</label>
                        </label>
                    </div>
                    <div class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white ">
                        <input type="checkbox"
                            class="custom-control-input absolute rounded mt-2 ml-2 accent-haval h-5 w-5 " id="rustic">
                        <label class="custom-control-label" for="rustic">
                            <img src="/images/rustic.png" alt="#" class="img-fluid rounded-t">
                            <label for="rustic" class="rounded-b py-3 text-center text-xl w-full">Rustic &
                                vintage</label>
                        </label>
                    </div>
                    <label for="dropzone-file"
                        class=" cursor-pointer flex-col align-items-center rounded-xl border-2 border-dashed border-haval bg-white ">
                        <div class="my-24 text-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-haval mx-auto" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <h2 class="mt-4 text-xl font-medium text-gray-700 tracking-wide">Attach File (Optional)
                            </h2>
                            <p class="mt-2 text-gray-500 tracking-wide">Want to upload any images for reference?
                            </p>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </div>
                    </label>
                </div>
            </div>
            <div class="mt-10">
                <label class="block ml-5 tracking-wide text-gray-700 text-xl font-bold mb-4 ">Which Color do you
                    like?
                </label>
                <div class="grid grid-cols-6 gap-3">
                    <div v-for="i in 9" :key="i"
                        class="custom-control custom-checkbox image-checkbox  border-2 rounded-md bg-white ">
                        <input type="checkbox" class="h-5 w-5 absolute rounded mt-2 ml-2 accent-haval"
                            :id="'color' + i">
                        <label class="custom-control-label w-full" :for="'color' + i">
                            <svg viewBox="0 0 88 88" fill="none" class="w-32 mt-1 mx-auto">
                                <circle cx="44" cy="27.5" r="27.5" fill="#60ACF1" style="mix-blend-mode: multiply;">
                                </circle>
                                <circle cx="44" cy="60.5" r="27.5" fill="#4BA9FF" style="mix-blend-mode: multiply;">
                                </circle>
                                <circle cx="60.5" cy="44" r="27.5" fill="#AFE3FF" style="mix-blend-mode: multiply;">
                                </circle>
                                <circle cx="27.5" cy="44" r="27.5" fill="#43B0FF" style="mix-blend-mode: multiply;">
                                </circle>
                            </svg>
                            <label :for="'color' + i" class="rounded-b py-3 text-center text-xl w-full">{{ "Color "
                                    + i
                            }}</label>
                        </label>
                    </div>

                    <label for="dropzone-file"
                        class=" cursor-pointer flex-col align-items-center rounded-xl border-2 border-dashed border-haval bg-white ">
                        <div class="mt-2 text-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-haval mx-auto" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <h2 class="mt-2 text-xl font-medium text-gray-700 tracking-wide">Attach File (Optional)
                            </h2>
                            <p class="mt-2 text-gray-500 tracking-wide">Want to upload any images for reference?
                            </p>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </div>
                    </label>
                </div>
            </div>
            <div class="mt-10">

                <label class="block uppercase tracking-wide text-gray-700 text-2xl font-bold my-4">
                    <span style="padding-top:2px;padding-bottom: 2px ;"
                        class="px-2 border-2 border-haval rounded-full font-extrabold text-haval text-lg">4</span>
                    Would you like to review in real-time with your designer?
                </label>
                <div class="form-check ml-3 my-2">
                    <input class="form-check-input" type="radio" name="realTimeDesigner" id="yes">
                    <label class="ml-2 form-check-label text-xl font-bold" for="yes">
                        Yes, let's schedule a DesignLive session with my designer.
                    </label>
                    <p class="text-lg ml-6 " for="yes">Talk with your designer in a half-hour video chat. Discuss
                        revisions & provide
                        feedback while they work on your design in real-time. No additional fee.
                    </p>
                </div>
                <div class="form-check ml-3">
                    <input class="form-check-input" type="radio" name="realTimeDesigner" id="no" checked>
                    <label class="form-check-label text-xl font-bold ml-2" for="no">
                        No thanks, I prefer to review through email.
                    </label>
                    <p class="text-lg ml-6" for="no">
                        Provide written feedback through the website with three rounds of revisions. Receive your
                        design
                        within 24 hours.
                    </p>
                </div>
            </div>
            <div class="mt-10">
                <p class="block uppercase tracking-wide text-gray-700 text-2xl font-bold my-4">
                    <span style="padding-top:2px;padding-bottom: 2px ;"
                        class="px-2 border-2 border-haval rounded-full font-extrabold text-haval text-lg">5</span>
                    Sumit your design request
                </p>
                <button type="submit" class="bg-haval py-3 px-12 rounded-xl font-bold text-lg ml-3">Submit</button>
            </div>
        </form>
    </div>
</template>
<script setup>
onMounted(() => {
    'mounteddd'
})
</script>
<style scoped>
label {
    display: inline-block !important;
}
</style>