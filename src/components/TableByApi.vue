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
            :items="items"
            :fields="fields" 
            :per-page="perPage"
            :current-page="currentPage" 
            head-variant="light"
            :filter="filter"
            :filterIncludedFields="filterOn"
            @filtered="onFiltered"
        >
          <template slot="[descItem]" slot-scope="data">
            <!-- `data.value` is the value after formatted by the Formatter -->
            <div v-b-tooltip.hover :title="data.item.descItem">{{ data.value }}</div>
            
          </template>
        </b-table>
        <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
        >
        </b-pagination>

        <p class="mt-3">Current Page: {{ currentPage }}</p>
        <p>skulist tamanho: {{ items.length }}</p>

    </div>
</template>


<script>
    export default {
        name: 'TableByApi',
        props: ['items', 'fields'],
        data() {
            return {
                perPage: 30,
                sortBy: 'name',
                currentPage: 1,
                sortDesc: false,
                sortDirection: 'asc',
                filter: null,
                filterOn: [],
            }
        },
        computed: {
            rows() {
                //return this.items.length
                return this.items.length;
            }
        },
        methods: {
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            onFiltered(filteredItems) {
                // Trigger pagination to update the number of buttons/pages due to filtering
                this.totalRows = filteredItems.length
                this.currentPage = 1
            }
        }
    }
</script>

<style scoped>
    .header-table{
        margin-top: 30px;
    }
</style>