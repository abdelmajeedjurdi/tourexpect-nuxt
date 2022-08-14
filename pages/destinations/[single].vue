<template>
    <div class="pt-32">
        <h1 class="text-black">
            {{ route.params.single + " destination" }}
        </h1>
    </div>
</template>
<script setup>
const route = useRoute()
useMeta({
    title: 'Tourexpect - Home'
})
</script>