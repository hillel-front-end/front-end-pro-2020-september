<template>
    <article class="candidates">
        <Candidate 
            v-for="(cand, index) in getCandidatesList"
            class="candidates__candidate"
            :key="index"
            :info="cand"
        /> 
    </article>  
</template>     

<script>
import Candidate from './Candidate.vue'

export default {
    name: 'Candidates',
    computed: {
        getCandidatesList() {
            return this.$store.state.candidates;
        }
    },
    components: {
        Candidate
    },
    created() {
        this.$store.dispatch('asyncChangeCandidatesList')
    }
}
</script>

<style>
.candidates {
    display: flex;
}
</style>
