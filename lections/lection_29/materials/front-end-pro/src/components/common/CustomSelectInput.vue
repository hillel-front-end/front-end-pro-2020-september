<template>
  <div class="custom-select-input">
      <input type="text" v-model="mainText">
  </div>
</template>


<script>
export default {
  data: () => ({
    mainText: ''
  }),
  props: {
    text: String
  },
  watch: {
    text() {
      this.mainText = this.text;
    }
  },
}
</script>
