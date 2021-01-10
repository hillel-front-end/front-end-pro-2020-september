<template>
  <div class="custom-select">
      <div class="custom-select__inner">
        <CustomSelectInput :text="selectedText"/>
        <CustomSelectList 
            :list="dataList"
            @select="getSelectedText"
        />
      </div>
  </div>
</template>


<script>
import CustomSelectInput from './CustomSelectInput';
import CustomSelectList from './CustomSelectList';

export default {
    data: () => ({
        dataList: [
            { text: 'Kyiv', value: '0'},
            { text: 'Kharkov', value: '1'},
            { text: 'Slavutich', value: '2'}, 
            { text: 'Slavutich-2', value: '2'}, 
            { text: 'Odessa', value: '3'},
            { text: 'Odessa-1', value: '3'}
        ],
        selectedText: ''
    }),
    methods: {
        getSelectedText(text) {
            this.$set(this, 'selectedText', text);
        }
    },
    components: {
        CustomSelectInput,
        CustomSelectList
    }
}
</script>


<style lang="scss">
.custom-select {
    display: flex;
    justify-content: center;
}
</style>