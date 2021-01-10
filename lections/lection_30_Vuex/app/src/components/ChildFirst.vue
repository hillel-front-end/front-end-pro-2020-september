<template>
  <div class="child">
      <h2>Child First component</h2>
      Data from Vuex:
      {{ getPerson.age }}

      getAge: {{ getAge }}
    
      <br />
      
      <input  v-model="name"/>


      <button @click="onChangeName"> change name </button>
  </div>  
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
console.log(mapGetters(['getPerson']))
export default {
  name: 'ChildFirst',
  data: () => ({
    name: ''
  }),
  methods: {
    ...mapMutations(['changeName']),
    onChangeName() {
      // this.$store.commit('changeName', this.name)
      console.log(this.changeName(this.name), 'this.name')
    }
  },
  computed: mapGetters(['getPerson', 'getAge'])
}
</script>


