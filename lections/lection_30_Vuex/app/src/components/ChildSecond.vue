<template>
  <div class="child">
      <h2>Child Second component</h2>
      Data from Vuex:
      {{ getPerson.name }}

      <br />

      <!-- {{getPersonInfo}} -->

      <button @click="getCandidates()">get candidates</button>
  </div>  
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'ChildSecond',
    methods: {
        getCandidates() {
            this.$store.dispatch('asyncChangeCandidatesList', 'some value')
        }
    },
    computed: {
        ...mapGetters(['getPerson']),
        getPersonInfo() {
            const { name, age } = this.getPerson;

            return `${name} - ${age}`
        }
    }
}
</script>


