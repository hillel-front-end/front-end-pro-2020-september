<template>
  <ul class="custom-select-list">
      <li 
        class="custom-select-list__item"
        v-for="(item, $index) in list"
        @click="onChange(item.text)"
        :key="$index"
      >
      {{ item.text }}
      </li>
  </ul>
</template>


<script>
export default {
    props: {
        list: Array
    },
    methods: {
        onChange(text) {
            this.$emit('select', text);
        }
    }

}
</script>


<style lang="scss">
.custom-select-list {
    list-style: none;
    margin: 10px 0px 0px 0px;
    padding: 0px;

    border: 1px solid greenyellow;

    &__item {
        border-bottom: 1px solid greenyellow;
        &:last-child {
             border-bottom: none;
        }
    }
}
</style>