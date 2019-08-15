<template>
    <div class="header-table">  

        
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

skulist tamanho: {{ allSkus.length }}
        <!--b-table 
            sticky-header 
            :items="allSkus" 
            :fields="fileds"
            :per-page="perPage"
            :current-page="currentPage" 
            head-variant="light"
        -->
        <b-table 
            sticky-header="500px"
            :items="allSkus"
            :fields="fields" 
            :per-page="perPage"
            :current-page="currentPage" 
            head-variant="light"
        >
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        >
        </b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import fields from '../assets/json/sku/'

export default{
    name: 'Sku',
    props: ['params'],
    data() {
      return {
        perPage: 10,
        sortBy: 'name',
        currentPage: 1,
        
        items: [],
        fields,
      }
    },
    computed: {
      ...mapGetters(['allSkus']),
      rows() {
        //return this.items.length
        return this.allSkus.length;
      }
    },
    methods: mapActions(['fetchSkus']),
    created() {
      //console.log("criou o metodo...", this.$route.params);
      this.fetchSkus();
      //console.log("todas as skus", skuList);
        
    },
}

</script>

<style scoped>
    .header-table{
        margin-top: 30px;
    }
</style>