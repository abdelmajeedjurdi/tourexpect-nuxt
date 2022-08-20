<template>
    <div class="pt-32">
        <comming-soon />
    </div>
</template>
<script setup>
const route = useRoute()
useMeta({
    title: 'Tourexpect - Home'
})
</script>
<style>
#ipc_cases li:hover>ul {
    display: block;
}
</style>