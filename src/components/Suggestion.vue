<template>
  <div>
    
    <b-form-checkbox v-model="stickyHeader" class="mb-2">Sticky header</b-form-checkbox>
    <b-table :sticky-header="stickyHeader" responsive :items="allSuggestions" :fields="fields">
      <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
      <div slot="HEAD[id]" class="text-nowrap" >Row ID</div>
      <div slot="HEAD[]" class="text-nowrap" slot-scope="scope">
        {{ scope.label }}
      </div>
    </b-table>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import fields from '../assets/json/suggestion'

  export default {
    name: 'Suggestion',
    props: ['params'],
    data() {
      return {
        stickyHeader: true,
        perPage: 30,
        currentPage: 1,
        items: [],
        fields
      }
    },
    computed: {
      ...mapGetters(['allSuggestions']),
      rows() {
        //return this.items.length
        return this.allSuggestions.length;
      }
    },
    methods: mapActions(['fetchSuggestions']),
    created() {
      this.fetchSuggestions();
    }
  }
</script>

<style >
.min-left {
    left: 70px !important;
}
</style>