<template>
    <section class="candidate">
        {{ info.name }},   
        {{ info.age }}  
    </section>
</template>

<script>
export default {
    props: {
        info: Object
    }
}
</script>

<style>
    .candidate {
        border: 1px solid red;
        margin: 0px 5px;
        width: 20$
    }
</style>