<template>
    <TableByApi :items="allSkus" :fields="fields"/>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableByApi from './TableByApi';
import fields from '../assets/json/sku/'

export default{
    name: 'Sku',
    props: ['params'],
    data() {
      return {
        perPage: 30,
        sortBy: 'name',
        currentPage: 1,
        items: [],
        fields: fields
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
    components: {
      TableByApi
    }
}

</script>

