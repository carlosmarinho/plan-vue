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

        <b-table 
            sticky-header 
            :items="items" 
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
export default{
    name: 'Sku',
    data() {
      return {
        perPage: 10,
        sortBy: 'name',
        currentPage: 1,
        fields: [
            { key: 'heading 1', sortable: false },
            { key: 'heading 2', sortable: true },
            { key: 'heading 3', sortable: false },
            { key: 'name', sortable: true }
        ],
        items: [
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell', 'name': 'carlos'},
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell 15', 'heading 2': 'table cell', 'heading 3': 'table cell' },
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell', 'name': 'luiz carlos'},
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell', 'name': 'silva carlos'},
          { 'heading 1': 'table cell', 'heading 2': 'table cell', 'heading 3': 'table cell', 'name': 'edu carlos'},
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
}

</script>

<style scoped>
    .header-table{
        margin-top: 30px;
    }
</style>